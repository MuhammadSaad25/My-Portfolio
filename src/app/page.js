"use client";
import React, { useState } from "react";
import Hero from "@/components/Hero/Hero";
import NavBar from "@/components/NavBar/NavBar";
import { gsap, Power3 } from "gsap";

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
      <Hero />
    </main>
  );
}
