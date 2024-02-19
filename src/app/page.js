"use client";
import React, { useState } from "react";
import { gsap, Power3 } from "gsap";
import NavBar from "@/components/NavBar/NavBar";
import Hero from "@/components/Hero/Hero";
import Signup from "@/components/signup";
// Import Login
import Accordion from "@/components/Projects/Accordion";
import Login from "@/components/login";
import Main from "@/components/Home";
import Dashboard from "@/components/Dashboard";
import DoctorProfile from "@/components/DoctorProfile";
// import Slider from "@/components/Carousel";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // gsap
  let tl = new gsap.timeline();
  let ease = Power3.easeOut();

  return (

    <main
      className={`relative flex min-h-screen flex-col items-center ${isDarkMode ? "dark" : "light"
        }`}
    >
      <video
        autoPlay
        loop
        muted
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        className="absolute"
      >
        <source src="https://res.cloudinary.com/dixrdohp4/video/upload/v1708323786/mixkit-infinity-corridor-with-futuristic-style-32960-medium_zz4cua.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute h-screen w-full video-bg">
        <NavBar
          // timeline={tl}
          // ease={ease}
          setIsDarkMode={setIsDarkMode}
          isDarkMode={isDarkMode}
          toggleDarkMode={() => setIsDarkMode((prevMode) => !prevMode)}
        />

        {/* <Hero timeline={tl} ease={ease} /> */}
        {/* <Accordion isDarkMode={isDarkMode} /> */}
        {/* <Slider /> */}

        {/* <Signup /> */}
        {/* <Login /> */}
        {/* <Main /> */}
        {/* <Dashboard /> */}
        {/* <DoctorProfile /> */}
      </div>
    </main>

  );
}
