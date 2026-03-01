"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  // Single-page app - use hash-based navigation instead of page routes
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation links use hash anchors (#home, #services, etc.)
  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className="w-full bg-white border-b border-neutral-200 sticky top-0 z-50 shadow-sm"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-max flex items-center justify-between h-16 md:h-20">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image
            src="/logo/zion-logo.svg"
            alt="Zion Financial Consultant"
            width={40}
            height={40}
            priority
          />
          <span className="text-lg md:text-xl font-bold text-primary-600 hidden sm:inline">
            Zion FC
          </span>
        </Link>

        {/* Desktop Links - Hash-based navigation */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-medium text-neutral-700 hover:text-primary-600 transition-colors"
            >
              {link.name}
            </a>
          ))}


        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-neutral-700 hover:bg-neutral-100 rounded-lg focus-ring"
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle mobile menu"
          aria-controls="mobile-menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white border-t border-neutral-200"
        >
          <div className="container-max py-4 space-y-2">
            {/* Mobile menu links - hash-based navigation */}
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2 rounded-lg font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
                onClick={closeMobileMenu}
              >
                {link.name}
              </a>
            ))}

            {/* Request Consultation button */}
            <a
              href="#contact"
              className="block text-center btn-primary mt-4"
              onClick={closeMobileMenu}
            >
              Request Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
