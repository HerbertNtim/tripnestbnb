import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='w-full fixed top-0 left-0 py-6 border-b bg-white z-10'>
      <div className='max-w-[1500px] mx-auto px-6'>
        <div className=' flex justify-between items-center'>
          <Link href={'/'} className='flex items-center gap-1'>
            <Image src={'/tripnest-log.png'} alt="Logo" width={40} height={38}/>
            <span className='text-airbnb font-black text-2xl font-heading'>tripnest</span>
          </Link>

          <div className='flex space-x-6'>
            Search Filters 
          </div>

          <div className='flex items-center space-x-6'>
            Add User Property
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
