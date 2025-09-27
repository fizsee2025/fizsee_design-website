// components/Projects.tsx
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Corporate Tower",
    desc: "ACP & Glass Façade",
    img: "/hero.jpg",
  },
  {
    title: "Shopping Mall",
    desc: "Media Façade with LED integration",
    img: "/hero2.jpg",
  },
  {
    title: "Luxury Residence",
    desc: "Modern Glass & Signage",
    img: "/hero3.jpg",
  },
  {
    title: "Office Complex",
    desc: "ACP Cladding & Glazing",
    img: "/hero.jpg",
  },
  {
    title: "Hotel Exterior",
    desc: "LED Cove Lighting & Façade",
    img: "/hero3.jpg",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-[#1e2a25] text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-[#D1E7DD]">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A showcase of our completed works — façades, signage, glazing, and
            landmark media installations that inspire and elevate.
          </p>
        </div>

        {/* Auto-scrolling Gallery */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              ease: "linear",
              duration: 30,
              repeat: Infinity,
            }}
          >
            {[...projects, ...projects].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="min-w-[300px] sm:min-w-[350px] lg:min-w-[400px] bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500"
              >
                <div className="relative h-60 w-full">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
