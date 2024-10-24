"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface RegistrationFormData {
  firstName: string;
  lastName: string;
  age: string;
  phoneNumber: string;
  country: string;
  state: string;
  city: string;
  university: string;
  password: string;
  confirmPassword: string;
}

interface PasswordStrength {
  score: number;
  feedback: string;
}

export default function RegistrationPage() {
  const [formData, setFormData] = useState<RegistrationFormData>({
    firstName: "",
    lastName: "",
    age: "",
    phoneNumber: "",
    country: "",
    state: "",
    city: "",
    university: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>({
    score: 0,
    feedback: "",
  });
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "password") {
      checkPasswordStrength(value);
    }
  };

  const checkPasswordStrength = (password: string) => {
    let score = 0;
    let feedback = "";

    if (password.length < 8) {
      feedback = "Password is too short";
    } else {
      score += 1;
    }

    if (/[A-Z]/.test(password)) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    if (score === 5) feedback = "Very strong password";
    else if (score === 4) feedback = "Strong password";
    else if (score === 3) feedback = "Moderate password";
    else if (score === 2) feedback = "Weak password";
    else feedback = "Very weak password";

    setPasswordStrength({ score, feedback });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      setIsLoading(false);
      return;
    }

    if (passwordStrength.score < 3) {
      setError("Please choose a stronger password");
      setIsLoading(false);
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      router.push("/");
    } catch (err) {
      setError("An error occurred during registration. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-teal-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-teal-900">
            Complete Your Registration
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            {/* <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-teal-700 mb-1"
              >
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-teal-300 placeholder-teal-500 text-teal-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-teal-700 mb-1"
              >
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-teal-300 placeholder-teal-500 text-teal-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div> */}
            <div>
              <label
                htmlFor="age"
                className="block text-sm font-medium text-teal-700 mb-1"
              >
                Age
              </label>
              <input
                id="age"
                name="age"
                type="number"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-teal-300 placeholder-teal-500 text-teal-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-teal-700 mb-1"
              >
                Phone Number
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-teal-300 placeholder-teal-500 text-teal-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-teal-700 mb-1"
              >
                Country
              </label>
              <select
                id="country"
                name="country"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-teal-300 placeholder-teal-500 text-teal-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="">Select Country</option>
                <option value="usa">United States</option>
                <option value="canada">Canada</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium text-teal-700 mb-1"
              >
                State
              </label>
              <input
                id="state"
                name="state"
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-teal-300 placeholder-teal-500 text-teal-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-teal-700 mb-1"
              >
                City
              </label>
              <input
                id="city"
                name="city"
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-teal-300 placeholder-teal-500 text-teal-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="university"
                className="block text-sm font-medium text-teal-700 mb-1"
              >
                University
              </label>
              <input
                id="university"
                name="university"
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-teal-300 placeholder-teal-500 text-teal-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="University"
                value={formData.university}
                onChange={handleChange}
              />
            </div>
            {/* <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-teal-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-teal-300 placeholder-teal-500 text-teal-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-teal-600 hover:text-teal-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {formData.password && (
                <div className="mt-1">
                  <div className="flex justify-between items-center">
                    <div className="w-full bg-teal-200 rounded-full h-2">
                      <div
                        className="bg-teal-600 h-2 rounded-full"
                        style={{
                          width: `${(passwordStrength.score / 5) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <span className="ml-2 text-sm text-teal-600">
                      {passwordStrength.feedback}
                    </span>
                  </div>
                </div>
              )}
            </div> */}
            {/* <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-teal-700 mb-1"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                required
                className="appearance-none relative block w-full px-3 py-2 border border-teal-300 placeholder-teal-500 text-teal-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div> */}
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading || passwordStrength.score < 3}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                isLoading || passwordStrength.score < 3
                  ? "bg-teal-400 cursor-not-allowed"
                  : "bg-teal-600 hover:bg-teal-700"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200`}
            >
              {isLoading ? "Registering..." : "Complete Registration"}
            </button>
          </div>
        </form>

        {error && (
          <div
            className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md"
            role="alert"
          >
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}

