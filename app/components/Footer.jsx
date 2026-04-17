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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div>
            <Link href="/" onClick={handleLogoClick} className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity">
              <Image
                src="/logo/zion-logo.svg"
                alt="Zion Financial Consultant Ltd"
                width={48}
                height={48}
              />
              <span className="text-lg font-bold text-white tracking-wide leading-tight">
                Zion Financial<br />Consultant Ltd
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-neutral-400">
              Professional accounting, auditing, taxation, and financial governance
              services for sustainable and ethical growth in Rwanda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-primary-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-primary-600 text-[10px]">▶</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {services.map((service, idx) => (
                <li key={idx}>
                  <Link href="/services" className="text-neutral-400 hover:text-primary-400 transition-colors flex items-center gap-2">
                    <span className="text-primary-600 text-[10px]">▶</span> {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li className="flex items-start gap-3">
                <span className="text-lg mt-0.5">📍</span>
                <div>
                  <span className="block font-medium text-white mb-1">Location</span>
                  Kigali, Rwanda
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lg mt-0.5">✉️</span>
                <div>
                  <span className="block font-medium text-white mb-1">Email</span>
                  <a href="mailto:zionfinanceconsultant@yahoo.com" className="hover:text-primary-400 transition-colors break-all">
                    zionfinanceconsultant@yahoo.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lg mt-0.5">📞</span>
                <div>
                  <span className="block font-medium text-white mb-1">Phone</span>
                  <a href="tel:+250788712930" className="hover:text-primary-400 transition-colors">
                    +250 788 712 930
                  </a>
                </div>
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
