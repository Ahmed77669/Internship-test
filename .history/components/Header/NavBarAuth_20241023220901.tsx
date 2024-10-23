'use client'

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import GT_logo from "@/public/gammalTech-logos/Component 6.png"
import Coder1 from '@/public/coders photos/coder1.jpg'

const navItems = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/ai-challenge", label: "AI Challenge" },
  { href: "/contests", label: "Contests" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
]

export default function NavBarAuth() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="py-5 container mx-auto w-[92%]">
      <div className="flex justify-between items-center">
        <Link href="/" className="min-w-[152px]">
          <Image
            src={GT_logo}
            alt="Gammal Tech Logo"
            width={130}
            height={40}
            className="cursor-pointer"
          />
        </Link>
        
        <ul className="hidden [min-width:835px]:flex space-x-5 items-center">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-[#007676] text-lg font-normal hover:text-[#007676]/80 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/profile">
              <Image
                src={Coder1}
                width={56}
                height={56}
                alt="Profile"
                className="rounded-full w-14 h-14 object-cover"
              />
            </Link>
          </li>
        </ul>
        
        <div className="flex items-center [min-width:835px]:hidden">
          <button
            onClick={toggleMenu}
            className="mr-2 p-2 text-[#007676] focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
          <Link href="/profile">
            <Image
              src={Coder1}
              width={56}
              height={56}
              alt="Profile"
              className="rounded-full w-14 h-14 object-cover"
            />
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 [min-width:835px]:hidden">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-5">
              <Link href="/" onClick={toggleMenu}>
                <Image
                  src={GT_logo}
                  alt="Gammal Tech Logo"
                  width={130}
                  height={40}
                  className="cursor-pointer"
                />
              </Link>
              <button
                onClick={toggleMenu}
                className="p-2 text-[#007676] focus:outline-none"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-4 p-5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[#007676] text-lg font-semibold hover:text-[#007676]/80 transition-colors"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </nav>
  )
}