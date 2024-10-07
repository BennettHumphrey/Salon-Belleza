"use client";

import React, { FC } from "react";
import { pricingData } from "../data";
import Link from "next/link";
import SubPageHeader from "@/app/Components/SubPageHeader";

type PricingSlug = keyof typeof pricingData.sections;

type Props = {
  params: { slug: PricingSlug }; // Ensure slug is a valid key in pricingData
};

const page: FC<Props> = ({ params }) => {
  const data = pricingData.sections[params.slug];
  const paths = Object.keys(pricingData.sections);

  // const parallax = useParallax({
  //   speed: -25,
  // });


  return (
    <div className="relative">
      <SubPageHeader src={pricingData.headerImg} header={pricingData.generalHeaderText} />
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
