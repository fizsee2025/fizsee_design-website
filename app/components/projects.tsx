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
    title: "Focus Mens & Boys Wear",
    desc: "Focus Mens & Boys Wear project completed across three branches — Triplicane, Singaperumal Kovil, and Medavakkam. The work included premium ACP cladding, LED 3D letters, and a full video wall installation, completed within 20 days.",
    images: [
      "/projects/project1.jpg",
      "/projects/project1b.jpeg",
      "/projects/project1c.jpeg",
    ],
    client: "Focus Mens & Boys Wear",
    location:
      "Pallavaram, Medavakkam, Arumbakkam, Valasaravakkam, Triplicane — Chennai",
    year: "2021 - 2025",
  },
  {
    title: "Women'Z Corner",
    desc: "Executed a modern storefront design for Women'Z Corner, featuring elegant glazing, ACP paneling, and creative signage solutions that enhance visual appeal and brand identity.",
    images: ["/projects/project3.jpg", "/projects/womenz.jpeg"],
    client: "Women'Z Corner",
    location: "Maduranthakam",
    year: "2021",
  },
  {
    title: "Anbu Textiles",
    desc: "Delivered custom GFRC and ACP panel installations for Anbu Textiles, adding a decorative touch to the façade and interiors while ensuring durability and modern aesthetics.",
    images: [
      "/projects/anbu.jpeg",
      "/projects/anbu1a.jpeg",
      "/projects/project6.jpg",
    ],
    client: "Anbu Textiles",
    location: "Singaperumal Koil, Chengalpattu -Chennai",
    year: "2021 - 2025",
  },
  {
    title: "SAS Star Tower",
    desc: "Designed and installed a premium façade for SAS Star Tower, featuring LED cove lighting and architectural illumination to enhance the building’s night-time presence.",
    images: ["/projects/project5.jpg", "/projects/sas.jpeg"],
    client: "SAS Star Tower",
    location: "Singaperumal Koil",
    year: "2022",
  },
  {
    title: "Zeenath Dresses",
    desc: "Custom ACP panel fabrication and installation for Zeenath Dresses located on MC Road, Chennai. The work focused on modern façade finishing and brand-centric visual design.",
    images: ["/projects/projects8.jpeg", "/projects/zeenath.jpeg"],
    client: "Zeenath Dresses",
    location: "MC Road, Chennai",
    year: "2025",
  },
  {
    title: "Rainbow",
    desc: "Executed ACP work for Rainbow, featuring precise panel alignment and a clean modern finish that elevated the store’s exterior design and brand presence.",
    images: ["/projects/rainbow.jpeg", "/projects/rainbow1a.jpeg"],
    client: "Rainbow",
    location: "MC Road, Chennai",
    year: "2025",
  },
  {
    title: "Arabian Sea Food Restaurant",
    desc: "Implemented custom ACP panel and façade work for Arabian Sea Food Restaurant, creating a vibrant and durable exterior design suitable for high-traffic commercial areas.",
    images: ["/projects/arabian.jpeg", "/projects/arabian1a.jpeg"],
    client: "Arabian Sea Food Restaurant",
    location: "Padur - Chennai",
    year: "2025",
  },
  {
    title: "Madurai Hanifa",
    desc: "Designed and completed a dynamic media façade for Madurai Hanifa with integrated LED panels and creative signage, ensuring high visibility and a modern aesthetic.",
    images: ["/projects/hanifa.jpeg", "/projects/hanifa1b.jpeg"],
    client: "Madurai Hanifa",
    location: "Pallavaram - Chennai",
    year: "2023",
  },
  {
    title: "Meera Stores",
    desc: "Created a striking media façade with LED integration for Meera Stores, improving night-time visibility and enhancing overall brand presentation.",
    images: ["/projects/project2.jpg"],
    client: "Meera Stores",
    location: "Maduranthakam",
    year: "2021",
  },
  {
    title: "Ansar Mobiles",
    desc: "Installed durable ACP cladding and structural glazing solutions for Ansar Mobiles, blending strength and modern design for commercial façade applications.",
    images: ["/projects/project4.jpg", "/projects/ansar1a.jpeg"],
    client: "Ansar Mobiles",
    location: "Maduranthakam",
    year: "2021",
  },
  {
    title: "Jitta's Multi-Cuisine Diner",
    desc: "Executed a refreshing storefront design for Jitta's Multi-Cuisine Diner, featuring ACP panel work and LED media integration to attract customers with a modern appeal.",
    images: ["/projects/jittas.jpeg", "/projects/jittas1a.jpeg"],
    client: "Jitta's Multi-Cuisine Diner",
    location: "Velacherry",
    year: "2025",
  },
  {
    title: "NoblQ",
    desc: "Nobl Q is a boutique digital services company with a strong emphasis on AI and the core technologies of SAP, Acumatica, Salesforce, ServiceNow, and Microsoft. Our project focused on delivering premium signage, ACP façade, and glazing solutions that reflected their modern tech-driven identity.",
    images: ["/projects/noblq1a.jpeg", "/projects/noblq.jpeg"],
    client: "NoblQ",
    location: "Tharamani",
    year: "2025",
  },
  {
    title: "Jai Home Appliances",
    desc: "Installed durable ACP cladding and structural glazing solutions for Jai Home Appliances, blending strength and modern design for commercial façade applications.",
    images: ["/projects/jai.jpeg", "/projects/jai1a.jpeg"],
    client: "Jai Home Appliances",
    location: "Tharamani",
    year: "2023",
  },
  {
    title: "Zohra Cosmetics",
    desc: "Executed ACP work for Zohra Cosmetics, featuring precise panel alignment and a clean modern finish that elevated the store’s exterior design and brand presence.",
    images: ["/projects/zohra.jpeg", "/projects/zohra1a.jpeg"],
    client: "Rainbow",
    location: "Maduranthakam",
    year: "2022",
  },
  {
    title: "SMK Textiles LLP",
    desc: "Delivered custom GFRC and ACP panel installations for SMK Textiles LLP, adding a decorative touch to the façade and interiors while ensuring durability and modern aesthetics.",
    images: ["/projects/smk.jpeg", "/projects/smk1a.jpeg"],
    client: "SMK Textiles LLP",
    location: "MC Road -Chennai",
    year: "2025",
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
          <Slider
            dots
            infinite
            autoplay
            autoplaySpeed={2500}
            speed={800}
            slidesToShow={1}
            slidesToScroll={1}
            pauseOnHover={false}
            arrows={false}
          >
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
