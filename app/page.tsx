"use client";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import WhatsappIcon from "./components/WhatsappIcon";
import Services from "./components/Services";
import Projects from "./components/projects";
import Contact from "./components/Contact";
import ConsultationPopup from "./components/ConsultationPopup";
import { useEffect, useState } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupStage, setPopupStage] = useState<0 | 1 | 2 | 3>(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const showPopupWithDelay = (delaySeconds: number, stage: number) => {
      timer = setTimeout(() => {
        setShowPopup(true);
        setPopupStage(stage as 0 | 1 | 2 | 3);
      }, delaySeconds * 1000);
    };

    if (popupStage === 0) {
      showPopupWithDelay(5, 1);
    } else if (popupStage === 1) {
      showPopupWithDelay(20, 2);
    } else if (popupStage === 2) {
      showPopupWithDelay(40, 3);
    }

    return () => clearTimeout(timer);
  }, [popupStage]);

  const handleClosePopup = () => {
    setShowPopup(false);
    setPopupStage((prev) => (prev < 3 ? ((prev + 1) as 0 | 1 | 2 | 3) : prev));
  };

  return (
    <>
      <Navbar />
      <Hero />

      {/* =========================
          SEO CONTENT (visually hidden but crawlable)
          Inserted after Hero so UI remains unchanged
         ========================= */}
      <section className="sr-only" aria-hidden="false">
        <h1>
          Fizsee Designs — Innovative Architecture & Interiors in Tamil Nadu
        </h1>

        <p>
          Fizsee Designs is a professional architecture, façade and interior
          design firm based in Madurantakam, Chengalpattu, Tamil Nadu. We
          deliver innovative, durable and aesthetic solutions across ACP
          cladding, glass façades, media façades, signage solutions, project
          management and full interior contracting.
        </p>

        <p>
          Our core services include ACP Cladding, Glass Façades & Glazing
          (float, toughened, laminated), Media Façades (LED programmable
          façades), Signage Solutions (LED & acrylic), Project Management, and
          Interior Services (false ceilings, modular cabins, flooring,
          painting). Fizsee Designs offers end-to-end turnkey project delivery
          with a focus on precision, safety and timely handover across Tamil
          Nadu and pan-India.
        </p>

        <ul>
          <li>ACP Cladding — Stylish, durable exterior façades</li>
          <li>Glass Façades & Glazing — Energy-efficient glazing systems</li>
          <li>Media Façades — LED and programmable façade solutions</li>
          <li>Signage Solutions — Custom LED & acrylic signage</li>
          <li>Project Management — End-to-end supervision & quality control</li>
          <li>
            Interior Services — Complete interior contracting and turnkey
            solutions
          </li>
        </ul>

        <p>
          Address: No. 32, Ramanujam Street, Madurantakam, Chengalpattu -
          603306, Tamil Nadu. Phone: +91 95665 41252. For consultations and
          project inquiries, contact Fizsee Designs for tailored architectural,
          façade and interior solutions across Tamil Nadu.
        </p>
      </section>

      <About />
      <Services />
      <Projects />
      <Contact />
      <WhatsappIcon />
      <Footer />
      <ConsultationPopup showPopup={showPopup} onClose={handleClosePopup} />
    </>
  );
}
