"use client";

import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ProjectType {
  title: string;
  desc: string;
  images: string[];
  client: string;
  location: string;
  year: string;
}

const projects: ProjectType[] = [
  {
    title: "Corporate Facade",
    desc: "Triplicane project with video wall and LED 3D letters completed in 20 days",
    images: [
      "/projects/project1.jpg",
      "/projects/project1b.jpg",
      "/projects/project1c.jpg",
    ],
    client: "ABC Corp Pvt Ltd",
    location: "Triplicane, Chennai",
    year: "2024",
  },
  {
    title: "Retail & Shopping Spaces",
    desc: "Media facade with LED integration to enhance brand visibility",
    images: ["/projects/project2.jpg", "/projects/project2b.jpg"],
    client: "Retail Experts",
    location: "Bangalore",
    year: "2023",
  },
  {
    title: "Luxury Residences",
    desc: "Modern interiors, glazing, and signage solutions",
    images: ["/projects/project3.jpg", "/projects/project3b.jpg"],
    client: "Luxury Homes Inc",
    location: "Mumbai",
    year: "2022",
  },
  {
    title: "Commercial Office Complex",
    desc: "Durable ACP cladding & structural glazing for high-rise buildings",
    images: ["/projects/project4.jpg", "/projects/project4b.jpg"],
    client: "Business Towers Ltd",
    location: "Delhi",
    year: "2023",
  },
  {
    title: "Hospitality Exteriors",
    desc: "LED cove lighting & facade design for hotels and resorts",
    images: ["/projects/project5.jpg", "/projects/project5b.jpg"],
    client: "Hospitality Group",
    location: "Goa",
    year: "2022",
  },
  {
    title: "Architectural GFRC Elements",
    desc: "Custom GFRC panels for decorative facades and interiors",
    images: ["/projects/project6.jpg", "/projects/project6b.jpg"],
    client: "Design Works Pvt Ltd",
    location: "Chennai",
    year: "2024",
  },
];

const ProjectModal = ({
  project,
  onClose,
}: {
  project: ProjectType;
  onClose: () => void;
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl w-full max-w-3xl shadow-2xl overflow-hidden"
      >
        {/* Header with Close Button */}
        <div className="flex justify-between items-center p-4 border-b bg-[#f8faf9]">
          <h2 className="text-xl md:text-2xl font-semibold text-[#365042]">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-black text-2xl leading-none"
          >
            ✕
          </button>
        </div>

        {/* Image Slider */}
        <div className="relative w-full h-56 sm:h-72 md:h-80">
          <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1}>
            {project.images.map((img, i) => (
              <div key={i} className="relative w-full h-56 sm:h-72 md:h-80">
                <Image
                  src={img}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Modal Content */}
        <div className="p-4 md:p-6 space-y-3 text-sm md:text-base text-gray-700">
          <p>{project.desc}</p>
          <p>
            <strong>Client:</strong> {project.client}
          </p>
          <p>
            <strong>Location:</strong> {project.location}
          </p>
          <p>
            <strong>Year:</strong> {project.year}
          </p>

          <button
            className="mt-4 w-full md:w-auto px-6 py-3 bg-[#365042] text-white rounded-xl shadow hover:bg-[#2b3e36] transition"
            onClick={() => (window.location.href = "/contact")}
          >
            Contact Us
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-white via-gray-50 to-[#e8f0eb] relative"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-[#365042] mb-4"
          >
            Our <span className="text-[#3C5246]">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Showcasing architectural excellence and design innovation across
            various sectors.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl hover:-translate-y-2 transform transition duration-500"
            >
              <div className="relative w-full h-64">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-[#365042] mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm flex-1 leading-relaxed">
                  {project.desc}
                </p>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-4 px-5 py-3 rounded-xl bg-[#365042] text-white font-semibold shadow-md hover:bg-[#2b3e36] transition duration-300"
                >
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
