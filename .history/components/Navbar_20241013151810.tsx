"use client";
import React, { useState, useRef, useEffect } from "react";
import GT_logo from "@/public/Component 6.png";
import Link from "next/link";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const NavBarHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter();

  const route = (page: string) => {
    router.push(page);
  };

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`py-5 container mx-auto ${inter.className}`}>
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
          <div className="hidden md:flex mt-5 space-x-6">
            <Link href="/" className="text-[#007676] text-[18px] font-normal flex items-center">Home</Link>
            <Link href="/pricing" className="text-[#007676] text-[18px] font-normal flex items-center">Pricing</Link>
            <Link href="/contests" className="text-[#007676] text-[18px] font-normal flex items-center">Contests</Link>
            <Link href="/ai-challenge" className="text-[#007676] text-[18px] font-normal flex items-center">AI Challenge</Link>
            <Link href="/rank" className="text-[#007676] text-[18px] font-normal flex items-center">Rank</Link>
            <Link href="/about" className="text-[#007676] text-[18px] font-normal flex items-center">About Us</Link>
            
            <button
              onClick={() => route("/")}
              className="bg-[#007676] text-white rounded-md w-[156px] h-[50px] text-[16px] font-semibold  py-1 px-4 transition-all duration-300 ease-in-out hover:bg-[#005555] hover:shadow-lg"
            >
              GET STARTED
            </button>
          
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-[#007676] focus:outline-none">
              {/* {isOpen ? (
                <FaTimes className="text-2xl" /> 
              ) : (
                <FaBars className="text-2xl" /> 
              )} */}
            </button>
          </div>
        </ul>

        {isOpen && (
          <div
            ref={menuRef}
            className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-20 transition-transform transform origin-top-right scale-100 mx-4"
          >
            <div className="flex flex-col">
              <Link
                href="/"
                className="text-[#007676] text-lg font-semibold hover:bg-[#f0f0f0] transition duration-200 p-3 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/pricing"
                className="text-[#007676] text-lg font-semibold hover:bg-[#f0f0f0] transition duration-200 p-3 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/contests"
                className="text-[#007676] text-lg font-semibold hover:bg-[#f0f0f0] transition duration-200 p-3 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Contests
              </Link>
              <Link
                href="/ai-challenge"
                className="text-[#007676] text-lg font-semibold hover:bg-[#f0f0f0] transition duration-200 p-3 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                AI Challenge
              </Link>
              <Link
                href="/rank"
                className="text-[#007676] text-lg font-semibold hover:bg-[#f0f0f0] transition duration-200 p-3 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Rank
              </Link>
              <Link
                href="/about"
                className="text-[#007676] text-lg font-semibold hover:bg-[#f0f0f0] transition duration-200 p-3 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBarHome;
