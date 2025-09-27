"use client";
import React from "react";
import Navbar from "../components/NavBar";
import About from "../components/About";
import Footer from "../components/Footer";
import WhatsappIcon from "../components/WhatsappIcon";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <>
      <Navbar />

      {/* About Section */}
      <About />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-12">
            Why <span className="text-primary">Choose Us</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 border border-gray-200 rounded-2xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-dark mb-2">
                Expert Team
              </h3>
              <p className="text-gray-700">
                Our professionals bring years of experience and creativity to
                every project.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 border border-gray-200 rounded-2xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-dark mb-2">
                Quality Assurance
              </h3>
              <p className="text-gray-700">
                We follow strict quality standards to ensure every project
                exceeds expectations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 border border-gray-200 rounded-2xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-dark mb-2">
                Innovative Solutions
              </h3>
              <p className="text-gray-700">
                We combine creativity and technology to provide solutions that
                stand out.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-12">
            Our <span className="text-primary">Mission & Vision</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold text-dark mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To deliver high-quality construction and design solutions that
                combine innovation, sustainability, and precision to exceed
                client expectations.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold text-dark mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To become a leading name in the design and construction
                industry, recognized for creativity, integrity, and
                transformative spaces.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Icon */}
      <WhatsappIcon />

      <Footer />
    </>
  );
};

export default AboutPage;
