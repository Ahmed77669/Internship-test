// pages/api/authenticate.js
export default async function handler(req, res) {
    try {
      const response = await fetch('https://your-authentication-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          merchantCode: process.env.MERCHANT_CODE,
          securityKey: process.env.SECURITY_KEY,
        }),
      });
  
      if (!response.ok) {
        return res.status(response.status).json({ error: 'Failed to authenticate' });
      }
  
      const data = await response.json();
      res.status(200).json({ token: data.token });
    } catch (error) {
      console.error("Authentication error:", error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  