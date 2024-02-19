'use client'
import Link from 'next/link'
import Image from 'next/image'
import logoLight from '@/img/logo/saadlogolight.png'
import logoDark from '@/img/logo/saadlogodark.png'
import Sidebar from '../SideBar/SideBar'
import DarkLight from '../DarkLight/DarkLight'
import React, { useRef, useEffect } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode, timeline, ease }) => {
  return (
    <nav
      className={`relative w-full flex items-center justify-between py-4 px-6 sm:px-10  shadow-lg shadow-sky-400 ${
        isDarkMode ? 'dark' : 'light'
      }`}
    >
      {/* Left side with logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={isDarkMode ? logoLight : logoDark}
            alt="logo"
            title="Logo"
            className="h-10 w-auto sm:h-12 transition-transform hover:scale-110"
          />{' '}
        </Link>
      </div>

      {/* Right side with navigation links */}
      <ul className="hidden sm:flex items-center space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
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
  )
}

export default Navbar
