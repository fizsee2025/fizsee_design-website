import Image from "next/image";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import WhatsappIcon from "./components/WhatsappIcon";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhatsappIcon />
      <Footer />
    </>
  );
}
