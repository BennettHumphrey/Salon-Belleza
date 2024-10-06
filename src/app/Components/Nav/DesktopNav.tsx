import { navOptions } from '@/app/Components/Nav/navOptions'
import Link from 'next/link'
import React from 'react'

const DesktopNav = () => {
  return (
    <div className='flex h-20 justify-between items-center px-8'>
      <h1 className='text-center'>LOGO</h1>
      <div className='flex gap-10 tracking-widest text-xl font-sans'>
        {navOptions.map((menuOption, index) => (
          <div className='group ' key={index}>
            <Link className='' href={menuOption.path}>
              {menuOption.title}
            </Link>
            <div className='h-px w-0 group-hover:w-full duration-500 bg-white'/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DesktopNav