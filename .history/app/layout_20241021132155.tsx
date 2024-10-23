import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/styles/globals.css";

import NavBarHome from "@/components/Header/Navbar";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import router from "next/router";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${inter.className}`}
      >
        <NavBarHome />
        {children}
        {router.asPath !== '/lessons/result' && (
        <Footer />
        )}
      </body>
    </html>
  );
}
