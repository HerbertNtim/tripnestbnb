'use client'

import { useState } from 'react'
import { FiUser } from 'react-icons/fi'
import { SlMenu } from 'react-icons/sl'

const UserNav = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className='p-2 relative inline-block border border-gray-300 rounded-full'>
      <button onClick={() => setIsOpen(!isOpen)} className='flex items-center p-1 gap-1 cursor-pointer'>
        <SlMenu />
        <FiUser />
      </button>

      {isOpen && (
        <div className='w-[220px] absolute top-[60px] right-0 bg-white rounded-lg border shadow-md flex flex-col'>
          <MenuLink label='Log In' onclick={() => { }} />
          <MenuLink label='Sign Up' onclick={() => { }} />
        </div>
      )}
    </div>
  )
}

export default UserNav


interface MenuLinkProps {
  label: string;
  onclick: () => void;
}

const MenuLink = ({ label, onclick }: MenuLinkProps) => {
  return (
    <button onClick={onclick} className='w-full text-left px-5 py-3 cursor-pointer hover:bg-gray-100 transition'>
      <span className='text-lg font-semibold'>{label}</span>
    </button>
  )
}
