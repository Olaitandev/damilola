"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function Footer() {
  const [currentYear, setCurrentYear] = useState(2024); // Fallback year

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const footerlinks = [
    {
      name: "Book a Call",
      href: "https://damiexpressions.selar.com/speakwithdami",
    },
    {
      name: "Join Coaching",
      href: "https://damiexpressions.selar.com/coachingcommunity",
    },
    { name: "Shop Products", href: "https://damiexpressions.selar.com/" },
    // { name: "Get Free Blueprint", href: "/" },
  ];

  return (
    <footer className="w-full bg-white">
      <hr className="outline-[0.5px]" />
      <div className="px-5 py-16 mx-auto lg:max-w-[1440px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-center">
          <div className="lg:min-w-[800px]">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={20}
                height={20}
                className="lg:h-[70px] lg:w-[70px] w-15 h-15"
                data-aos="fade-up"
                data-aos-duration="800"
              />
            </Link>
            <p
              className="mt-2 text-sm"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              No more waiting. Choose your next move now.
            </p>
            <div className="flex flex-col w-full gap-2 sm:flex-row sm:items-center sm:gap-0">
              <div className="flex flex-wrap max-w-sm gap-2 mt-5 sm:items-start sm:gap-0 md:flex-nowrap">
                {footerlinks.map((link, index) => (
                  <div
                    key={index}
                    className="flex items-center "
                    data-aos="fade-up"
                    data-aos-duration="800"
                  >
                    <Link
                      href={link.href}
                      className="text-sm font-semibold text-center sm:text-left text-nowrap sm:text-base "
                    >
                      {link.name}
                    </Link>
                    {index < footerlinks.length - 1 && (
                      <div className="w-[2px] h-4 bg-black ml-2 md:ml-4 md:mr-5"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="w-full mt-6 "
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <p className="mt-5  text-[18px] font-semibold font-work-sans">
              subscribe
            </p>
            <div className="relative flex flex-col">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 mt-2 mr-4 border border-gray-300 rounded-md "
                suppressHydrationWarning
              />
              <button className="bg-black text-white rounded-md font-semibold p-2 px-4 mt-2 max-w-[150px] text-center">
                Subscribe
              </button>
              <p className="mt-6 text-sm">
                By subscribing you agree to with our{" "}
                <Link href="/privacy" className="underline">
                  Privacy Policy.
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-8 md:mt-16">
          <div
            className="flex flex-wrap items-center justify-center gap-5 mr-10 md:flex-row"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <Link
              href="/"
              className="text-sm font-medium text-black font-work-sans"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-black font-work-sans"
            >
              About
            </Link>
            <Link
              href="https://damiexpressions.selar.com/"
              className="text-sm font-medium text-black font-work-sans"
            >
              My Offers
            </Link>
            {/* <Link
              href="/"
              className="text-sm font-medium text-black font-work-sans"
            >
              Media & Press
            </Link> */}
            <Link
              href="https://www.peepuu.com/"
              className="text-sm font-medium text-black font-work-sans"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-black font-work-sans"
            >
              Contact
            </Link>
          </div>
        </div>

        <hr className="mt-10 opacity-15 " />
        <div className="flex flex-col mt-5 md:flex-row lg:items-center gap-15 lg:justify-between">
          <div>
            <Link href="/privacy" className="text-sm underline">
              Privacy Policy
            </Link>
            <Link href="/privacy" className="ml-3 text-sm underline">
              Terms of Service
            </Link>
            <Link href="/privacy" className="ml-3 text-sm underline">
              Cookies Settings
            </Link>
          </div>
          <div>
            <p className="font-medium">
              © {currentYear} Dami Fayunjuola. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
