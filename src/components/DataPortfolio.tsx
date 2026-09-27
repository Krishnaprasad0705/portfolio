"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import PipelineVisual from "@/components/PipelineVisual";
import Projects from "@/components/Projects";
import EditorialFeature from "@/components/EditorialFeature";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function DataPortfolio() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-[#FF2028] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <PipelineVisual />
        <Projects />
        <EditorialFeature />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
