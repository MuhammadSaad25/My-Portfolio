"use client";
import React, { useState } from "react";

const Sidebar = ({ isDarkMode }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <button
        className={`sm:hidden  w-8 h-8 m-4 text-2xl rounded-md   flex items-center justify-center ${
          showSidebar ? "hidden" : "block"
        }`}
        onClick={handleToggleSidebar}
      >
        {showSidebar ? "X" : "☰"}
      </button>
      <div
        className={`flex sm:hidden fixed top-0 right-0 h-screen w-full  transition-transform duration-300 transform ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        } , ${isDarkMode ? "dark" : "light"}`}
      >
        <button
          className="w-8 h-8 m-4 text-2xl rounded-md   sm:hidden  flex items-center justify-center"
          onClick={handleToggleSidebar}
        >
          {showSidebar ? "X" : "☰"}
        </button>
        {/* Add your sidebar content here */}
      </div>
    </>
  );
};

export default Sidebar;
