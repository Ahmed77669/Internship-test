export default async function handler(req: { body: { token: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; }): void; new(): any; }; }; }) {
    const { token } = req.body;
    const paymentData = {
      merchantCode: process.env.MERCHANT_CODE,
      customerProfileId: "testCustomer123",
      amount: 100,
      currencyCode: "EGP",
    };
  
    try {
      const response = await fetch("https://atfawry.fawrystaging.com/api/payment-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(paymentData),
      });
  
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "Payment request failed" });
    }
  }