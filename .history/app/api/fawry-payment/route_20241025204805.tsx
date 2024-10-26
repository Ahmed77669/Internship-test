import type { NextApiRequest, NextApiResponse } from 'next';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { amount, orderId } = req.body;

  try {
    // Include securityKey in the body if required by Fawry's API
    const fawryResponse = await fetch('https://atfawry.fawrystaging.com/atfawry/plugin/assets/payments/js/fawrypay-payments.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount,
        orderId,
        merchantCode: '770000014277',
        securityKey: '341c6bad-323a-486a-be2d-41c17a4abb2f', // Include the securityKey as part of the request body
        // Add other parameters as per Fawry's API requirements
      }),
    });

    if (!fawryResponse.ok) {
      throw new Error('Fawry API request failed');
    }

    const data = await fawryResponse.json();

    // Assuming Fawry returns a payment URL
    res.status(200).json({ paymentUrl: data.paymentUrl });
  } catch (error) {
    console.error('Fawry payment error:', error);
    res.status(500).json({ message: 'Error initiating Fawry payment' });
  }
}
