// components/Services.tsx
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaWarehouse,
  FaTv,
  FaAd,
  FaProjectDiagram,
  FaCouch,
} from "react-icons/fa";

const services = [
  {
    title: "ACP Cladding",
    desc: "Stylish, durable exterior solutions for modern façades. Elevate the look and performance of buildings with precision and aesthetic appeal.",
    icon: <FaBuilding size={28} />,
    img: "/hero.jpg",
  },
  {
    title: "Glass Façades & Glazing",
    desc: "Premium glass façades with cutting-edge designs. We work with float, toughened, laminated, and reflective glass for durability and energy efficiency.",
    icon: <FaWarehouse size={28} />,
    img: "/hero2.jpg",
  },
  {
    title: "Media Façades",
    desc: "Transform building facades into dynamic canvases of light and motion. LED media facades are customizable, programmable, and scalable for WOW experiences.",
    icon: <FaTv size={28} />,
    img: "/hero3.jpg",
  },
  {
    title: "Signage Solutions",
    desc: "Custom LED and acrylic signage for impactful branding. Long-lasting, energy-efficient, and tailored to communicate your brand identity.",
    icon: <FaAd size={28} />,
    img: "/hero4.jpg",
  },
  {
    title: "Project Management",
    desc: "End-to-end supervision, sourcing, and timely handover. We ensure projects meet the highest standards of safety, quality, and environmental responsibility.",
    icon: <FaProjectDiagram size={28} />,
    img: "/hero5.jpg",
  },
  {
    title: "Interior Services",
    desc: "Complete interior contracting from design to execution. False ceilings, modular cabins, flooring, painting, and end-to-end solutions tailored for elegance and functionality.",
    icon: <FaCouch size={28} />,
    img: "/hero6.jpg",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-[#f0f5f0] via-[#e8f0eb] to-[#dce7dd] relative overflow-hidden"
    >
      {/* Decorative Background Blur Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
          className="absolute w-72 h-72 bg-gradient-to-tr from-[#78ffd6] to-[#a8ff78] rounded-full blur-3xl -top-24 -left-24"
        />
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
          className="absolute w-72 h-72 bg-gradient-to-tr from-[#D1E7DD] to-[#78ffd6] rounded-full blur-3xl -bottom-24 -right-24"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#a8ff78] to-[#78ffd6] mb-4"
          >
            Our <span className="text-[#365042]">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 max-w-3xl mx-auto text-lg"
          >
            Innovative and aesthetic solutions to transform your vision into
            reality. From façades to interiors and signage, we craft spaces that
            inspire.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-500 overflow-hidden"
            >
              {/* Icon + Title + Desc */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#78ffd6]/20 to-[#a8ff78]/20 text-[#365042] mb-5 transition-transform transform hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#365042] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 flex-1 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Image */}
              <div className="relative w-full h-52 md:h-60">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* CTA Button */}
              <div className="p-6">
                <a
                  href="/services"
                  className="block w-full text-center px-5 py-3 rounded-xl bg-[#365042] text-white font-semibold shadow-md hover:bg-[#2b3e36] hover:shadow-lg transition duration-300"
                >
                  Know More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
