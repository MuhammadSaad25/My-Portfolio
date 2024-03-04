'use client'
import React, { useRef, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Content = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <div>
      <div
        data-aos="fade-right"
        className="flex flex-col  justify-center gap-5  md:[90vh] h-auto   lg:w-[50vw] w-[90vw] lg:p-11 p-3"
      >
        <h1 className="flex-col gap-2 md:text-5xl text-2xl font-bold">
          <div>Crafting Digital Experiences with Next.js</div>
          <div>Welcome to my portfolio! I m Muhammad Saad,</div>
        </h1>
        <p className="text-[15px] md:w-[80%] w-[100%]">
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
        <button className="w-[150px] p-4  text[15px] bg-sky-400 rounded-xl text-center">
          Explore
        </button>
      </div>
    </div>
  )
}

export default Content
