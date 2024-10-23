import { NextResponse, NextRequest } from 'next/server';
import { verifyJWT } from './lib/jwt';

export async function middleware(request: NextRequest) {
  const tokenCookie = request.cookies.get('token');
  const token = tokenCookie ? tokenCookie.value : null;
  const { pathname } = request.nextUrl;

  console.log('Middleware token:', token); // Log the token for debugging
  console.log('Requested path:', pathname); // Log the requested path for debugging

  // Allow access to static files and public routes
  const isStaticFile = pathname.startsWith('/_next/') || pathname.endsWith('.css') || pathname.endsWith('.js');
  const publicRoutes = ['/', '/login', '/signup', '/pricing'];
  const isPublicRoute = publicRoutes.includes(pathname) || isStaticFile;

  // Exclude API routes from middleware checks
  if (pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  // If the token exists (user is authenticated)
  if (token) {
    try {
      const payload = await verifyJWT(token);

      if (!payload) {
        console.log('Invalid token, redirecting to login.'); // Log for debugging
        const response = NextResponse.redirect(new URL('/login', request.url));
        response.cookies.set('token', '', { maxAge: -1 });
        return response;
      }

      // Prevent authenticated users from accessing /login or /signup
      if (pathname === '/login' || pathname === '/signup') {
        console.log('Authenticated user trying to access login/signup, redirecting.'); // Log for debugging
        return NextResponse.redirect(new URL('/', request.url));
      }

      console.log('Token is valid, proceeding to:', pathname); // Log for debugging
      return NextResponse.next(); // Proceed if token is valid
    } catch (error) {
      console.error('Error validating token:', error);
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Allow access to public routes
  if (!token && isPublicRoute) {
    return NextResponse.next();
  }

  // Redirect unauthenticated users to login if trying to access protected routes
  if (!token && !isPublicRoute) {
    console.log('Unauthenticated access to protected route, redirecting to login.'); // Log for debugging
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next(); // Allow access if no issues
}
