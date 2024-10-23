// app/api/generate-signature/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { merchantCode, merchantRefNum, customerMobile, totalPrice } = await req.json();

  // Check for missing parameters
  if (!merchantCode || !merchantRefNum || !customerMobile || !totalPrice) {
    return NextResponse.json({ message: 'Missing parameters' }, { status: 400 });
  }

  try {
    // Simulate signature generation (replace this with actual logic)
    const signature = `generated_signature_for_${merchantRefNum}`;

    return NextResponse.json({ signature }, { status: 200 });
  } catch (error) {
    console.error('Error generating signature:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
