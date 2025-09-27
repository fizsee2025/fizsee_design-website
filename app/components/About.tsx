"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const founders = [
  {
    name: "Mr. A. Founder",
    role: "Founder & CEO",
    img: "/700.JPG", // replace with real image
  },
  {
    name: "Mr. B. Co-Founder",
    role: "Co-Founder & Director",
    img: "/images/cofounder.jpg", // replace with real image
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/hero.jpg" // replace with real about image
            alt="About Fizsee Designs"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Trust in <span className="text-primary">Excellence</span>, Build
            with Precision.
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Established in 2021, Fizsee Designs has grown into a trusted name in
            construction, interiors, and exterior fabrications. We blend design
            innovation, engineering expertise, and uncompromising quality to
            deliver spaces that inspire.
          </p>

          {/* Founders Section */}
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {founders.map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl shadow-md p-5 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transform transition duration-500"
              >
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                  <Image
                    src={person.img}
                    alt={person.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-dark">
                  {person.name}
                </h3>
                <p className="text-primary text-sm font-medium">
                  {person.role}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="/contact"
            className="inline-block px-6 py-3 rounded-xl bg-primary text-white font-medium shadow-lg hover:bg-[#233720] transition"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
