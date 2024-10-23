import { NextResponse } from 'next/server';
import { verifyJWT } from './lib/jwt';

export async function middleware(request: { cookies: { get: (arg0: string) => any; }; nextUrl: { pathname: any; }; url: string | URL | undefined; }) {
  const token = request.cookies.get('token');
  const { pathname } = request.nextUrl;

  const publicRoutes = ['/', '/login', '/signup', '/pricing'];
  const isPublicRoute = publicRoutes.includes(pathname);
  const isStaticFile = pathname.startsWith('/_next') || pathname.startsWith('/static') || pathname.startsWith('/favicon.ico');
  const isApiRoute = pathname.startsWith('/api');

  // Bypass middleware for static files and API routes
  if (isStaticFile || isApiRoute) {
    return NextResponse.next();
  }

  // If the token exists (user is authenticated)
  if (token) {
    try {
      const payload = await verifyJWT(token);

      if (!payload) {
        const response = NextResponse.redirect(new URL('/login', request.url));
        response.cookies.set('token', '', { maxAge: -1 }); // Clear invalid token
        return response;
      }

      // Prevent authenticated users from accessing /login or /signup
      if (pathname === '/login' || pathname === '/signup') {
        return NextResponse.redirect(new URL('/dashboard', request.url)); // Redirect authenticated users to dashboard
      }

      return NextResponse.next(); // Proceed to protected pages like /profile
    } catch (error) {
      console.error('Error validating token:', error);
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // If no token exists, allow access to public routes
  if (!token && isPublicRoute) {
    return NextResponse.next(); // Allow access to public routes like /login and /signup
  }

  // Redirect unauthenticated users trying to access protected routes
  if (!token && !isPublicRoute) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next(); // Allow access if no issues
}
