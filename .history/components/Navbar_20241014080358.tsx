"use client";
import React, { useEffect, useState} from "react";
import GT_logo from "@/public/Component 6.png";
import Link from "next/link";
import { Inter } from "next/font/google";
import Image from "next/image";
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const NavBarHome = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`py-5 container mx-auto ${inter.className} w-[92%]`}>
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
            {/* <Link href="/contests" className="text-[#007676] text-[18px] font-normal flex items-center">Contests</Link> */}
            {/* <Link href="/ai-challenge" className="text-[#007676] text-[18px] font-normal flex items-center">AI Challenge</Link> */}
            {/* <Link href="/rank" className="text-[#007676] text-[18px] font-normal flex items-center">Rank</Link> */}
            <Link
              href="/about"
              className="text-[#007676] text-[18px] font-normal flex items-center"
            >
              About
            </Link>
            <Link
              href="/about"
              className="text-[#007676] text-[18px] font-normal flex items-center"
            >
              Contact Us
            </Link>

            <button
              className="bg-[#007676] text-white rounded-md w-[156px] h-[50px] text-[16px] font-semibold  py-1 px-3 transition-all duration-300 ease-in-out hover:bg-[#005555] hover:shadow-lg"
            >
              GET STARTED
            </button>
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
  <div
    className="absolute right-0 mt-2 w-full bg-white shadow-lg rounded-lg z-20 transition-transform transform origin-top-right scale-100"
  >
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
      {/* <Link
        href="/contests"
        className="text-[#007676] text-lg font-semibold hover:bg-[#f0f0f0] transition duration-200 p-3 rounded-lg text-center w-full"
        onClick={() => setIsOpen(false)}
      >
        Contests
      </Link> */}
      {/* <Link
        href="/ai-challenge"
        className="text-[#007676] text-lg font-semibold hover:bg-[#f0f0f0] transition duration-200 p-3 rounded-lg text-center w-full"
        onClick={() => setIsOpen(false)}
      >
        AI Challenge
      </Link> */}
      {/* <Link
        href="/rank"
        className="text-[#007676] text-lg font-semibold hover:bg-[#f0f0f0] transition duration-200 p-3 rounded-lg text-center w-full"
        onClick={() => setIsOpen(false)}
      >
        Rank
      </Link> */}
      <Link
        href="/about"
        className="text-[#007676] text-lg font-semibold hover:bg-[#f0f0f0] transition duration-200 p-3 rounded-lg text-center w-full"
        onClick={() => setIsOpen(false)}
      >
        About Us
      </Link>

      <button
        className="mt-4 bg-[#007676] text-white text-lg font-semibold py-2 px-6 rounded-lg hover:bg-[#005c5c] transition duration-200"
        onClick={() => setIsOpen(false)}
      >
        GET STARTED
      </button>
    </div>
  </div>
)}
      </nav>
    </div>
  );
};

export default NavBarHome;
