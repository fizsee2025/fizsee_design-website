// components/Footer.tsx
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-gray-300 pt-16 pb-8 relative overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-dark to-dark pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Fizsee Designs
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              Crafting excellence in ACP cladding, glass façades, signage, and
              architectural solutions since 2021. We design spaces that inspire.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`/${item.toLowerCase()}`}
                      className="hover:text-primary transition duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                "ACP Cladding",
                "Glass Façades",
                "Media Façades",
                "Signage",
                "Project Management",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="/services"
                    className="hover:text-primary transition duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <p className="text-gray-400 text-sm mb-3">
              #123, Main Road, Bangalore, India
            </p>
            <p className="text-gray-400 text-sm mb-3">+91 98765 43210</p>
            <p className="text-gray-400 text-sm mb-6">info@fizsee.com</p>

            <div className="flex space-x-4">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <Icon size={16} />
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Fizsee Designs. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
