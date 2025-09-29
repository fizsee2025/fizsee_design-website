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

      {/* Add padding-top to prevent overlap with fixed navbar */}
      <div className="pt-28">
        {/* Services Section */}
        <Services />
      </div>

      {/* WhatsApp Floating Icon */}
      <WhatsappIcon />

      <Footer />
    </>
  );
};

export default ServicesPage;
