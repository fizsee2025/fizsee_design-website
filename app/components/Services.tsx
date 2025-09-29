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
      className="py-20 bg-gradient-to-b from-white via-gray-50 to-[#e8f0eb] relative"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#365042] mb-4">
            Our <span className="text-[#3C5246]">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Delivering innovative, durable, and aesthetic solutions that
            transform your vision into reality. From exterior façades to
            interiors and signage, we craft spaces that inspire.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl hover:-translate-y-2 transform transition duration-500"
            >
              {/* Icon + Title + Desc */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#365042]/10 text-[#365042] mb-5">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#365042] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {service.desc}
                </p>
              </div>

              {/* Image */}
              <div className="relative w-full h-44 md:h-48">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CTA Button */}
              <div className="p-6">
                <a
                  href="/services"
                  className="block w-full text-center px-5 py-3 rounded-xl bg-[#365042] text-white font-semibold shadow-md hover:bg-[#2b3e36] transition duration-300"
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
