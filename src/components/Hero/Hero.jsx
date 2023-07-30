import React from "react";
import Images from "./Images";
import Content from "./Content";

const Hero = ({ timeline, ease }) => {
  return (
    <div className="main_hero flex  lg:flex-row flex-col items-center justify-between w-[100%] lg:h-[91.5vh] h-auto">
      <Content timeline={timeline} />
      {/* <Images timeline={timeline} ease={ease} /> */}
    </div>
  );
};

export default Hero;
