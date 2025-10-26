import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import WhatsappIcon from "./components/WhatsappIcon";
import Services from "./components/Services";
import Projects from "./components/projects";
import Contact from "./components/Contact";

export default function Home() {
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
    </>
  );
}
