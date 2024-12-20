import React from "react";
import { footerData } from "./data";

const Footer = () => {
  return (
    <div>
      <div className="bg-bg-dark text-text-light pt-20 px-8 flex flex-col md:flex-row md:gap-[5vw] items-center">
        <div>
          <h2 className="text-6xl font-bold">LOGO</h2>
          <h2 className="text-3xl font-semibold">Salon Belleza</h2>
          <p className="pt-4 pb-10 max-w-[300px]">{footerData.body}</p>
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <h3 className="font-semibold text-2xl pt-3 pb-10">
            {footerData.header}
          </h3>
          {footerData.contactInfo.map((footerSection, index) => (
            <div className="flex justify-start items-center group duration-500 hover:cursor-pointer" key={index}>
              <div className="pr-4 fill-text-light group-hover:fill-link duration-500 group-hover:scale-150">{footerSection.icon}</div>
              <p className="group-hover:text-link duration-500">{footerSection.text}</p>
            </div>
          ))}
        </div>
        </div>
          <div className="h-full w-screen bg-bg-dark flex justify-center pt-20 pb-10">
            <a
              target="_blank"
              href="https://bennetthumphrey.com"
              className="md:text-xl text-menu hover:text-accent hover:scale-105 hover:text-orange-500 duration-500 hover:cursor-pointer"
            >
              Site by BennettHumphrey.com
            </a>
          </div>
    </div>
  );
};

export default Footer;
