"use client";

import React, { FC } from "react";
import { pricingData } from "../data";
import { useParallax } from "react-scroll-parallax";
import Link from "next/link";

type PricingSlug = keyof typeof pricingData;

type Props = {
  params: { slug: PricingSlug }; // Ensure slug is a valid key in pricingData
};

const page: FC<Props> = ({ params }) => {
  const data = pricingData[params.slug];
  const paths = Object.keys(pricingData);

  const parallax = useParallax({
    speed: -25,
  });

  //   [#444f36cc]

  return (
    <div className="relative">
      <div className="w-full h-[25vh] md:h-[25vw] flex items-center justify-center relative">
        <img
          ref={parallax.ref as React.RefObject<HTMLImageElement>}
          src="/imgs/haircut-2.jpg"
          className="h-[180%] -top-[150%] lg:-top-[100%] w-full absolute -z-20"
        />
        <div className="h-[full] w-full absolute bg-[#444f36cc] inset-0 -z-10" />
        <h1 className="text-2xl font-bold tracking-widest">
          OUR HAIR SERVICES
        </h1>
      </div>
      <div className="bg-bg-light text-text-dark">
        <div className="flex flex-wrap gap-5 justify-around items-center md:justify-center py-6 px-4 lg:max-w-[70vw] m-auto">
          {paths.map((path, index) => (
            <div key={index} className="basis-[40%] md:basis-[20%] flex justify-center items-center">
              <Link
                href={path}
                className="w-[120px] text-center bg-nav-line p-3 text-text-light text-sm rounded-lg"
                key={index}
              >
                {path.toUpperCase()}
              </Link>
            </div>
          ))}
        </div>
        <div className="px-8 lg:max-w-[75vw] m-auto">
          <h2 className="text-3xl font-bold">{data.header}</h2>
          <p className="text-lg font-thin pt-4 pb-14">
            {data.headerDescription}
          </p>
          <div className="flex flex-col gap-6">
            {data.prices.map((item, index) => (
              <div key={index} className="flex flex-col justify-between">
              <div className="flex items-center w-full">
                <p className="font-bold text-xl">{item.title}</p>
                <div className="flex-grow mx-2 h-[12px] border-b border-b-link" />
                <p className="text-link">From ${item.price}</p>
              </div>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
            ))}
          </div>
          <button className="pb-[500px]">BOOK ONLINE</button>
        </div>
      </div>
    </div>
  );
};

export default page;
