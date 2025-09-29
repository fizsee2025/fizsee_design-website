"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "Corporate Facade",
    desc: "ACP Cladding & Glass Façade with premium finishes for modern offices.",
    img: "/hero.jpg",
  },
  {
    title: "Retail & Shopping Spaces",
    desc: "Media Façade with LED integration to enhance brand visibility.",
    img: "/hero2.jpg",
  },
  {
    title: "Luxury Residences",
    desc: "Modern interiors, glazing, and signage solutions for elegant living.",
    img: "/hero3.jpg",
  },
  {
    title: "Commercial Office Complex",
    desc: "Durable ACP Cladding & structural glazing for high-rise buildings.",
    img: "/hero4.jpg",
  },
  {
    title: "Hospitality Exteriors",
    desc: "LED Cove Lighting & façade design for hotels and resorts.",
    img: "/hero5.jpg",
  },
  {
    title: "Architectural GFRC Elements",
    desc: "Custom GFRC panels for decorative facades, interiors, and outdoor spaces.",
    img: "/hero6.jpg",
  },
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="projects" className="py-20 bg-[#1e2a25] text-white relative">
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-[#D1E7DD]">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Showcasing our expertise in ACP, glass façades, LED media,
            interiors, signage, and GFRC works.
          </p>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="px-2 h-full">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition duration-500 flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative h-60 w-full">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Title & Description */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm flex-1">{project.desc}</p>

                  <a
                    href="/projects"
                    className="mt-4 inline-block text-center px-5 py-2 rounded-lg bg-[#D1E7DD] text-[#1e2a25] font-medium shadow-md hover:bg-white hover:text-[#1e2a25] transition duration-300"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
