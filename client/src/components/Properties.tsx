import Image from 'next/image'
import React from 'react'

const Properties = () => {
  return (
    <>
      <PropertiesItem />
      <PropertiesItem />
      <PropertiesItem />
      <PropertiesItem />
      <PropertiesItem />
    </>
  )
}

export default Properties

const PropertiesItem = () => {
  return (
    <div className='cursor-pointer'>
      <div className='relative overflow-hidden aspect-square rounded-xl'>
        <Image fill src={'/beach_1.jpg'} alt='Beach' sizes='(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px' className='hover:scale-110 object-cover transition w-full h-full' />
      </div>

      <div className='mt-2'>
        <p className='text-lg font-bold'>Property Name</p>
      </div>

      <div className='mt-2'>
        <p className='text-sm text-gray-500'>$200 per night</p>
      </div>
    </div>
  )
}
