import crypto from 'crypto';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { merchantCode, merchantRefNum, customerMobile, totalPrice } = req.body;
    const securityKey = process.env.FAWRY_SECURITY_KEY;  // Access environment variable securely

    const data = `${merchantCode}${merchantRefNum}${customerMobile}${totalPrice}${securityKey}`;
    const signature = crypto.createHash('sha256').update(data).digest('hex');

    res.status(200).json({ signature });
  } else {
    res.status(405).json({ message: 'Only POST requests allowed' });
  }
}
