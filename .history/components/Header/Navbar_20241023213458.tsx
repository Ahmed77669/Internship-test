"use client";
import React, { useEffect, useState } from "react";
import GT_logo from "@/public/gammalTech-logos/Component 6.png";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function NavBarHome() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    // Function to check for the token in cookies
    const checkAuth = () => {
      const token = document.cookie.split('; ').find(row => row.startsWith('token='));
      const isLoggedIn = !!token; // Check if the token exists
      console.log("Is authenticated:", isLoggedIn); // Debugging output
      setIsAuthenticated(isLoggedIn);
    };

    checkAuth(); // Check authentication on mount

    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`py-5 container mx-auto w-[92%]`}>
      <nav className="relative">
        <ul className="flex justify-between items-center">
          <li className="min-w-[152px]">
            <Link href="/">
              <Image
                src={GT_logo}
                alt="Gammal Tech Logo"
                width={130}
                className="cursor-pointer"
              />
            </Link>
          </li>
          <div className="hidden md:flex space-x-5">
            <Link
              href="/"
              className="text-[#007676] text-[18px] font-normal flex items-center"
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className="text-[#007676] text-[18px] font-normal flex items-center"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-[#007676] text-[18px] font-normal flex items-center"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-[#007676] text-[18px] font-normal flex items-center"
            >
              Contact Us
            </Link>
            {!isAuthenticated ? (
              <Link href="/signup">
                <button className="bg-[#007676] text-white rounded-md w-[156px] h-[50px] text-[16px] font-semibold py-1 px-3 transition-all duration-300 ease-in-out hover:bg-[#005555] hover:shadow-lg">
                  GET STARTED
                </button>
              </Link>
            ) : (
              <Link href="/dashboard">
                <button className="bg-[#007676] text-white rounded-md w-[156px] h-[50px] text-[16px] font-semibold py-1 px-3 transition-all duration-300 ease-in-out hover:bg-[#005555] hover:shadow-lg">
                  Dashboard
                </button>
              </Link>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-[#007676] focus:outline-none"
            >
              {isOpen ? (
                <X size={40} color="#007676" strokeWidth={2} />
              ) : (
                <Menu size={40} color="#007676" strokeWidth={2} />
              )}
            </button>
          </div>
        </ul>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-full bg-white shadow-lg rounded-lg z-20 transition-transform transform origin-top-right scale-100">
            <div className="flex flex-col items-center justify-center mx-auto p-4">
              <Link
                href="/"
                className="text-[#007676] text-lg font-semibold hover:bg-[#f0f0f0] transition duration-200 p-3 rounded-lg text-center w-full"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/pricing"
                className="text-[#007676] text-lg font-semibold hover:bg-[#f0f0f0] transition duration-200 p-3 rounded-lg text-center w-full"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="text-[#007676] text-lg font-semibold hover:bg-[#f0f0f0] transition duration-200 p-3 rounded-lg text-center w-full"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-[#007676] text-lg font-semibold hover:bg-[#f0f0f0] transition duration-200 p-3 rounded-lg text-center w-full"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
              <Link href="/signup">
                <button
                  className="mt-4 bg-[#007676] text-white text-lg font-semibold py-2 px-6 rounded-lg hover:bg-[#005c5c] transition duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  GET STARTED
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
