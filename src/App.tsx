import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Differentials from "./components/Differentials";
import HowItWorks from "./components/HowItWorks";
import Coverage from "./components/Coverage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { FloatingWhatsApp } from "./components/WhatsAppButton";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  useReveal();

  return (
    <div className="min-h-screen bg-white font-sans text-navy-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <HowItWorks />
        <Coverage />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
