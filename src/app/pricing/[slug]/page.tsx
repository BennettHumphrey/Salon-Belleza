"use client";

import React, { FC, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { pricingData } from "../data";
import SubPageHeader from "@/app/Components/SubPageHeader";
import Footer from "@/app/Components/Footer/Footer";
import { AnimatePresence, motion } from "framer-motion";

type PricingSlug = keyof typeof pricingData.sections;

type Props = {
  params: { slug: PricingSlug };
};

const page: FC<Props> = ({ params }) => {
  const data = pricingData.sections[params.slug];
  const paths = Object.keys(pricingData.sections);
  const router = useRouter();
  const currentPath = usePathname();

  const [isExiting, setIsExiting] = useState(false);

  const navigateWithDelay = (path: string) => {
    if (`/pricing/${path}` != currentPath) {
      setIsExiting(true);
      setTimeout(() => {
        router.push(path, { scroll: false });
      }, 350);
    }
  };

  useEffect(() => {
    setIsExiting(false);
  }, [params.slug]);

  const priceVariants = {
    initial: { opacity: 0, x: "-100%" },
    animate: { opacity: 1, x: "0%" },
    exit: { opacity: 0, x: "100%" },
  };

  const textVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="relative">
      <SubPageHeader
        src={pricingData.headerImg}
        header={pricingData.generalHeaderText}
      />
      <div className="bg-bg-light text-text-dark">
        <div className="flex flex-wrap gap-5 justify-around items-center md:justify-center py-6 px-4 lg:max-w-[70vw] m-auto">
          {paths.map((path, index) => (
            <div
              key={index}
              className="basis-[40%] md:basis-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => navigateWithDelay(path)}
            >
              <div
                className="w-[120px] text-center  p-3 text-text-light text-sm rounded-lg"
                style={{
                  backgroundColor:
                    `/pricing/${path}` === currentPath ? "#597733" : "#4e5e41",
                }}
              >
                {path.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
        <div className="px-8 lg:max-w-[75vw] m-auto" key={params.slug}>
          <AnimatePresence mode="wait">
            {!isExiting && (
              <motion.div
                key={params.slug + "-text"}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={textVariants}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold">{data.header}</h2>
                <p className="text-lg font-thin pt-4 pb-14">
                  {data.headerDescription}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence mode="wait">
            {!isExiting && (
              <motion.div
                key={params.slug}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-col gap-6 pb-12"
              >
                {data.prices.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col justify-between"
                    variants={priceVariants}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                  >
                    <div className="flex items-center w-full">
                      <p className="font-bold text-xl">{item.title}</p>
                      <div className="flex-grow mx-2 h-[12px] border-b border-b-link" />
                      <p className="text-link">From ${item.price}</p>
                    </div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="w-full flex justify-center pb-16">
          <button className="m-auto text-center bg-link rounded-xl p-[9px] text-text-light">
            BOOK ONLINE
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
