"use client";
import React, { useState } from "react";
import { gsap, Power3 } from "gsap";
import NavBar from "@/components/NavBar/NavBar";
import Hero from "@/components/Hero/Hero";
import Accordion from "@/components/Projects/Accordion";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // gsap
  let tl = new gsap.timeline();
  let ease = Power3.easeOut();

  return (
    <main
      className={`relative flex min-h-screen flex-col items-center ${
        isDarkMode ? "dark" : "light"
      }`}
    >
      <NavBar
        timeline={tl}
        ease={ease}
        setIsDarkMode={setIsDarkMode}
        isDarkMode={isDarkMode}
        toggleDarkMode={() => setIsDarkMode((prevMode) => !prevMode)}
      />
      <Hero timeline={tl} ease={ease} />
      <Accordion isDarkMode={isDarkMode} />
    </main>
  );
}
