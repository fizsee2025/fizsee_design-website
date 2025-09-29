// components/Contact.tsx
"use client";
import React, { useRef, useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully!");
        formRef.current.reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-[#365042] to-[#3C5246] text-white"
    >
      {/* React Hot Toast Container */}
      <Toaster position="top-right" />

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
              <p className="text-gray-200">+91 95665 41252</p>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#D1E7DD] text-2xl" />
              <p className="text-gray-200">fizseedesigns2021@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-[#D1E7DD] text-2xl" />
              <p className="text-gray-200">
                No. 32, Ramanujam Street, Madurantakam, Chengalpattu - 603 306
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-[#D1E7DD] text-2xl" />
              <a
                href="https://wa.me/919566541252"
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
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg space-y-6"
          >
            {/* Web3Forms access key */}
            <input
              type="hidden"
              name="access_key"
              value="80e59204-d542-42e8-b0c7-f988a94dcb42"
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
              disabled={loading}
              className={`w-full py-3 rounded-lg bg-[#D1E7DD] text-[#365042] font-semibold hover:bg-white hover:text-[#3C5246] transition duration-300 ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
