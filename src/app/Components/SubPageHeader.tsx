"use client"

import React, { FC } from 'react'
import { useParallax } from 'react-scroll-parallax';

type Props = {
    src: string,
    header: string,
    parallax?: boolean
}

const SubPageHeader:FC<Props> = ({
    src, header, parallax=true
}) => {

  const parallaxSpeed = (parallax:boolean) => {
    if(parallax) return -25
    return 0
  }

    const parallaxRef = useParallax({
        // speed: -25,
        speed: parallaxSpeed(parallax),

      });


  return (
    <div>
        <div className="w-full h-[25vh] md:h-[25vw] flex items-center justify-center relative">
        <img
          ref={parallaxRef.ref as React.RefObject<HTMLImageElement>}
          src={src}
          className={`h-[180%] ${parallax ? "-top-[150%] lg:-top-[100%]" : "top-0"} w-full absolute -z-20`}
        />
        <div className="h-[200%] w-full absolute bg-[#444f36cc] inset-0 -z-10 overflow-hidden" />
        <h1 className="text-2xl font-bold tracking-widest">
          {header}
        </h1>
      </div>
    </div>
  )
}

export default SubPageHeader