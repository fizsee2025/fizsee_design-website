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
} from "react-icons/fa";

const services = [
  {
    title: "ACP Cladding",
    desc: "Stylish & durable exterior solutions for modern façades.",
    icon: <FaBuilding size={28} />,
    img: "/hero.jpg",
  },
  {
    title: "Glass Façades & Glazing",
    desc: "Premium finishes with cutting-edge glass designs.",
    icon: <FaWarehouse size={28} />,
    img: "/hero2.jpg",
  },
  {
    title: "Media Façades",
    desc: "LED-integrated façades for commercial & landmark projects.",
    icon: <FaTv size={28} />,
    img: "/hero3.jpg",
  },
  {
    title: "Signage Solutions",
    desc: "Custom branding and signage design for businesses.",
    icon: <FaAd size={28} />,
    img: "/hero2.jpg",
  },
  {
    title: "Project Management",
    desc: "End-to-end supervision, sourcing, and timely handover.",
    icon: <FaProjectDiagram size={28} />,
    img: "/hero.jpg",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-white via-gray-50 to-[#e8f0eb] relative"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#365042] mb-4">
            Our <span className="text-[#3C5246]">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Delivering innovative, durable, and aesthetic design solutions to
            transform your vision into reality.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl hover:-translate-y-2 transform transition duration-500"
            >
              {/* Icon + Title + Desc */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#365042]/10 text-[#365042] mb-5">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#365042] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                  {service.desc}
                </p>
              </div>

              {/* Image */}
              <div className="relative w-full h-40">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CTA */}
              <div className="p-6">
                <a
                  href="/services"
                  className="block w-full text-center px-5 py-2 rounded-lg bg-[#365042] text-white font-medium shadow-md hover:bg-[#2b3e36] transition duration-300"
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
