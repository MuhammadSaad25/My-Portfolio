import Link from "next/link";
import Image from "next/image";
import logo from "@/img/logo/saadlogo.png"; // Make sure to replace this with the actual path to your logo image
import Sidebar from "../SideBar/SideBar";
import DarkLight from "../DarkLight/DarkLight";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <nav className="relative w-full flex items-center justify-between py-4 px-6 sm:px-10  shadow-lg shadow-red-800">
      {/* Left side with logo */}
      <div className="flex items-center">
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
  );
};

export default Navbar;
