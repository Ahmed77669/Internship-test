"use client";
import React, { useEffect, useState } from "react";
import GT_logo from "@/public/gammalTech-logos/Component 6.png";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import Coder1 from '@/public/coders photos/coder1.jpg'
import { X } from "lucide-react";

export default function NavBarAuth( )  {
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
              AI Challenge
            </Link>
            <Link
              href="/about"
              className="text-[#007676] text-[18px] font-normal flex items-center"
            >
              Contests
            </Link>
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
            <Link
              href="/signup"
            >
<Image src={Coder1} width={80} alt="prfile image" className="rounded-full"/>
            </Link>
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
