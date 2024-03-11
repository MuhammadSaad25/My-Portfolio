"use client";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "@/components/NavBar/NavBar";
import Hero from "@/components/Hero/Hero";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ThemeProvider } from 'next-themes';
import { useTheme } from 'next-themes'


export default function Home() {

  const { theme } = useTheme()


  const [isDarkMode, setIsDarkMode] = useState(true);

  const videoUrl = 'https://res.cloudinary.com/dixrdohp4/video/upload/v1708323786/mixkit-infinity-corridor-with-futuristic-style-32960-medium_zz4cua.mp4';
  const videoUrl2 = 'https://res.cloudinary.com/dixrdohp4/video/upload/v1708432754/videolight_zcf551.mp4';


  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  const handleDarkModeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
    // Reload the page
    window.location.reload();
  };



  return (
    <ThemeProvider theme="system" attribute="class">
      <main className={`relative flex  h-screen flex-col items-center ${theme}`}>
        
      <iframe className="absolute z-50" width="560" height="315" src="https://www.youtube.com/embed/TtIcgRJsyPg?si=Zf3C5tQeJE2OwUdB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <video
          autoPlay
          loop
          muted
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          className="absolute"
        >
          {/* {theme === "light" ? (
          ) : ( */}
          <source src={videoUrl} type="video/mp4" />
            {/* <source src={videoUrl2} type="video/mp4" /> */}
          {/* )}        */}

           {console.log (theme === "light" ? (videoUrl):(videoUrl2))} 
           {console.log("🚀 ~ Home ~ theme:", theme)}
        
        </video>

        <div className="absolute h-full overflow-scroll w-full">
          <div data-aos="fade-top" className="z-10 fixed w-full top-0">
            <NavBar
              setIsDarkMode={setIsDarkMode}
              isDarkMode={isDarkMode}
              // toggleDarkMode={() => setIsDarkMode((prevMode) => !prevMode)}
              toggleDarkMode={handleDarkModeToggle}
            />
          </div>
          <div data-aos="fade-bottom" className="w-full">
            <Hero />

          </div>
        </div>
      </main>
    </ThemeProvider>

  );
}
