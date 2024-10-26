'use client'
// components/Payment.js
import { useState } from 'react';

interface PaymentData {
  message: string;
  // Define other properties if necessary
}

function Payment() {
  const [amount, setAmount] = useState(0);
  const [status, setStatus] = useState<PaymentData | null>(null);

  const initiatePayment = async () => {
    try {
      // Step 1: Authenticate to get the token
      const authResponse = await fetch('/api/authenticate');
      
      if (!authResponse.ok) {
        throw new Error(`Authentication failed with status ${authResponse.status}`);
      }
  
      const { token } = await authResponse.json();
  
      // Step 2: Create a payment request
      const paymentResponse = await fetch('/api/createPayment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token,
          customerProfileId: "customer123",
          amount,
          currencyCode: "EGP",
        }),
      });
  
      if (!paymentResponse.ok) {
        throw new Error(`Payment request failed with status ${paymentResponse.status}`);
      }
  
      const paymentData = await paymentResponse.json();
      setStatus(paymentData);
  
    } catch (error) {
      console.error("Error in payment initiation:", error);
      setStatus({ message: "Payment initiation failed. Please try again later." });
    }
  };

  return (
    <div className='text-black'>
      <h1>Make a Payment</h1>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button onClick={initiatePayment}>Pay</button>
      {status && <p>Payment Status: {status.message}</p>}
    </div>
  );
}

export default Payment;
