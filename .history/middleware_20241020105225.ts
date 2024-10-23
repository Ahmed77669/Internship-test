import { NextResponse } from 'next/server';
import { verifyJWT } from './lib/jwt'; // Adjust path as needed

export async function middleware(request: { cookies: { get: (arg0: string) => any; }; nextUrl: { pathname: string; }; url: string | URL | undefined; }) {
  const token = request.cookies.get('token');

  // If the token doesn't exist and the user is not already on the signin page, redirect them
  if (!token && !request.nextUrl.pathname.startsWith('/signup')) {
    return NextResponse.redirect(new URL('/signup', request.url));
  }

  // If the token exists, try to validate it
  if (token) {
    try {
      const payload = await verifyJWT(token);

      if (!payload) {
        // If token is invalid, clear it and redirect to sign-in
        const response = NextResponse.redirect(new URL('/signup', request.url));
        response.cookies.set('token', '', { maxAge: -1 }); // Clear invalid token
        return response;
      }

      // If the user is trying to access /signin but is already authenticated, redirect them elsewhere
      if (request.nextUrl.pathname.startsWith('/signup')) {
        return NextResponse.redirect(new URL('/dashboard', request.url)); // Redirect to dashboard or another protected page
      }
      
      return NextResponse.next(); // Proceed to the next middleware or page
    } catch (error) {
      console.error('Error validating token:', error);
      return NextResponse.redirect(new URL('/signup', request.url));
    }
  }

  // Allow access if no issues
  return NextResponse.next();
}
