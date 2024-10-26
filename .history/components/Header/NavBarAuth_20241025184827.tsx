"use client";
import GT_logo from "@/public/gammalTech-logos/Component 6.png";
import Coder1 from "@/public/coders photos/coder1.jpg";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, LogOut, User, Award } from "lucide-react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from 'framer-motion';
export default function NavBarAuth() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    if (isDropdownOpen) setIsDropdownOpen(false);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
    if (isMenuOpen) setIsMenuOpen(false);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
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
      const response = await fetch("/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        localStorage.removeItem("user");
        router.push("/");
        router.refresh();
      } else {
        const errorData = await response.json();
        console.error("Logout failed:", errorData.error);
      }
    } catch (error) {
      console.error("Error during logout:", error);
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
            <Link href="#" className="text-[#007676] text-[18px] font-normal flex items-center">AIChallenge</Link>
            <Link href="#" className="text-[#007676] text-[18px] font-normal flex items-center">Contests</Link>
            <Link href="https://www.gammal.tech/" className="text-[#007676] text-[18px] font-normal flex items-center">About</Link>
            <Link href="#" className="text-[#007676] text-[18px] font-normal flex items-center">Contact</Link>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="focus:outline-none"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                <Image
                  src={Coder1}
                  width={56}
                  height={56}
                  alt="profile image"
                  className="rounded-full w-14 h-14 object-cover"
                />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-20">
                  <div className="py-1">
                    <Link href="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={toggleDropdown}>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                    <Link href="/certificate" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={toggleDropdown}>
                      <Award className="mr-2 h-4 w-4" />
                      <span>Certificate</span>
                    </Link>
                    <Link href="#" onClick={toggleDropdown}>
                    <button onClick={handleLogout} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-[#007676] focus:outline-none mr-4">
              {isMenuOpen ?null: <Menu size={40} color="#007676" strokeWidth={2} />}
            </button>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="focus:outline-none"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                <Image
                  src={Coder1}
                  width={56}
                  height={56}
                  alt="profile image"
                  className="rounded-full w-14 h-14 object-cover"
                />
              </button>
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
                href="#"
                className="block text-[#007676] text-lg font-semibold hover:bg-[#f0f0f0] transition duration-200 p-3 rounded-lg text-center w-full"
                onClick={toggleMenu}
              >
                AI Challenge
              </Link>
              <Link
                href="#"
                className="block text-[#007676] text-lg font-semibold hover:bg-[#f0f0f0] transition duration-200 p-3 rounded-lg text-center w-full"
                onClick={toggleMenu}
              >
                Contests
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
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg ">
                  <div className="py-1">
                    <Link href="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                    <Link href="/certificate" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Award className="mr-2 h-4 w-4" />
                      <span>Certificate</span>
                    </Link>
                    <button onClick={handleLogout} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </ul>
      </nav>
    </div>
  );
}