"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" }, // Added Gallery
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-bg.png"
            alt="Fizsee Designs Logo"
            width={140}
            height={60}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-900 font-medium items-center">
          {navLinks.map((link) => (
            <li key={link.href} className="relative">
              <Link href={link.href}>
                <span
                  className={`hover:text-primary transition-colors duration-300 ${
                    pathname === link.href ? "text-primary" : ""
                  }`}
                >
                  {link.name}
                </span>
              </Link>
              {pathname === link.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary"
                />
              )}
            </li>
          ))}

          {/* Contact CTA Button */}
          <li>
            <Link
              href="/contact"
              className="ml-4 px-4 py-2 bg-primary text-white rounded-lg font-medium shadow-md hover:bg-[#2b3e36] transition"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900 text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="md:hidden bg-white text-gray-900 absolute top-16 left-0 w-full shadow-lg"
        >
          <ul className="flex flex-col items-center py-6 gap-6 font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`${
                    pathname === link.href
                      ? "text-primary"
                      : "hover:text-primary"
                  } transition-colors duration-300`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Mobile Contact CTA */}
            <li>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 px-4 py-2 bg-primary text-white rounded-lg font-medium shadow-md hover:bg-[#2b3e36] transition"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
