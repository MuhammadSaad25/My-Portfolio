"use client";
import React, { useRef, useEffect } from "react";

const Images = ({ timeline, ease }) => {
  let img1 = useRef(null);
  let img2 = useRef(null);
  let img3 = useRef(null);

  useEffect(() => {
    timeline
      .from(
        img1,
        1.2,
        {
          y: 200,
          ease: ease,
          opacity: 0,
        },
        "-=1"
      )
      .from(
        img1,
        2,
        {
          scale: 1.6,
          ease: ease,
        },
        "-=1.2"
      );
    timeline
      .from(
        img2,
        1.2,
        {
          y: 200,
          ease: ease,
          opacity: 0,
        },
        "-=1"
      )
      .from(
        img2,
        2,
        {
          scale: 1.6,
          ease: ease,
        },
        "-=1"
      );
    timeline
      .from(
        img3,
        1.2,
        {
          y: 200,
          ease: ease,
          opacity: 0,
        },
        "-=1"
      )
      .from(
        img3,
        2,
        {
          scale: 1.6,
          ease: ease,
        },
        "-=1"
      );
  });

  return (
    <div>
      <div className="flex md:h-[90vh] h-[50vh] lg:w-[50vw] w-[90vw]  lg:p-11 p-3 relative">
        <div
          className="hero_box1  border border-gray-500  w-full"
          ref={(el) => (img1 = el)}
        ></div>
        {/* <div
          className="hero_box2 absolute top-[380px] right-[50px]  border border-gray-500 2xl:w-[350px] w-[250px] 2xl:h-[450px] h-[350px]"
          ref={(el) => (img2 = el)}
        ></div>
        <div
          className="hero_box3 absolute top-[300px] lg:left-[0px] left-[-100px] border border-gray-500 xl:w-[350px] w-[250px] xl:h-[400px] h-[300px]"
          ref={(el) => (img3 = el)}
        ></div> */}
      </div>
    </div>
  );
};

export default Images;
