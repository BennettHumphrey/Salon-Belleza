import React, { useState } from "react";
import { heroData } from "./data";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Hero = () => {
  const nav = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="bg-bg-dark pb-12 flex flex-col md:flex-row-reverse md:justify-around md:px-[10%] md:pt-16">
      <div className="p-10">
        <div className="relative w-[427px] h-[640px] overflow-hidden rounded-t-full border-2 border-text-accent">
          
          <img
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? "opacity-0" : "opacity-100"
            }`}
            alt="Placeholder"
            src={heroData.img.placeholder}
          />

          <img
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            alt="Hair"
            width={427}
            height={640}
            src={heroData.img.src}
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      </div>
      <div className="flex flex-col px-10">
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
          onClick={() => nav.push("/contact")}
          className="p-6 bg-bg-light border-2 border-orange-100 rounded-lg text-text-dark text-xl mt-6 md:w-[250px] m-auto duration-500 hover:bg-link hover:text-text-light"
        >
          {heroData.button}
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
