import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const headers = new Headers();
    
    // Set the token cookie with Max-Age=0 to remove it
    headers.append(
      'Set-Cookie',
      'token=; HttpOnly; Path=/; Max-Age=0; SameSite=Strict'
    );

    return NextResponse.json({ message: 'Logout successful' }, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Error during logout:', error);
    return NextResponse.json({ error: 'Error during logout' }, {
      status: 500,
    });
  }
}