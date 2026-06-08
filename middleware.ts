import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const auth = request.cookies.get("auth")?.value;

  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");

  const isLoginRoute = request.nextUrl.pathname.startsWith("/login");
  //console.log("Middleware checking:", request.nextUrl.pathname, "Auth:", auth);

  if (isAdminRoute && !auth) {
    return NextResponse.redirect(new URL("/login?from=admin", request.url));
  }

  if (isLoginRoute && auth === "true") {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}
