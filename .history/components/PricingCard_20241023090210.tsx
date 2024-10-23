'use client';
import { useEffect, useState } from 'react';

interface PricingCardProps {
  plan: string;
  price: number;
  attempts: number;
  features: string[];
  isPopular: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, price, attempts, features, isPopular }) => {
  const [isFawryPayReady, setIsFawryPayReady] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.atfawry.com/assets/fawrypay-addons/fawrypay.js';
    script.async = true;

    script.onload = () => {
      console.log('FawryPay script loaded successfully.');
      console.log('FawryPay:', window.FawryPay);
      console.log('DISPLAY_MODE:', window.DISPLAY_MODE);
      setIsFawryPayReady(true);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  console.log('FawryPay script loaded successfully.');
  console.log('FawryPay:', window.FawryPay);
  console.log('DISPLAY_MODE:', window.DISPLAY_MODE);
  const handlePayment = async (plan: string, price: number) => {
    if (!isFawryPayReady) {
      console.error('FawryPay is not ready yet. Please try again later.');
      return;
    }

    if (typeof window.FawryPay === 'undefined') {
      console.error('FawryPay is not defined on window.');
      return;
    }

    const response = await fetch('/api/generate-signature', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        merchantCode: process.env.NEXT_PUBLIC_MERCHANT_CODE,
        merchantRefNum: new Date().getTime().toString(),
        customerMobile: '01012345678',
        totalPrice: price,
      }),
    });

    if (!response.ok) {
      console.error('Failed to fetch signature:', response.statusText);
      return;
    }

    const { signature } = await response.json();

    const chargeRequest = {
      merchantCode: process.env.NEXT_PUBLIC_MERCHANT_CODE,
      merchantRefNum: new Date().getTime().toString(),
      customerMobile: '01012345678',
      customerEmail: 'customer@example.com',
      customerName: 'Customer Name',
      chargeItems: [
        {
          itemId: plan.toLowerCase(),
          description: `${plan} Plan`,
          price: price,
          quantity: 1,
        },
      ],
      returnUrl: process.env.NEXT_PUBLIC_FAWRY_RETURN_URL,
      signature: signature,
    };

    if (window.FawryPay && window.DISPLAY_MODE) {
      window.FawryPay.checkout(chargeRequest, { locale: 'en', mode: window.DISPLAY_MODE.POPUP });
    } else {
      console.error('FawryPay or DISPLAY_MODE is not defined.');
    }
  };

  return (
    <div className={`w-full max-w-sm p-6 bg-white border rounded-lg shadow-md transition-all duration-300 ${isPopular ? 'border-teal-500 shadow-lg' : 'border-teal-200 hover:border-teal-300'}`}>
      <h3 className="text-2xl font-bold mb-2 text-teal-800">{plan}</h3>
      <p className="text-teal-600 mb-4">{attempts} Attempts</p>
      <div className="mb-6">
        <span className="text-4xl font-extrabold text-teal-700">{price}</span>
        <span className="text-xl font-normal text-teal-600"> EGP</span>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm text-teal-600">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={() => handlePayment(plan, price)}
        className={`w-full py-2 px-4 rounded-md transition-colors duration-300 ${isPopular ? 'bg-teal-500 text-white hover:bg-teal-600' : 'bg-white text-teal-500 border border-teal-500 hover:bg-teal-50'}`}
      >
        Get Started
      </button>
    </div>
  );
};

export default PricingCard;
