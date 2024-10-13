import React from 'react'
import { contactInfoData } from './data'

const ContactInfo = () => {
  return (
    <div className='text-text-dark px-5 py-8'>
        <h2 className='fond-bold text-3xl py-6'>
            {contactInfoData.header}
        </h2>
        <h3 className='pb-4'>{contactInfoData.description}</h3>
        <div className='flex flex-col gap-4'>
            {contactInfoData.info.map((info, index) => (
                <div className='flex gap-4' key={index}>
                    <div className='h-6 w-6'>{info.icon}</div>
                    <p>{info.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ContactInfo