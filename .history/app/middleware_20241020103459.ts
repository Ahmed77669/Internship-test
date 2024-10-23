import { NextResponse } from 'next/server';
import { verifyJWT } from '../lib/jwt';

export async function middleware(req:any) {
  const token = req.cookies.token;

  if (!token) {
    return NextResponse.redirect('/signin');
  }

  const payload = await verifyJWT(token);
  if (!payload) {
    return NextResponse.redirect('/signin');
  }

  return NextResponse.next();
}