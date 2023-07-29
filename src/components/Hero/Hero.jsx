import React from "react";
import Images from "./Images";
import Content from "./Content";

const Hero = () => {
  return (
    <div className="main_hero flex flex-row items-center justify-between w-[100%] h-[90vh] ">
      <Content />
      <Images />
    </div>
  );
};

export default Hero;
