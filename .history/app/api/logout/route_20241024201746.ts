import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const response = NextResponse.json(
      { message: 'Logout successful' },
      { status: 200 }
    );

    // Clear the token cookie
    response.cookies.set('token', '', { 
      httpOnly: true,
      expires: new Date(0),
      sameSite: 'strict',
      path: '/'
    });

    return response;
  } catch (error) {
    console.error('Error during logout:', error);
    return NextResponse.json({ error: 'Error during logout' }, {
      status: 500,
    });
  } 
}