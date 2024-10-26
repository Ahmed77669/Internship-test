import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const { amount, orderId } = req.body

  try {
    // TODO: Replace with actual Fawry API call
    const fawryResponse = await fetch('https://atfawry.fawrystaging.com/atfawry/plugin/assets/payments/js/fawrypay-payments.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_FAWRY_API_KEY',
      },
      body: JSON.stringify({
        amount,
        orderId,
        // Add other required parameters as per Fawry's API documentation
      }),
    })

    if (!fawryResponse.ok) {
      throw new Error('Fawry API request failed')
    }

    const data = await fawryResponse.json()

    // Assuming Fawry returns a payment URL
    res.status(200).json({ paymentUrl: data.paymentUrl })
  } catch (error) {
    console.error('Fawry payment error:', error)
    res.status(500).json({ message: 'Error initiating Fawry payment' })
  }
}
