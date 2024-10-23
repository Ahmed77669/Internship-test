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

  // Allow API routes and static files
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

      // If authenticated user tries to access login or signup, redirect to home or another page
      if (pathname === "/login" || pathname === "/signup") {
        return NextResponse.redirect(new URL("/", request.url)); // Redirect authenticated users from login/signup
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

  // If user is not authenticated but accessing a public route, allow it
  if (!token && isPublicRoute) {
    // Set a cookie indicating the user is not authenticated
    response.cookies.set("isAuthenticated", "false");
    return response;
  }

  // Redirect unauthenticated users trying to access protected routes to login
  return NextResponse.redirect(new URL("/login", request.url));
}
