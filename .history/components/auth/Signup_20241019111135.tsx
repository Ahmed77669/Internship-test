'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface LoginFormData {
  name: string
  email: string
  password: string
  rememberMe: boolean
}

export default function LoginPage() {
  const [formData, setFormData] = useState<LoginFormData>({
    name: '',
    email: '',
    password: '',
    rememberMe: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value, type, checked } = e.target
  //   setFormData(prev => ({
  //     ...prev,
  //     [name]: type === 'checkbox' ? checked : value
  //   }))
  // }

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   setIsLoading(true)
  //   setError(null)

  //   // Simulated login logic
  //   try {
  //     // Replace this with your actual login API call
  //     await new Promise(resolve => setTimeout(resolve, 1000))
      
  //     // Simulated successful login
  //     router.push('/dashboard')
  //   } catch (err) {
  //     setError('Invalid email or password. Please try again.')
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

  
  const handleSubmit = async (e :React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    alert(data.message || data.error);
  };
  return (
    <div className="min-h-screen bg-teal-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-teal-900">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-teal-700 mb-1">
                Email address
              </label>
              <input
                id="user-name"
                name="userName"
                type="name"
                autoComplete="name"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-teal-300 placeholder-teal-500 text-teal-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="User Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-teal-700 mb-1">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-teal-300 placeholder-teal-500 text-teal-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-teal-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-teal-300 placeholder-teal-500 text-teal-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-teal-600 hover:text-teal-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            {/* <div className="flex items-center">
              <input
                id="remember-me"
                name="rememberMe"
                type="checkbox"
                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-teal-300 rounded"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-teal-900">
                Remember me
              </label>
            </div> */}

            <div className="text-sm">
              <Link href="/forgot-password" className="font-medium text-teal-600 hover:text-teal-500">
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                isLoading ? 'bg-teal-400 cursor-not-allowed' : 'bg-teal-600 hover:bg-teal-700'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200`}
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>

        {error && (
          <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md" role="alert">
            <p>{error}</p>
          </div>
        )}

        <div className="mt-6">
          <p className="text-center text-sm text-teal-600">
            Not a member?{' '}
            <Link href="/signup" className="font-medium text-teal-600 hover:text-teal-500">
              Sign up now
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}