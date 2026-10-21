import { createSessionToken } from "@/lib/adminAuth";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Requête invalide." }, { status: 400 });
  }

  if (!body.password || body.password !== process.env.ADMIN_PASSWORD) {
    return Response.json({ error: "Mot de passe incorrect." }, { status: 401 });
  }

  const token = await createSessionToken();
  const response = Response.json({ success: true });
  response.headers.set(
    "Set-Cookie",
    `admin_session=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60 * 60 * 24 * 7}${
      process.env.NODE_ENV === "production" ? "; Secure" : ""
    }`
  );
  return response;
}