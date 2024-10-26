"use client";
import React, { useEffect, useState } from "react";
import GT_logo from "@/public/gammalTech-logos/Component 6.png";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from 'framer-motion';


export default function NavBarHome() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
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
              href="https://www.gammal.tech/"
              className="text-[#007676] text-[18px] font-normal flex items-center"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-[#007676] text-[18px] font-normal flex items-center"
            >
              Contact Us
            </Link>
            <Link href="/signup">
              <button className="bg-[#007676] text-white rounded-md w-[156px] h-[50px] text-[16px] font-semibold  py-1 px-3 transition-all duration-300 ease-in-out hover:bg-[#005555] hover:shadow-lg">
                GET STARTED
              </button>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-[#007676] focus:outline-none"
            >
              {isMenuOpen ? (
                null
              ) : (
                <Menu size={40} color="#007676" strokeWidth={2} />
              )}
            </button>
          </div>
        </ul>

        <AnimatePresence>

{isMenuOpen && (
<motion.div
initial={{ opacity: 0, y: -100 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -100 }}
transition={{ duration: 0.5 }}
className="fixed inset-0 bg-white z-50 overflow-y-auto"
>
<div className="flex flex-col items-center justify-center min-h-screen p-4">
<button
onClick={toggleMenu}
className="absolute top-4 right-4 text-[#007676]"
aria-label="Close menu"
>
<X size={40} color="#007676" strokeWidth={2} />
</button>
<nav className="w-full max-w-md">
<Link
  href="/"
  className="block text-[#007676] text-lg font-semibold hover:bg-[#f0f0f0] transition duration-200 p-3 rounded-lg text-center w-full"
  onClick={toggleMenu}
>
  Home
</Link>
<Link
  href="/pricing"
  className="block text-[#007676] text-lg font-semibold hover:bg-[#f0f0f0] transition duration-200 p-3 rounded-lg text-center w-full"
  onClick={toggleMenu}
>
  Pricing
</Link>


<Link
  href="/about"
  className="block text-[#007676] text-lg font-semibold hover:bg-[#f0f0f0] transition duration-200 p-3 rounded-lg text-center w-full"
  onClick={toggleMenu}
>
  About Us
</Link>
<button
  className="mt-4 bg-[#007676] text-white text-lg font-semibold py-2 px-6 rounded-lg hover:bg-[#005c5c] transition duration-200 w-full"
  onClick={toggleMenu}
>
  GET STARTED
</button>
</nav>
</div>
</motion.div>
)}
</AnimatePresence>
      </nav>
    </div>
  );
}

