"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Handle logo click - scroll to top on single-page site
  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Quick navigation links - use hash anchors for single-page
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  const services = [
    "Bookkeeping & Accounting",
    "Auditing Services",
    "Taxation & Compliance",
    "Payroll Management",
    "Financial Advisory",
    "Financial Governance",
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-300" role="contentinfo">
      {/* Main Footer Content */}
      <div className="container-max section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <Link href="/" onClick={handleLogoClick} className="flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity">
              <Image
                src="/logo/zion-logo.svg"
                alt="Zion Financial Consultant"
                width={40}
                height={40}
              />
              <span className="text-lg font-semibold text-white">
                Zion FC
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-neutral-400">
              Professional accounting, auditing, taxation, and financial governance
              services for sustainable and ethical growth in Rwanda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {services.slice(0, 3).map((service, idx) => (
                <li key={idx} className="text-neutral-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <span className="block font-medium">Location</span>
                Kigali, Rwanda
              </li>
              <li>
                <span className="block font-medium">Email</span>
                <a href="mailto:info@zionfinancial.rw" className="text-primary-400 hover:text-primary-300 transition-colors">
                  info@zionfinancial.rw
                </a>
              </li>
              <li>
                <span className="block font-medium">Phone</span>
                <a href="tel:+250788000000" className="text-primary-400 hover:text-primary-300 transition-colors">
                  +250 XXX XXX XXX
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800">
        <div className="container-max py-6 text-center text-sm text-neutral-500">
          <p>© {currentYear} Zion Financial Consultant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
