import Link from "next/link";
import Image from "next/image";
import logo from "@/img/logo/saadlogo.png"; // Make sure to replace this with the actual path to your logo image
import Sidebar from "../SideBar/SideBar";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 sm:px-10 bg-[#171717] shadow-lg shadow-red-800">
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

      {/* Sidebar  */}

      <Sidebar />

      {/* Right side with navigation links */}
      <ul className="hidden sm:flex items-center space-x-4">
        <li>
          <Link href="/" className="text-white">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white">
            About
          </Link>
        </li>
        <li>
          <Link href="/portfolio" className="text-white">
            Portfolio
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-white">
            Contact
          </Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>

      {/* Mobile menu (visible on small screens) */}
      <div className="sm:hidden flex items-center space-x-4">
        {/* Implement mobile menu icon and functionality (e.g., using a burger menu) */}
      </div>
    </nav>
  );
};

export default Navbar;
