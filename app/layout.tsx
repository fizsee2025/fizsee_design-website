import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Load Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO Metadata
export const metadata: Metadata = {
  title: "Fizsee Designs | Innovative Architecture & Interiors",
  description:
    "Fizsee Designs – Expert architectural, interior, and façade solutions for residential, commercial, and hospitality projects.",
  keywords: [
    "architecture",
    "interior design",
    "façade design",
    "construction",
    "residential projects",
    "commercial projects",
    "Fizsee Designs",
  ],
  authors: [{ name: "Fizsee Designs", url: "https://www.fizsee.com" }],
  openGraph: {
    title: "Fizsee Designs",
    description:
      "Expert architectural, interior, and façade solutions for modern spaces.",
    url: "https://www.fizsee.com",
    siteName: "Fizsee Designs",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fizsee Designs Projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

// Root Layout Component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Analytics Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z8QX0T5SKN"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z8QX0T5SKN');
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {/* Optional global wrapper for a brochure-style layout */}
        <div className="min-h-screen flex flex-col justify-between">
          {children}
        </div>
      </body>
    </html>
  );
}
