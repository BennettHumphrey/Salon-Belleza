import React, { useEffect, useState } from "react";
import { heroData } from "./data";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Hero = () => {
  const nav = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log('IsLoaded: ', isLoaded)
  }, [isLoaded])

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-bg-dark pb-12 flex flex-col md:flex-row-reverse md:justify-around md:px-[10%] md:pt-16">
      <div className="pt-10">
        <div className="relative w-[56vw] h-[83vw] max-w-[52.8vh] max-h-[80vh] m-auto overflow-hidden rounded-t-full border-2 border-text-accent">
          
          <img
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            style={{opacity: isLoaded ? 0 : 100}}
            alt="Placeholder"
            width={427}
            height={640}
            src={heroData.img.placeholder}
          />

          <img
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
            style={{opacity: isLoaded ? 100 : 0}}
            alt="Hair"
            width={427}
            height={640}
            src={heroData.img.src}
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
