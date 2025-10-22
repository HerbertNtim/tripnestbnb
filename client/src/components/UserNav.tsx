import React from 'react'
import { FiUser } from 'react-icons/fi'
import { SlMenu } from 'react-icons/sl'

const UserNav = () => {
  return (
    <div className='p-2 relative inline-block border border-gray-300 rounded-full'>
      <button className='flex items-center p-1 gap-1 cursor-pointer'>
        <SlMenu />
        <FiUser />
      </button>
    </div>
  )
}

export default UserNav
