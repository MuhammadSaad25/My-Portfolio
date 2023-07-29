import React from "react";

const Content = () => {
  return (
    <div>
      <div className="flex flex-col  justify-center gap-5 h-[90vh] w-[50vw] p-11">
        <h1 className="flex-col gap-2 text-[50px] ">
          <div className="overflow-hidden ">
            Crafting Digital Experiences with Next.js
          </div>
          <div className="overflow-hidden ">
            Welcome to my portfolio! I m Muhammad Saad,
          </div>
        </h1>
        <p className="text-[15px] w-[80%]">
          a passionate front-end developer with a focus on creating seamless and
          captivating user experiences using Next.js. With a keen eye for design
          and a love for clean, efficient code, I aim to bring ideas to life
          through the power of web development. Whether its crafting
          pixel-perfect interfaces or building dynamic web applications, I
          thrive on pushing the boundaries of whats possible on the frontend.
          Join me on this journey as we explore the exciting world of Next.js
          and its potential to revolutionize the web. Let s create something
          extraordinary together!
        </p>
        <butto className="w-[150px] p-4  text[15px] bg-black rounded-xl text-center">
          Explore
        </butto>
      </div>
    </div>
  );
};

export default Content;
