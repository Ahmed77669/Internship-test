// components/Payment.js
import { useState } from 'react';

function Payment() {
  const [amount, setAmount] = useState(0);
  const [status, setStatus] = useState(null);

  const initiatePayment = async () => {
    // Step 1: Authenticate to get the token
    const authResponse = await fetch('/api/authenticate');
    const { token } = await authResponse.json();

    // Step 2: Create a payment request
    const paymentResponse = await fetch('/api/createPayment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        token,
        customerProfileId: "customer123", // replace with actual customer profile
        amount,
        currencyCode: "EGP",
      }),
    });

    const paymentData = await paymentResponse.json();
    setStatus(paymentData);
  };

  return (
    <div>
      <h1>Make a Payment</h1>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={initiatePayment}>Pay</button>
      {status && <p>Payment Status: {status.message}</p>}
    </div>
  );
}

export default Payment;
