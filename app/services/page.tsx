"use client";

import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import WhatsappIcon from "../components/WhatsappIcon";
import Services from "../components/Services";

const ServicesPage = () => {
  return (
    <>
      <Navbar />

      {/* Services Section */}
      <Services />

      {/* WhatsApp Floating Icon */}
      <WhatsappIcon />

      <Footer />
    </>
  );
};

export default ServicesPage;
