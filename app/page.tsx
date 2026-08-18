import Navbar from "@/components/Navbar";
import SectionIndicator from "@/components/SectionIndicator";
import CommandConsole from "@/components/CommandConsole";
import PortfolioLoader from "@/components/PortfolioLoader";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <PortfolioLoader>
      <main className="min-h-screen bg-black text-white">
        <Navbar />
        <SectionIndicator />
        <CommandConsole />

        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />

        <Footer />
      </main>
    </PortfolioLoader>
  );
}