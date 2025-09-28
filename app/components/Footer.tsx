// components/Footer.tsx
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      icon: FaFacebookF,
      url: "https://www.facebook.com/",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/fizsee_designs/",
    },
    {
      icon: FaLinkedinIn,
      url: "http://linkedin.com/",
    },
    {
      icon: FaTwitter,
      url: "https://twitter.com/",
    },
  ];

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
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Projects", "Contact"].map(
                (item) => {
                  const link = item === "Home" ? "/" : `/${item.toLowerCase()}`;

                  return (
                    <li key={item}>
                      <a
                        href={link}
                        className="hover:text-primary transition duration-300"
                      >
                        {item}
                      </a>
                    </li>
                  );
                }
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
              No. 32, Ramanujam Street, Madurantakam, Chengalpattu - 603 306
            </p>
            <p className="text-gray-400 text-sm mb-3">+91 95665 41252</p>
            <p className="text-gray-400 text-sm mb-6">
              fizseedesigns2021@gmail.com
            </p>

            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, url }, idx) => (
                <a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Fizsee Designs. All Rights Reserved. |
          Developed by{" "}
          <a
            href="https://growbranz.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            Grow Branz
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
