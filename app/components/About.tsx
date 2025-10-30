"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ConsultationPopup from "./ConsultationPopup";

const founders = [
  { name: "Mr. Hussain Ahamed MS", role: "Founder & CEO", img: "/700.JPG" },
  {
    name: "Mr. Afizudeen H",
    role: "Co-Founder & Director",
    img: "/blank-profile.jpg",
  },
  {
    name: "Mr. Kumar",
    role: "Project Head",
    img: "/kumar.jpeg",
  },
];

const stats = [
  { label: "Projects Completed", value: "50+" },
  { label: "Happy Clients", value: "25+" },
  { label: "Years of Experience", value: "5+" },
];

const About = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section
      id="about"
      className="relative py-16 sm:py-24 md:py-28 bg-gradient-to-b from-[#0f1713] via-[#12211b] to-[#0f1713] overflow-hidden text-white"
    >
      {/* Background Shapes */}
      <div className="absolute -top-40 -left-40 w-72 sm:w-96 h-72 sm:h-96 bg-[#78ffd6]/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-72 sm:w-96 h-72 sm:h-96 bg-[#a8ff78]/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-64 sm:h-[400px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          >
            <Image
              src="/hero.jpg"
              alt="About Us"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#a8ff78] to-[#78ffd6]">
              Crafting Spaces with Precision & Passion
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
              Fizsee Designs is dedicated to transforming visions into reality.
              With expertise in construction, interiors, and façade engineering,
              we deliver elegant and innovative solutions tailored for every
              client.
            </p>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4 sm:gap-6 mb-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl flex-1 p-4 sm:p-6 text-center shadow-lg hover:shadow-2xl transition duration-300"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#a8ff78] to-[#78ffd6]">
                    {stat.value}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm mt-2">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Founders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {founders.map((person, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition duration-500"
                >
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-3 sm:mb-4">
                    <Image
                      src={person.img}
                      alt={person.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white">
                    {person.name}
                  </h3>
                  <p className="text-[#78ffd6] text-xs sm:text-sm font-medium">
                    {person.role}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setShowPopup(true)}
              className="inline-block px-5 sm:px-6 py-3 rounded-xl bg-gradient-to-r from-[#a8ff78] to-[#78ffd6] text-black font-semibold shadow-lg hover:scale-105 transform transition duration-300"
            >
              Let&apos;s Connect
            </button>
          </motion.div>
        </div>
      </div>

      {/* Popup */}
      <ConsultationPopup
        showPopup={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </section>
  );
};

export default About;
