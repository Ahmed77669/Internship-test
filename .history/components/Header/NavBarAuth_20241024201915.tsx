"use client";

import GT_logo from "@/public/gammalTech-logos/Component 6.png";
import Coder1 from "@/public/coders photos/coder1.jpg";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, LogOut, User, Award } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NavBarAuth() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
const router = useRouter();
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


    const handleLogout = async () => {
      try {
        const response = await fetch('/api/auth/logout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          // Clear any client-side storage if needed
          localStorage.removeItem('user');
          // Use Next.js router for navigation
          router.push('/');
          router.refresh(); // Refresh the current route
        } else {
          const errorData = await response.json();
          console.error('Logout failed:', errorData.error);
          // You might want to show an error message to the user here
        }
      } catch (error) {
        console.error('Error during logout:', error);
        // You might want to show an error message to the user here
      }
    };
  
   


  return (
    <div className="py-5 container mx-auto w-[92%]">
      <nav className="relative">
        <ul className="flex justify-between items-center">
          <li className="min-w-[152px]">
            <Link href="/">
              <Image
                src={GT_logo}
                alt="Gammal Tech Logo"
                width={130}
                height={130}
                className="cursor-pointer"
              />
            </Link>
          </li>
          <div className="hidden md:flex space-x-5">
            <Link href="/" className="text-[#007676] text-[18px] font-normal flex items-center">Home</Link>
            <Link href="/pricing" className="text-[#007676] text-[18px] font-normal flex items-center">Pricing</Link>
            <Link href="#" className="text-[#007676] text-[18px] font-normal flex items-center">AI Challenge</Link>
            <Link href="#" className="text-[#007676] text-[18px] font-normal flex items-center">Contests</Link>
            <Link href="https://www.gammal.tech/" className="text-[#007676] text-[18px] font-normal flex items-center">About</Link>
            <Link href="#" className="text-[#007676] text-[18px] font-normal flex items-center">Contact</Link>
            <div className="relative" ref={dropdownRef}>
              <button onClick={toggleDropdown} className="focus:outline-none" aria-haspopup="true" aria-expanded={isDropdownOpen}>
                <Image src={Coder1} width={56} height={56} alt="profile image" className="rounded-full w-14 h-14 object-cover" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-20">
                  <div className="py-1">
                    <Link href="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                    <Link href="/certificate" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Award className="mr-2 h-4 w-4" />
                      <span>Certificate</span>
                    </Link>
                    <button onClick={handleLogout} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-[#007676] focus:outline-none mr-4">
              {isOpen ? <X size={40} color="#007676" strokeWidth={2} /> : <Menu size={40} color="#007676" strokeWidth={2} />}
            </button>
            <div className="relative" ref={dropdownRef}>
              <button onClick={toggleDropdown} className="focus:outline-none" aria-haspopup="true" aria-expanded={isDropdownOpen}>
                <Image src={Coder1} width={56} height={56} alt="profile image" className="rounded-full w-14 h-14 object-cover" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-20">
                  <div className="py-1">
                    <Link href="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                    <Link href="/certificate" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Award className="mr-2 h-4 w-4" />
                      <span>Certificate</span>
                    </Link>
                    <button onClick={handleLogout} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </ul>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-full bg-white shadow-lg rounded-lg z-20 transition-transform transform origin-top-right scale-100">
            <div className="flex flex-col items-center justify-center mx-auto p-4">
              <Link href="/" className="text-[#007676] text-lg font-semibold hover:bg-[#f0f0f0] transition duration-200 p-3 rounded-lg text-center w-full" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/pricing" className="text-[#007676] text-lg font-semibold hover:bg-[#f0f0f0] transition duration-200 p-3 rounded-lg text-center w-full" onClick={() => setIsOpen(false)}>Pricing</Link>
              <Link href="#" className="text-[#007676] text-lg font-semibold hover:bg-[#f0f0f0] transition duration-200 p-3 rounded-lg text-center w-full" onClick={() => setIsOpen(false)}>AI Challenge</Link>
              <Link href="#" className="text-[#007676] text-lg font-semibold hover:bg-[#f0f0f0] transition duration-200 p-3 rounded-lg text-center w-full" onClick={() => setIsOpen(false)}>Contests</Link>
              <Link href="https://www.gammal.tech/" className="text-[#007676] text-lg font-semibold hover:bg-[#f0f0f0] transition duration-200 p-3 rounded-lg text-center w-full" onClick={() => setIsOpen(false)}>About</Link>
              <Link href="#" className="text-[#007676] text-lg font-semibold hover:bg-[#f0f0f0] transition duration-200 p-3 rounded-lg text-center w-full" onClick={() => setIsOpen(false)}>Contact Us</Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
