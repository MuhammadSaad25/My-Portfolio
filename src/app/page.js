"use client";
import React, { useState } from "react";

import Hero from "@/components/Hero/Hero";
import NavBar from "@/components/NavBar/NavBar";
import DarkLight from "@/components/DarkLight/DarkLight";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <main
      className={`relative flex min-h-screen flex-col items-center ${
        isDarkMode ? "dark" : "light"
      }`}
    >
      <NavBar
        setIsDarkMode={setIsDarkMode}
        isDarkMode={isDarkMode}
        toggleDarkMode={() => setIsDarkMode((prevMode) => !prevMode)}
      />
      <Hero />
    </main>
  );
}
