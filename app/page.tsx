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
  const [popupStage, setPopupStage] = useState(0); // 0 = not shown yet

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const showPopupWithDelay = (delaySeconds: number, stage: number) => {
      timer = setTimeout(() => {
        setShowPopup(true);
        setPopupStage(stage);
      }, delaySeconds * 1000);
    };

    // 💡 Use smaller numbers while testing (5 → 300 for real)
    if (popupStage === 0) {
      showPopupWithDelay(5, 1); // change to 300 for production
    } else if (popupStage === 1) {
      showPopupWithDelay(20, 2);
    } else if (popupStage === 2) {
      showPopupWithDelay(40, 3);
    }

    return () => clearTimeout(timer);
  }, [popupStage]);

  const handleClosePopup = () => {
    setShowPopup(false);
    setPopupStage((prev: any) => (prev < 3 ? prev + 1 : prev));
  };
  return (
    <>
      <Navbar />
      <Hero />
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
