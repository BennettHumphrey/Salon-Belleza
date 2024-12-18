"use client";

import React from "react";
import { ourTeamData } from "./data";
import { motion } from "framer-motion";

const OurTeam = () => {
  const teamVariants = {
    initial: { opacity: 0, y: "100%" },
    animate: { opacity: 1, y: "0%" },
    exit: { opacity: 0, y: "-100%" },
  };

  return (
    <div className="relative bg-bg-light text-text-dark">
      <h2 className="text-center text-4xl font-bold tracking-wider pb-5 pt-10">
        {ourTeamData.header}
      </h2>
        <motion.div className="flex flex-col gap-12 justify-center items-center md:flex-row md:flex-wrap md:items-start">
          {ourTeamData.team.map((member, index) => (
            <motion.div
              key={index}
              variants={teamVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="flex flex-col w-[80%] md:basis-1/3 lg:basis-[20%]"
            >
              <img src={member.img} alt={`Photo of ${member.name}`} className="shadow-lg rounded-md" />
              <h3 className="text-3xl font-bold pt-6 pb-4">{member.name}</h3>
              <h4 className="text-3xl underline pb-3">{member.role}</h4>
              <p className="">{member.description}</p>
              <div className="w-[95%] h-px bg-black m-auto mt-5" />
            </motion.div>
          ))}
        </motion.div>
    </div>
  );
};

export default OurTeam;
