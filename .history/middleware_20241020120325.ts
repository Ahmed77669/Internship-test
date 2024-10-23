import { NextResponse, NextRequest } from 'next/server';
import { verifyJWT } from './lib/jwt';

export async function middleware(request: NextRequest) {
  const tokenCookie = request.cookies.get('token');
  const token = tokenCookie ? tokenCookie.value : null;
  const { pathname } = request.nextUrl;

  // Allow access to static files and the public routes
  const isStaticFile = pathname.startsWith('/_next/') || pathname.endsWith('.css') || pathname.endsWith('.js');
  const publicRoutes = ['/', '/login', '/signup', '/pricing'];
  const isPublicRoute = publicRoutes.includes(pathname) || isStaticFile;

  // If the token exists (user is authenticated)
  if (token) {
    try {
      const payload = await verifyJWT(token);

      if (!payload) {
        const response = NextResponse.redirect(new URL('/signin', request.url));
        response.cookies.set('token', '', { maxAge: -1 }); // Clear invalid token
        return response;
      }

      // Prevent authenticated users from accessing /signup or /signin
      if (pathname === '/login' || pathname === '/signup') {
        return NextResponse.redirect(new URL('/dashboard', request.url));
      }

      return NextResponse.next();
    } catch (error) {
      console.error('Error validating token:', error);
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Allow access to public routes
  if (!token && isPublicRoute) {
    return NextResponse.next();
  }

  // Redirect unauthenticated users to signin if trying to access protected routes
  if (!token && !isPublicRoute) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}
