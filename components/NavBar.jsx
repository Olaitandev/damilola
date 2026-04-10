"use client";
import { List, X, ShoppingCart } from "@phosphor-icons/react";
import Link from "next/link";
import React, { useState, useCallback, useMemo, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import Logo from "../public/logo.svg";
import Image from "next/image";

// Simple active link check outside component to prevent recreation
const isLinkActive = (pathname, href) => {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname.startsWith(href);
};

const NavBar = ({ cartVisible = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // New state to track mounting
  const pathname = usePathname();

  // Optimize Redux selector with shallow equality
  const totalQuantity = useSelector((state) => state.cart?.totalQuantity || 0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Memoize functions with stable references
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Memoize navigation items - make this completely static
  const navItems = useMemo(
    () => [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/partnership", label: "What i do" },
      // { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
    []
  );

  // Simplified link class generator
  const getDesktopLinkClass = (href) => {
    const baseClass =
      "px-3 py-2 rounded-md text-[18px] font-medium transition-colors font-work-sans hover:-translate-y-0.5 duration-150";
    const isActive = isLinkActive(pathname, href);
    return isActive
      ? `${baseClass} text-black bg-[#FFEEE6] px-6`
      : `${baseClass} text-black hover:text-black hover:bg-gray-50`;
  };

  const getMobileLinkClass = (href) => {
    const baseClass =
      "block px-3 py-2 rounded-md text-base font-medium font-work-sans transition-colors";
    const isActive = isLinkActive(pathname, href);
    return isActive
      ? `${baseClass} text-black bg-[#FFEEE6] px-6`
      : `${baseClass} text-black hover:text-black hover:bg-gray-50`;
  };

  return (
    <nav className="fixed z-50 w-full bg-white border-b border-gray-200 shadow-lg">
      <div className="flex items-center justify-between h-16 px-5 mx-auto lg:h-24 lg:max-w-[1440px]">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center transition-transform duration-200 hover:scale-105"
        >
          <Image
            src="/logo.svg" // Note: path starts from public directory
            alt="Logo"
            width={70}
            height={70}
            className="lg:h-[70px] lg:w-[70px] w-10 h-10"
            priority // Good for logo above the fold
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <div className="flex items-baseline ml-10 space-x-8">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                prefetch={href === "/about"} // Only prefetch critical routes
                className={getDesktopLinkClass(href)}
              >
                {label}
              </Link>
            ))}

            {/* <div>
              {cartVisible ? (
                <Link
                  href="/cart"
                  className="transition-transform duration-150 hover:scale-105"
                >
                  <div className="relative px-1 py-1 text-black transition-colors bg-[#EDF296] rounded-lg hover:text-gray-600 ">
                    <ShoppingCart className="w-6 h-6" />
                    {mounted && totalQuantity > 0 && (
                      <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
                        {totalQuantity}
                      </span>
                    )}
                  </div>
                </Link>
              ) : (
                <Link
                  href="/"
                  className="bg-[#EDF296] text-black px-[24px] py-[12px] w-[131px] h-[57px] rounded-full text-[18px] font-medium transition-colors font-work-sans hover:bg-[#E5EB7A] "
                >
                  Sign Up
                </Link>
              )}
            </div> */}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="inline-flex items-center justify-center p-2 text-black transition-colors rounded-md lg:hidden hover:text-gray-500 focus:outline-none"
          aria-expanded={isMenuOpen}
          aria-label="Toggle main menu"
        >
          {isMenuOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <List className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* Mobile menu - Use conditional rendering without complex animations */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200 sm:px-3">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={getMobileLinkClass(href)}
                onClick={closeMenu}
              >
                {label}
              </Link>
            ))}

            {/* {cartVisible && (
              <Link
                href="/cart"
                onClick={closeMenu}
                className="flex items-center px-3 py-2 text-base font-medium text-black transition-colors rounded-md font-work-sans hover:text-gray-600"
              >
                <div className="bg-[#EDF296] rounded-lg p-1 mr-2">
                  <ShoppingCart className="w-5 h-5 " />
                </div>
                Cart
                {mounted && totalQuantity > 0 && (
                  <span className="flex items-center justify-center w-5 h-5 ml-2 text-xs text-white bg-red-500 rounded-full">
                    {totalQuantity}
                  </span>
                )}
              </Link>
            )}

            <Link href="/" onClick={closeMenu}>
              <button className="bg-[#EDF296] text-black rounded-full p-2 font-semibold w-full mt-10 mb-4 hover:bg-[#E5EB7A] transition-colors">
                Sign Up
              </button>
            </Link> */}
          </div>
        </div>
      )}
    </nav>
  );
};

// Export with memo but simpler comparison
export default React.memo(NavBar, (prevProps, nextProps) => {
  return prevProps.cartVisible === nextProps.cartVisible;
});
