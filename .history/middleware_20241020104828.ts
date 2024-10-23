import { NextResponse } from 'next/server';
import { verifyJWT } from './lib/jwt'; // adjust path as needed

export async function middleware(request:any) {
  const token = request.cookies.get('token'); // Updated way to get cookies

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url)); // Use 'URL' to redirect properly
  }

  try {
    const payload = await verifyJWT(token);

    if (!payload) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // Token is valid, proceed to the next middleware or page
    return NextResponse.next();
  } catch (error) {
    // return NextResponse.redirect(new URL('/login', request.url));
  }
}
