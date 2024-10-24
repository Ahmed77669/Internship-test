import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // Create a response object
    const response = NextResponse.json({ message: 'Logout successful' });

    // Set the token cookie with Max-Age=0 to remove it
    response.cookies.set('token', '', {
      httpOnly: true,
      path: '/',
      maxAge: 0,  // This effectively deletes the cookie
      sameSite: 'strict',
    });

    return response;
  } catch (error) {
    console.error('Error during logout:', error);
    return NextResponse.json({ error: 'Error during logout' }, { status: 500 });
  }
}
