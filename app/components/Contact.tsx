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
import { motion } from "framer-motion";

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

  const contactInfo = [
    { icon: <FaPhoneAlt />, text: "+91 95665 41252" },
    { icon: <FaEnvelope />, text: "fizseedesigns2021@gmail.com" },
    {
      icon: <FaMapMarkerAlt />,
      text: "No. 32, Ramanujam Street, Madurantakam, Chengalpattu - 603 306",
    },
    {
      icon: <FaWhatsapp />,
      text: "Chat on WhatsApp",
      link: "https://wa.me/919566541252",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-b from-[#365042] via-[#2f4538] to-[#3C5246] text-white overflow-hidden"
    >
      <Toaster position="top-right" />
      {/* Background decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
          className="absolute w-96 h-96 bg-gradient-to-r from-[#78ffd6] to-[#a8ff78] rounded-full blur-3xl -top-32 -left-32"
        />
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
          className="absolute w-96 h-96 bg-gradient-to-r from-[#D1E7DD] to-[#78ffd6] rounded-full blur-3xl -bottom-32 -right-32"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#a8ff78] to-[#78ffd6]"
          >
            Get In <span className="text-[#D1E7DD]">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-200 max-w-3xl mx-auto text-lg"
          >
            Have a project in mind? Let’s build something amazing together.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex items-center gap-5 bg-white/10 backdrop-blur-lg p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-[#D1E7DD] text-3xl">{info.icon}</div>
                {info.link ? (
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-[#78ffd6] transition"
                  >
                    {info.text}
                  </a>
                ) : (
                  <p className="text-gray-200">{info.text}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-xl space-y-6 border border-white/20"
          >
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
                className="w-full px-5 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#78ffd6]"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-5 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#78ffd6]"
              />
            </div>
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              required
              className="w-full px-5 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#78ffd6]"
            />
            <input
              type="text"
              name="service"
              placeholder="Service Required"
              required
              className="w-full px-5 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#78ffd6]"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              required
              className="w-full px-5 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#78ffd6]"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-xl bg-gradient-to-r from-[#78ffd6] to-[#a8ff78] text-black font-semibold hover:scale-105 transform transition duration-300 ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
