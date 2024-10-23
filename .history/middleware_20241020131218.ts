import { NextRequest, NextResponse } from "next/server";
import { verifyJWT } from "./lib/jwt";

export async function middleware(request: NextRequest) {
  const tokenCookie = request.cookies.get('token');
  const token = tokenCookie?.value;
  const { pathname } = request.nextUrl;

  console.log('Middleware token:', token);
  console.log('Requested path:', pathname);

  const isStaticFile = pathname.startsWith('/_next/') || pathname.endsWith('.css') || pathname.endsWith('.js');
  const publicRoutes = ['/', '/login', '/signup', '/pricing'];
  const isPublicRoute = publicRoutes.includes(pathname) || isStaticFile;

  // Exclude API routes from middleware checks
  if (pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  if (token) {
    try {
      const payload = await verifyJWT(token);
      if (!payload) {
        console.log('Invalid token, redirecting to login.');
        const response = NextResponse.redirect(new URL('/login', request.url));
        response.cookies.set('token', '', { maxAge: -1 });
        return response;
      }

      // Redirect authenticated users from login/signup
      if (pathname === '/login' || pathname === '/signup') {
        console.log('Authenticated user trying to access login/signup, redirecting.');
        return NextResponse.redirect(new URL('/', request.url));
      }

      return NextResponse.next();
    } catch (error) {
      console.error('Error validating token:', error);
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Allow access to public routes or redirect to login for protected routes
  if (!token && isPublicRoute) {
    return NextResponse.next();
  }

  console.log('Unauthenticated access to protected route, redirecting to login.');
  return NextResponse.redirect(new URL('/login', request.url));
}