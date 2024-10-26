'use client'
// components/CheckStatus.js
import { useState } from 'react';

interface StatusData {
  message: string;
  // Define other properties if necessary
}

function CheckStatus() {
  const [paymentRef, setPaymentRef] = useState('');
  const [status, setStatus] = useState<StatusData | null>(null);

  const checkPaymentStatus = async () => {
    const authResponse = await fetch('/api/authenticate');
    const { token } = await authResponse.json();

    const statusResponse = await fetch('/api/checkStatus', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        token,
        paymentReferenceNumber: paymentRef,
      }),
    });

    const statusData = (await statusResponse.json()) as StatusData;
    setStatus(statusData);
  };

  return (
    <div className='text-black'>
      <h1>Check Payment Status</h1>
      <input
        type="text"
        placeholder="Payment Reference Number"
        value={paymentRef}
        onChange={(e) => setPaymentRef(e.target.value)}
      />
      <button onClick={checkPaymentStatus}>Check Status</button>
      {status && <p>Status: {status.message}</p>}
    </div>
  );
}

export default CheckStatus;
