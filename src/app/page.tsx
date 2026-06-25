"use client";

import { useState } from "react";

import BootLoader from "@/components/loader/BootLoader";
import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/hero/Hero";

import AIBackground from "@/components/background/AIBackground";
import MouseSpotlight from "@/components/effects/MouseSpotlight";
import CustomCursor from "@/components/cursor/CustomCursor";

import About from "@/sections/About/About";
import Skills from "@/sections/Skills/Skills";
import Experience from "@/sections/Experience/Experience";

// Uncomment when these files exist
// import Projects from "@/sections/Projects/Projects";

import Achievements from "@/sections/Achievements/Achievements";
import Certifications from "@/sections/Certifications/Certifications";
import Contact from "@/sections/Contact/Contact";

// Uncomment when Footer exists
// import Footer from "@/sections/Footer/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Global Background */}
      <AIBackground />

      {/* Global Effects */}
      <CustomCursor />
      <MouseSpotlight />

      {/* Boot Loader */}
      {!loaded ? (
        <BootLoader onComplete={() => setLoaded(true)} />
      ) : (
        <>
          {/* Navigation */}
          <Navbar />

          {/* Main Content */}
          <main className="relative z-10 overflow-x-hidden">
            <Hero />

            <About />

            <Skills />

            <Experience />

            {/* <Projects /> */}

            <Achievements />

            <Certifications />

            <Contact />

            {/* <Footer /> */}
          </main>
        </>
      )}
    </>
  );
}