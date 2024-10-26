"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function FawryPayment({ amount, orderId }: { amount: number; orderId: string }) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handlePayment = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/fawry-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, orderId }),
      })

      if (!response.ok) {
        throw new Error('Payment initiation failed')
      }

      const data = await response.json()

      // Redirect to Fawry payment page
      if (data.paymentUrl) {
        router.push(data.paymentUrl)
      } else {
        throw new Error('Payment URL not received')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Pay with Fawry</h2>
      <p className="mb-4 text-gray-600">Amount: EGP {amount.toFixed(2)}</p>
      <p className="mb-6 text-gray-600">Order ID: {orderId}</p>
      <button
        onClick={handlePayment}
        disabled={isLoading}
        className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 disabled:bg-gray-400"
      >
        {isLoading ? 'Processing...' : 'Pay Now'}
      </button>
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  )
}