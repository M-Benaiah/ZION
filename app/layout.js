// app/layout.js

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: {
    default: "Zion Financial Consultant",
    template: "%s | Zion Financial Consultant",
  },
  description:
    "Zion Financial Consultant provides professional accounting, auditing, taxation, payroll, and financial governance services in Rwanda.",
  metadataBase: new URL("https://zionfinancial.rw"),
  authors: [{ name: "Karisa Idrissa" }],
  creator: "Zion Financial Consultant",
  keywords: [
    "accounting",
    "auditing",
    "taxation",
    "payroll",
    "financial advisory",
    "Rwanda",
    "financial governance",
  ],
  openGraph: {
    title: "Zion Financial Consultant",
    description:
      "Professional accounting, auditing, taxation, and financial governance services in Rwanda.",
    url: "https://zionfinancial.rw",
    siteName: "Zion Financial Consultant",
    images: [
      {
        url: "/logo/zion-logo.svg",
        width: 800,
        height: 600,
        alt: "Zion Financial Consultant Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-neutral-900">
        {/* Global navigation */}
        <Navbar />

        {/* Page content */}
        <main className="min-h-screen">{children}</main>

        {/* Global footer */}
        <Footer />
      </body>
    </html>
  );
}
