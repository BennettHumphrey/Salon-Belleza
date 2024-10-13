import React from "react";
import { heroData } from "./data";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-bg-dark pb-12 flex flex-col md:flex-row-reverse md:justify-around md:px-[10%] md:pt-16">
      <div className="p-10 ">
        <img
          className="overflow-hidden rounded-t-full border-2 border-text-accent"
          src={heroData.img.src}
        />
      </div>
      <div className=" flex flex-col px-10">
        <h1 className="font-[750] text-text-light text-4xl leading-loose text-center pb-5 m-auto md:w-[300px] lg:w-[400px]">
          {heroData.header}
        </h1>
        <p className="text-center text-text-light font-semibold text-xl m-auto md:w-[300px]">
          {heroData.body}
        </p>
        <motion.button
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
          className="p-6 bg-bg-light border-2 border-orange-100 rounded-lg text-text-dark text-xl mt-6 md:w-[250px] m-auto"
        >
          {heroData.button}
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
