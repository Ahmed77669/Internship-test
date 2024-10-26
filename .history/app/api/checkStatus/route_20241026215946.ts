// pages/api/checkStatus.js

export default async function handler(req, res) {
    const { paymentReferenceNumber, token } = req.body;
  
    try {
      const response = await fetch(`https://atfawry.fawrystaging.com/api/status/${paymentReferenceNumber}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
  
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "Status check failed" });
    }
  }
  