"use client";

import React, { useEffect, useState } from "react";
import { ourStoryAboutData } from "./data";
import { useWindowSize } from "react-use";

const OurStoryAbout = () => {
  const { width } = useWindowSize();
  const [windowWidth, setWindowWidth] = useState(700);

  useEffect(() => {
    setWindowWidth(width);
  }, [width]);

  return (
    <div className="relative text-text-dark bg-bg-light pt-16 px-[12%] pb-14 overflow-x-hidden">
      <div className="top-20 w-[140%] absolute overflow-hidden">
        <h2 className="text-text-light text-5xl font-bold font-serif md:text-[14.3vw] opacity-40 relative z-20">
          OUR STORY
        </h2>
      </div>
      <div className="flex flex-col h-full relative md:flex-row">
        <div className="basis-1/2 flex flex-col justify-between pb-[20%]">
          <h3 className="text-4xl font-bold">{ourStoryAboutData.header}</h3>
          {windowWidth > 1100 && (
            <div className="w-full pt-[10%]">
              <img className="w-4/5 h-full rounded-3xl" src={ourStoryAboutData.img} />
            </div>
          )}
        </div>
        <div className="flex flex-col basis-1/2 z-30 relative">
          <h4 className="text-xl pt-6 pb-4">{ourStoryAboutData.summary}</h4>
          <p className="whitespace-pre-line">{ourStoryAboutData.body}</p>
        </div>
      </div>
    </div>
  );
};

export default OurStoryAbout;
