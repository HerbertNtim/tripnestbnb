import ReservationSidebar from '@/components/ReservationSidebar'
import Image from 'next/image'
import React from 'react'

const PropertyDetails = () => {
  return (
    <main className='max-w-[1500px] mx-auto px-6 pb-6'>
      <div className='w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative'>
        <Image fill src={'/beach_1.jpg'} alt='Beach' className='object-cover w-full h-full' />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
        <div className='col-span-3 py-6 pr-6'>
          <h1 className='mb-4 text-4xl'>Property Name</h1>

          <span className='mb-6 block text-lg text-gray-600'>
            4 guest - 2 bedrooms - 1 washroom
          </span>

          <hr />

          <div className='py-6 flex items-center space-x-4'>
            <Image src={'/profile_pic_1.jpg'} alt='owner' width={50} height={50} className='rounded-full' />

            <hr />
            <p><strong>John Doe</strong> is your host.</p>

          </div>
          <hr />
          <p className='mt-6 text-md'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum odit facilis laudantium repellat. Maiores minima eligendi nisi consectetur quidem a accusamus incidunt vel necessitatibus, commodi asperiores. Vero dolores tenetur rem?</p>
        </div>
        
        <ReservationSidebar />
      </div>
    </main>
  )
}

export default PropertyDetails
