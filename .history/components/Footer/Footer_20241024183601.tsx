import React from "react";
import Image from "next/image";
import footerLogo from "@/public/gammalTech-logos/footer-logo.png";
import Link from "next/link";
import linkdin from "@/public/socialmediaIcons/linkdin.png";
import facebook from "@/public/socialmediaIcons/Facebook.png";
import instagram from "@/public/socialmediaIcons/Instagram.png";
import twitter from "@/public/socialmediaIcons/Twitter.png";

const Footer = () => {
  return (
    <section className="bg-[#095051] py-20 min-h-96 h-auto">
      <div className="container mx-auto px-4 ">
        <div className="flex justify-between flex-wrap ">
          <div className="mb-10">
            <div className="mb-6">
              <Image src={footerLogo} alt="Gammal Tech Logo" width={152} />
            </div>
            <div className="text-white w-80">
              We are an online educational platform that capitalizes on human
              potential by assisting professionals and aspiring individuals to
              succeed in their goals.
            </div>
          </div>

          <div className="text-white flex flex-col mb-10">
            <p className="font-semibold mb-5">1. Featured links</p>
            <div className="flex flex-col justify-between ">
              <div className="space-y-2 mr-6">
                <Link href="/">Home</Link>
                <Link href="https://www.gammal.tech/">About</Link>
                <Link href="/pricing">Pricing</Link>
              </div>
              <div className="space-y-2">
                <Link href="#">Contact</Link>
                <Link href="#">Terms</Link>
                <Link href="#">Privacy Policy</Link>
              </div>
            </div>
          </div>

          <div>
            <p className="text-white font-semibold mb-8">2. Connect with us</p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/gammal.tech/?locale=ar_AR"
                passHref
                target="_blank"
              >
                <div className="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center cursor-pointer">
                  <Image src={facebook} alt="Facebook Logo" />
                </div>
              </Link>
              <Link
                href="https://www.instagram.com/gammal.tech/?hl=ar"
                passHref
                target="_blank"
              >
                <div className="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center cursor-pointer">
                  <Image src={instagram} alt="Instagram Logo" />
                </div>
              </Link>
              <Link
                href="https://www.linkedin.com/company/gammal-tech/"
                passHref
                target="_blank"
              >
                <div className="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center cursor-pointer">
                  <Image src={linkdin} alt="LinkedIn Logo" />
                </div>
              </Link>
              <Link
                href="https://x.com/gammaltech?lang=ar"
                passHref
                target="_blank"
              >
                <div className="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center cursor-pointer">
                  <Image src={twitter} alt="Twitter Logo" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
