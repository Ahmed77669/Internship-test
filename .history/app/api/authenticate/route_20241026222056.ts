export default async function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { token: any; }): void; new(): any; }; }; }) {
    const response = await fetch('https://your-authentication-url', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        merchantCode: process.env.MERCHANT_CODE,
        securityKey: process.env.SECURITY_KEY,
      }),
    });
  
    const data = await response.json();
    res.status(200).json({ token: data.token });
  }