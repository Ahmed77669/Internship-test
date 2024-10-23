import { useEffect, useState } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/styles/globals.css";
import NavBarHome from "@/components/Header/Navbar";
import NavBarAuth from "@/components/Header/NavBarAuth";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";

const inter = Inter({
  subsets: ["latin"],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Gammal Tech Exam",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication status on client-side
    const cookieStore = document.cookie;
    const isLoggedIn = cookieStore.includes("isAuthenticated=true");
    setIsAuthenticated(isLoggedIn);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${inter.className}`}
      >
        {isAuthenticated ? <NavBarAuth /> : <NavBarHome />}
        {children}
        <Footer />
      </body>
    </html>
  );
}