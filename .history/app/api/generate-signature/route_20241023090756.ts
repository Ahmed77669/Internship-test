// app/api/generate-signature/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const body = await req.json();
     
    // Attempt to parse the incoming request JSON
    const { merchantCode, merchantRefNum, customerMobile, totalPrice } = body;

    // Check if all required parameters are provided
    if (!merchantCode || !merchantRefNum || !customerMobile || !totalPrice) {
        return NextResponse.json({ message: 'Missing parameters' }, { status: 400 });
    }

    try {
        // Replace with your actual signature generation logic
        const signature = `generated_signature_for_${merchantRefNum}`;

        return NextResponse.json({ signature }, { status: 200 });
    } catch (error) {
        console.error('Error generating signature:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}
