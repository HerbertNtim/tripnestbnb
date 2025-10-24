import ContactButton from '@/components/ContactButton'
import Properties from '@/components/Properties'
import Image from 'next/image'
import React from 'react'

const LandlordPage = () => {
  return (
    <main className='max-w-[1500px] mx-auto px-6 pb-6'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <aside className='flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl'>
          <Image src={'/profile_pic_1.jpg'} alt='landlord name' width={200} height={200} className='rounded-full' />

          <h1 className='mt-4 text-2xl'>Landlord Name</h1>

          <ContactButton />
        </aside>

        <div className='col-span-1 md:col-span-3 pl-0 md:pl-6'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <Properties />
          </div>
        </div>
      </div>
    </main>
  )
}

export default LandlordPage
