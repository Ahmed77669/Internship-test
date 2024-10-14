"use client"

import React from "react"

interface PricingPlan {
  plan: string
  price: string
  attempts: string
  features: string[]
  isPopular?: boolean
}

const pricingPlans: PricingPlan[] = [
  { 
    plan: "Economy", 
    price: "50", 
    attempts: "10 Attempts", 
    features: ["feature 1", "feature 2", "feature 3", "feature 4"] 
  },
  { 
    plan: "Gold", 
    price: "150", 
    attempts: "40 Attempts", 
    features: ["feature 1", "feature 2", "feature 3", "feature 4"],
    isPopular: true
  },
  { 
    plan: "Premium", 
    price: "299", 
    attempts: "100 Attempts", 
    features: ["feature 1", "feature 2", "feature 3", "feature 4"] 
  },
]

const planStyles: { [key: string]: string } = {
  Economy: "border-green-200 hover:border-green-300",
  Gold: "border-yellow-200 hover:border-yellow-300",
  Premium: "border-blue-200 hover:border-blue-300",
}

const PricingCard: React.FC<PricingPlan> = ({ plan, price, attempts, features, isPopular }) => {
  return (
    <div className={`w-full max-w-sm p-6 bg-white border rounded-lg shadow-md transition-all duration-300 ${planStyles[plan]} ${isPopular ? 'border-blue-500 shadow-lg' : ''}`}>
      <h3 className="text-2xl font-bold mb-2">{plan}</h3>
      <p className="text-gray-600 mb-4">{attempts}</p>
      <div className="mb-6">
        <span className="text-4xl font-extrabold">{price}</span>
        <span className="text-xl font-normal text-gray-600"> EGP</span>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-sm text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <button 
        className={`w-full py-2 px-4 rounded-md transition-colors duration-300 ${
          isPopular 
            ? 'bg-blue-500 text-white hover:bg-blue-600' 
            : 'bg-white text-blue-500 border border-blue-500 hover:bg-blue-50'
        }`}
      >
        Get Started
      </button>
    </div>
  )
}

export default function Pricing() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-blue-600">Choose the Right Plan for You</h1>
      <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
        Select a plan that fits your needs. All plans come with a 14-day money-back guarantee.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </section>
  )
}