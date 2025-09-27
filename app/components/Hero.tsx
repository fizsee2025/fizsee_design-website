"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  "/hero.jpg", // façade
  "/hero2.jpg", // signage
  "/hero3.jpg", // glazing/media façade
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Slider */}
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${slides[current]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#2B4A28]/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
        >
          Elevating Designs with{" "}
          <span className="text-[#2B4A28]">Innovation</span>
        </motion.h1>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl"
        >
          ACP, Glass, Media Façade & More — Crafted with Precision, Built on
          Trust
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.4 }}
          className="mt-8 flex gap-4"
        >
          <Link
            href="/services"
            className="px-6 py-3 rounded-2xl bg-[#2B4A28] text-white font-medium shadow-lg hover:bg-[#233720] transition"
          >
            View Services
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-2xl bg-white text-[#2B4A28] font-medium shadow-lg hover:bg-gray-200 transition"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
