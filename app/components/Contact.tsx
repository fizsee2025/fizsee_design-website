// components/Contact.tsx
"use client";
import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-[#365042] to-[#3C5246] text-white"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-[#D1E7DD]">Touch</span>
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Have a project in mind? Let’s build something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-[#D1E7DD] text-2xl" />
              <p className="text-gray-200">+91 98765 43210</p>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#D1E7DD] text-2xl" />
              <p className="text-gray-200">contact@fizsee.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-[#D1E7DD] text-2xl" />
              <p className="text-gray-200">Chennai, Tamil Nadu, India</p>
            </div>
            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-[#D1E7DD] text-2xl" />
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:underline"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg space-y-6"
          >
            {/* Replace with your Web3Forms access key */}
            <input
              type="hidden"
              name="access_key"
              value="YOUR_WEB3FORMS_ACCESS_KEY"
            />

            <div className="grid sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D1E7DD]"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D1E7DD]"
              />
            </div>
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D1E7DD]"
            />
            <input
              type="text"
              name="service"
              placeholder="Service Required"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D1E7DD]"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D1E7DD]"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#D1E7DD] text-[#365042] font-semibold hover:bg-white hover:text-[#3C5246] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
