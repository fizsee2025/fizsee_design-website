"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const founders = [
  { name: "Mr. Hussain Ahamed MS", role: "Founder & CEO", img: "/700.JPG" },
  {
    name: "Mr. Afizudeen H",
    role: "Co-Founder & Director",
    img: "/images/cofounder.jpg",
  },
];

const stats = [
  { label: "Projects Completed", value: "120+" },
  { label: "Happy Clients", value: "85+" },
  { label: "Years of Experience", value: "5+" },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 bg-gradient-to-b from-[#0f1713] via-[#12211b] to-[#0f1713] overflow-hidden text-white"
    >
      {/* Background Decorative Shapes */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#78ffd6]/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#a8ff78]/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[450px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          >
            <Image
              src="/hero.jpg"
              alt="About Us"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#a8ff78] to-[#78ffd6]">
              Crafting Spaces with Precision & Passion
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Fizsee Designs is dedicated to transforming visions into reality.
              With expertise in construction, interiors, and façade engineering,
              we deliver elegant and innovative solutions tailored for every
              client.
            </p>

            {/* Stats */}
            <div className="flex gap-6 mb-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl flex-1 p-6 text-center shadow-lg hover:shadow-2xl transition duration-300"
                >
                  <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#a8ff78] to-[#78ffd6]">
                    {stat.value}
                  </h3>
                  <p className="text-gray-300 mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Founders */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {founders.map((person, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-5 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition duration-500"
                >
                  <div className="relative w-28 h-28 rounded-full overflow-hidden mb-4">
                    <Image
                      src={person.img}
                      alt={person.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {person.name}
                  </h3>
                  <p className="text-[#78ffd6] text-sm font-medium">
                    {person.role}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="/contact"
              className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-[#a8ff78] to-[#78ffd6] text-black font-semibold shadow-lg hover:scale-105 transform transition duration-300"
            >
              Let&apos;s Connect
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
