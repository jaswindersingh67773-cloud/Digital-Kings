"use client";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import SmoothScroll from "@/components/ui/SmoothScroll";
import IntroScreen from "@/components/sections/IntroScreen";
import ScrollLine from "@/components/ui/ScrollLine";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Results from "@/components/sections/Results";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <SmoothScroll>
      <AnimatePresence>
        {!introComplete && (
          <IntroScreen key="intro" onExit={() => setIntroComplete(true)} />
        )}
      </AnimatePresence>
      <ScrollLine show={introComplete} />
      <Navbar />
      <main>
        <Hero introComplete={introComplete} />
        <Services />
        <Results />
        <About />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
