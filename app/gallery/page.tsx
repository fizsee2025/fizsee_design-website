"use client";

import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import WhatsappIcon from "../components/WhatsappIcon";
import Image from "next/image";

const galleryImages = [
  "/projects/project1.jpg",
  "/projects/projects1.jpeg",
  "/projects/ansar1a.jpeg",
  "/projects/projects4.jpeg",
  "/projects/jittas.jpeg",
  "/projects/project2.jpg",
  "/projects/rainbow.jpeg",
  "/projects/projects2.jpeg",
  "/projects/projects3.jpeg",
  "/projects/project3.jpg",
  "/projects/projects7.jpeg",
  "/projects/projects5.jpeg",
  "/projects/projects6.jpeg",
  "/projects/projects8.jpeg",
  "/projects/projects9.jpeg",
  "/projects/project1b.jpeg",
  "/projects/projects10.jpeg",
  "/projects/projects11.jpeg",
  "/projects/projects12.jpeg",
  "/projects/project1c.jpeg",
  "/projects/jai.jpeg",
  "/projects/zeenath.jpeg",
  "/projects/jai1b.jpeg",
];

const GalleryPage = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#3C5246] to-[#e8f0eb] pt-28 pb-32">
        {/* Decorative Shape (optional for wow effect) */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-[#78ffd6]/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 md:px-12 text-center relative z-10 mt-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#78ffd6]">Gallery</span>
          </h1>
          <p className="text-white max-w-2xl mx-auto">
            Explore our completed projects, from stunning façades to interior
            spaces, showcasing innovation, precision, and quality craftsmanship.
          </p>
        </div>

        {/* Overlapping effect */}
        <div className="absolute -bottom-20 w-full h-20 bg-[#f4f8f5] rounded-t-3xl"></div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-20 bg-[#f4f8f5]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="relative w-full rounded-3xl overflow-hidden break-inside-avoid shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-500"
              >
                <Image
                  src={img}
                  alt={`Gallery Image ${index + 1}`}
                  width={500}
                  height={600} // taller height for masonry effect
                  className="object-cover w-full"
                />
                <div className="absolute inset-0 bg-[#78ffd6]/10 opacity-0 hover:opacity-100 transition duration-300 rounded-3xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#365042] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Interested in Our Work?
        </h2>
        <p className="mb-6 text-[#d1e7dd]">
          Let’s collaborate and bring your vision to life with precision and
          elegance.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 rounded-xl bg-[#78ffd6] text-[#365042] font-semibold shadow-lg hover:bg-[#a8ff78] hover:shadow-2xl transition duration-300"
        >
          Contact Us
        </a>
      </section>

      <WhatsappIcon />
      <Footer />
    </>
  );
};

export default GalleryPage;
