"use client"

import React, { FC } from 'react'
import { useParallax } from 'react-scroll-parallax';

type Props = {
    src: string,
    header: string
}

const SubPageHeader:FC<Props> = ({
    src, header
}) => {

    const parallax = useParallax({
        speed: -25,
      });


  return (
    <div>
        <div className="w-full h-[25vh] md:h-[25vw] flex items-center justify-center relative">
        <img
          ref={parallax.ref as React.RefObject<HTMLImageElement>}
          src={src}
          className="h-[180%] -top-[150%] lg:-top-[100%] w-full absolute -z-20"
        />
        <div className="h-[full] w-full absolute bg-[#444f36cc] inset-0 -z-10" />
        <h1 className="text-2xl font-bold tracking-widest">
          {header}
        </h1>
      </div>
    </div>
  )
}

export default SubPageHeader