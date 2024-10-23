import { NextRequest, NextResponse } from "next/server";
import { verifyJWT } from "./lib/jwt";

export async function middleware(request: NextRequest) {
  const tokenCookie = request.cookies.get("token");
  const token = tokenCookie?.value;
  const { pathname } = request.nextUrl;

  const isStaticFile =
    pathname.startsWith("/_next/") ||
    pathname.endsWith(".css") ||
    pathname.endsWith(".js");
  const publicRoutes = ["/", "/login", "/signup", "/pricing"];
  const isPublicRoute = publicRoutes.includes(pathname) || isStaticFile;

  if (pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  if (token) {
    try {
      const payload = await verifyJWT(token);
      if (!payload) {
        const response = NextResponse.redirect(new URL("/login", request.url));
        response.cookies.set("token", "", { maxAge: -1 });
        return response;
      }

      // Set a cookie indicating the user is authenticated
      const response = NextResponse.next();
      response.cookies.set("isAuthenticated", "true");
      return response;
    } catch (error) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  const response = NextResponse.next();
  if (!token && isPublicRoute) {
    // Set a cookie indicating the user is not authenticated
    response.cookies.set("isAuthenticated", "false");
    return response;
  }

  return NextResponse.redirect(new URL("/login", request.url));
}
