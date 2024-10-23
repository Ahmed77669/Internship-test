import { NextResponse } from 'next/server';
import { verifyJWT } from './lib/jwt'; // Adjust path as needed
import './app/globals.css';

export async function middleware(request: { cookies: { get: (arg0: string) => any; }; nextUrl: { pathname: any; }; url: string | URL | undefined; }) {
  const token = request.cookies.get('token');
  const { pathname } = request.nextUrl;

  // List of public routes that do not require authentication
  const publicRoutes = ['/', '/signin', '/signup', '/pricing'];

  // Check if the route is public
  const isPublicRoute = publicRoutes.includes(pathname);

  // If the token exists (user is authenticated)
  if (token) {
    try {
      const payload = await verifyJWT(token);

      if (!payload) {
        // If token is invalid, clear it and redirect to sign-in
        const response = NextResponse.redirect(new URL('/signin', request.url));
        response.cookies.set('token', '', { maxAge: -1 }); // Clear invalid token
        return response;
      }

      // Prevent authenticated users from accessing /signup or /signin
      if (pathname === '/signin' || pathname === '/signup') {
        return NextResponse.redirect(new URL('/dashboard', request.url)); // Redirect to a protected page like dashboard
      }

      return NextResponse.next(); // Proceed if token is valid and user is not trying to access restricted public pages
    } catch (error) {
      console.error('Error validating token:', error);
      return NextResponse.redirect(new URL('/signin', request.url));
    }
  }

  // If no token exists, allow access to public routes
  if (!token && isPublicRoute) {
    return NextResponse.next(); // Allow access to public routes
  }

  // Redirect unauthenticated users to signin if trying to access protected routes
  if (!token && !isPublicRoute) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  return NextResponse.next(); // Allow access if no issues
}
