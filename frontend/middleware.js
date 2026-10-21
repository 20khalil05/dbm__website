import { NextResponse } from "next/server";
import { verifySessionToken } from "@/lib/adminAuth";

export async function middleware(request) {
  const token = request.cookies.get("admin_session")?.value;
  const isValid = await verifySessionToken(token);

  if (!isValid) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/jobs/:path*"],
};