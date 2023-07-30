"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/img/logo/saadlogo.png"; // Make sure to replace this with the actual path to your logo image
import Sidebar from "../SideBar/SideBar";
import DarkLight from "../DarkLight/DarkLight";
import React, { useRef, useEffect } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode, timeline, ease }) => {
  let logo1 = useRef(null);
  let menu_item1 = useRef(null);
  let menu_item2 = useRef(null);
  let menu_item3 = useRef(null);
  let menu_item4 = useRef(null);
  let menu_item5 = useRef(null);

  useEffect(() => {
    timeline.from(logo1, 1, {
      opacity: 0,
      y: "100",
    });
    timeline.from(
      [menu_item1, menu_item2, menu_item3, menu_item4, menu_item5],
      2,
      {
        opacity: 0,
        y: -200,
        stagger: {
          amount: 0.4,
        },
        ease: ease,
      }
    );
  });

  return (
    <nav className="relative w-full flex items-center justify-between py-4 px-6 sm:px-10  shadow-lg shadow-sky-400">
      {/* Left side with logo */}
      <div className="flex items-center" ref={(el) => (logo1 = el)}>
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            title="Logo"
            className="h-10 w-auto sm:h-12 transition-transform hover:scale-110"
          />{" "}
        </Link>
      </div>

      {/* Right side with navigation links */}
      <ul className="hidden sm:flex items-center space-x-4">
        <li ref={(el) => (menu_item1 = el)}>
          <Link href="/">Home</Link>
        </li>
        <li ref={(el) => (menu_item2 = el)}>
          <Link href="/about">About</Link>
        </li>
        <li ref={(el) => (menu_item3 = el)}>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li ref={(el) => (menu_item4 = el)}>
          <Link href="/contact">Contact</Link>
        </li>
        <li ref={(el) => (menu_item5 = el)}>
          <DarkLight
            isDarkMode={isDarkMode}
            toggleDarkMode={() => setIsDarkMode((prevMode) => !prevMode)}
          />
        </li>
        {/* Add more navigation links as needed */}
      </ul>

      <div className="flex sm:hidden items-center">
        {/* Sidebar  */}

        <Sidebar isDarkMode={isDarkMode} />

        <DarkLight
          isDarkMode={isDarkMode}
          toggleDarkMode={() => setIsDarkMode((prevMode) => !prevMode)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
