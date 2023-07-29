import React, { useState } from "react";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-screen w-64 bg-gray-800 transition-transform duration-300 transform ${
        showSidebar ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        className="w-8 h-8 m-4 rounded-md bg-gray-700 text-white flex items-center justify-center"
        onClick={handleToggleSidebar}
      >
        {showSidebar ? "X" : "☰"}
      </button>
      {/* Add your sidebar content here */}
    </div>
  );
};

export default Sidebar;
