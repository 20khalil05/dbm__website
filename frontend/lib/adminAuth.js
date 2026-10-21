const encoder = new TextEncoder();
const SESSION_DURATION_MS = 1000 * 60 * 60 * 24 * 7; // 7 jours

async function getKey() {
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(process.env.ADMIN_SESSION_SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

function toBase64Url(bytes) {
  let str = "";
  for (const b of bytes) str += String.fromCharCode(b);
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64Url(str) {
  str = str.replace(/-/g, "+").replace(/_/g, "/");
  while (str.length % 4) str += "=";
  const bin = atob(str);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

export async function createSessionToken() {
  const expiresAt = Date.now() + SESSION_DURATION_MS;
  const payload = `admin.${expiresAt}`;
  const key = await getKey();
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  return `${payload}.${toBase64Url(new Uint8Array(signature))}`;
}

export async function verifySessionToken(token) {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 3) return false;

  const [role, expiresAtStr, sigB64] = parts;
  const expiresAt = Number(expiresAtStr);
  if (!expiresAt || Date.now() > expiresAt) return false;

  const key = await getKey();
  const valid = await crypto.subtle.verify(
    "HMAC",
    key,
    fromBase64Url(sigB64),
    encoder.encode(`${role}.${expiresAtStr}`)
  );
  return valid && role === "admin";
}

export async function requireAdmin(request) {
  const token = request.cookies.get("admin_session")?.value;
  const valid = await verifySessionToken(token);
  if (!valid) {
    return Response.json({ error: "Non autorisé." }, { status: 401 });
  }
  return null;
}