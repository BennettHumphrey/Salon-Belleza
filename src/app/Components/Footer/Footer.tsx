import React from 'react'
import { footerData } from './data'

const Footer = () => {
  return (
    <div className='bg-bg-dark py-20 px-8 flex flex-col md:flex-row md:gap-[5vw] items-center'>
        <div>
            <h2 className='text-6xl font-bold'>LOGO</h2>
            <h2 className='text-3xl font-semibold'>Salon Belleza</h2>
            <p className='pt-4 pb-10 max-w-[300px]'>{footerData.body}</p>
        </div>
        <div className='flex flex-col gap-4 justify-center'>
            <h3 className='font-semibold text-2xl pt-3 pb-10'>{footerData.header}</h3>
            {footerData.contactInfo.map((footerSection, index) => (
              <div className='flex justify-start items-center' key={index}>
                <div className='pr-4'>{footerSection.icon}</div>
                <p>{footerSection.text}</p>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Footer