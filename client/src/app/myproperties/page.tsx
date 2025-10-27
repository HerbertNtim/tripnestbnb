import Properties from '@/components/Properties'
import React from 'react'

const MyProperties = () => {
  return (
    <main className='max-w-[1500px] mx-auto px-6 pb-6'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <Properties />
      </div>
    </main>
  )
}

export default MyProperties
