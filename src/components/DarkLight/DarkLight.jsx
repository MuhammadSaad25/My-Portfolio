import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const DarkLight = ({ isDarkMode, toggleDarkMode }) => {
  console.log(isDarkMode);

  return (
    <>
      <button className="text-2xl" onClick={toggleDarkMode}>
        {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
      </button>
    </>
  );
};

export default DarkLight;
