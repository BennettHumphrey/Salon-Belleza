import Link from "next/link";
import React from "react";
import { beData } from "./data";

const Be = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap relative -top-px">
      {beData.beSections.map((section, index) => (
        <Link
          key={index}
          className={`odd:bg-bg-light group odd:text-text-dark border-4 border-bg-dark even:text-text-light even:bg-bg-dark py-20 px-10 text-center flex flex-col gap-2 md:basis-1/2 ${
            index === 2 && "md:order-4"
          } ${index === 3 && "md:order-3"}`}
          href={section.href}
        >
          <h2 className="text-4xl font-semibold font-serif text-text-accent">
            {section.be}
          </h2>
          <h3 className="text-2xl font-bold font-sans tracking-wide pb-4">
            {section.who}
          </h3>
          <p className="tracking-widest">{section.what}</p>
          <p className="underline underline-offset-2 w-3/5 m-auto font-semibold font-sans text-link pt-8 group-hover:scale-150 duration-500">
            {section.linkText}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Be;
