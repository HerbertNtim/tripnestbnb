import Image from 'next/image'
import React from 'react'

const MyReservations = () => {
  return (
    <main className='max-w-[1500px] mx-auto px-6 pb-6'>
      <h1 className='my-6 mb-2 text-2xl'>My Reservation</h1>

      <div className='space-y-6'>
        <div className='p-5 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl'>
          <div className='col-span-1'>
            <div className='relative overflow-hidden aspect-square rounded-xl'>
              <Image src="/beach_1.jpg" alt='beach house' fill className='hover:scale-110 object-cover transition w-full h-full' />
            </div>
          </div>

          <div className='col-span-1 md:col-span-3 space-y-3'>
            <h2 className='mb-4 text-xl'>Property Name</h2>

            <p><strong>Check in date: </strong>14/11/2025</p>
            <p><strong>Check out date: </strong>16/11/2025</p>

            <p><strong>Number of Nights: </strong>2</p>
            <p><strong>Total price: </strong>$200</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MyReservations
