"use client";

import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import WhatsappIcon from "../components/WhatsappIcon";
import Contact from "../components/Contact";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <>
      <Navbar />

      {/* Contact Section */}
      <Contact />

      {/* WhatsApp Floating Icon */}
      <WhatsappIcon />

      <Footer />
    </>
  );
};

export default ContactPage;
