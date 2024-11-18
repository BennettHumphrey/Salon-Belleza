"use client"

import React from "react";
import SubPageHeader from "../Components/SubPageHeader";
import { useParallax } from "react-scroll-parallax";
import ContactForm from "./Components/ContactForm";
import ContactInfo from "./Components/ContactInfo";
import Footer from "../Components/Footer/Footer";

const Contact = () => {

  // const parallaxSpeed = (parallax:boolean) => {
  //   if(parallax) return -25
  //   return 0
  // }

    const parallaxRef = useParallax({
        speed: -10,
        // speed: parallaxSpeed(parallax),

      });



  return (
    <div className="relative overflow-x-hidden">
      <div className="absolute inset-0 w-screen h-full bg-bg-light -z-40" />
      <SubPageHeader
        src="/imgs/haircut-2.webp"
        header="CONTACT US"
        parallax={false}
      />
      <div ref={parallaxRef.ref as React.RefObject<HTMLImageElement>} className="w-full h-[75vw] md:h-[35vw] relative -top-[8vw] lg:top-0">
        <div className="w-full h-full absolute inset-0 bg-[#fff2] z-10 top-[15vh]" />
        <img
          alt="Location on map"
          className="w-full h-full absolute inset-0 object-cover border-t border-t-white top-[15vh]"
          src="./imgs/map-invert.webp"
        />
        <div className="bg-bg-light w-full h-[20vh] lg:h-[10vh] relative top-[75vw]" />
      </div>
      <div className="bg-bg-light pt-20 z-20 relative" >
        <ContactForm  />
        <ContactInfo  />
      </div>
      <Footer  />
    </div>
  );
};

export default Contact;
