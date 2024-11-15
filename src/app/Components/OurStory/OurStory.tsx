"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useParallax } from "react-scroll-parallax";
import { ourStoryData } from "./data";

const OurStory = () => {
  const [forceUpdate, setForceUpdate] = useState(false);
  const parallax = useParallax({
    speed: -15,
  });

  // Bit janky, but parallax doesn't work on first load, so forces update
  useEffect(() => {
    setTimeout(() => setForceUpdate((prev) => !prev), 1);
  }, []);

  return (
    <div
      className={`relative -top-px flex text-text-light flex-col items-center py-10 md:py-20 px-10 md:flex-row md:justify-center ${
        forceUpdate ? "update" : ""
      }`}
    >
      <img
        className="absolute h-full w-screen inset-0 z-[-10] md:h-[180%] md:-top-[35vh]"
        ref={parallax.ref as React.RefObject<HTMLImageElement>}
        src={ourStoryData.bg}
        alt="Background"
      />
      <div className="bg-[#0008] absolute h-[150vh] h-min:top-[0] h-min:h-[200vh] overflow-hidden w-screen md:-top-[35vh] inset-0 z-[-5]" />
      <div className="z-10 text-center flex flex-col px-8 md:basis-1/2">
        <p className="pt-12">{ourStoryData.title}</p>
        <h2 className="font-semibold text-3xl py-6 tracking-widest h-min:">
          {ourStoryData.header}
        </h2>
        <p className="leading-loose tracking-wide">{ourStoryData.body}</p>
        <Link
          className="mt-10 mb-12 text-link underline underline-offset-2 tracking-wider hover:text-white hover:scale-110 duration-500"
          href={ourStoryData.href}
        >
          {ourStoryData.linkText}
        </Link>
      </div>
      <div className="relative w-4/5 h-[45vw] md:basis-1/2 md:h-[35vw]">
        <img
          className="absolute top-0 left-0 w-[70%] h-4/5 rounded-3xl"
          src={ourStoryData.imgs[0].src}
          alt="Image 1"
        />
        <img
          className="absolute bottom-0 right-0 w-[70%] h-4/5 rounded-3xl"
          src={ourStoryData.imgs[1].src}
          alt="Image 2"
        />
      </div>
    </div>
  );
};

export default OurStory;
