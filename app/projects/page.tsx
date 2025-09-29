"use client";

import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import WhatsappIcon from "../components/WhatsappIcon";
import Projects from "../components/projects";

const ProjectsPage = () => {
  return (
    <>
      <Navbar />

      {/* Projects Section */}
      <div className="pt-28">
        <Projects />
      </div>

      {/* WhatsApp Floating Icon */}
      <WhatsappIcon />

      <Footer />
    </>
  );
};

export default ProjectsPage;
