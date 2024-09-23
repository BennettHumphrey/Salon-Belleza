import React from 'react'
import { IoMenu } from "react-icons/io5";

const MobileNav = () => {
  return (
    <div className='flex h-full w-full'>
      <div className='text-link h-full w-16 flex justify-center items-center'>
        <IoMenu className='h-8 w-8' />
      </div>
      <div className='w-full h-full flex justify-center items-center'>
        {/* <img src="" /> */}
        <h1 className=''>LOGO</h1>
      </div>
      <div className='w-16'/>
    </div>
  )
}

export default MobileNav