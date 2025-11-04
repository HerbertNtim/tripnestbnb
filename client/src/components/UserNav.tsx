'use client'

import useLoginModal from '@/utils/LoginStore'
import { useState } from 'react'
import { FiUser } from 'react-icons/fi'
import { SlMenu } from 'react-icons/sl'

const UserNav = () => {
  const loginStore = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className='p-2 relative inline-block border border-gray-300 rounded-full'>
      <button onClick={() => setIsOpen(!isOpen)} className='flex items-center p-1 gap-1 cursor-pointer'>
        <SlMenu />
        <FiUser />
      </button>

      {isOpen && (
        <div className='w-[220px] absolute top-[60px] right-0 bg-white rounded-lg border shadow-md flex flex-col'>
          <MenuLink label='Log In' onClick={() => {loginStore.open()}} />
          <MenuLink label='Sign Up' onClick={() => { }} />
        </div>
      )}
    </div>
  )
}

export default UserNav


interface MenuLinkProps {
  label: string;
  onClick: () => void;
}

const MenuLink = ({ label, onClick }: MenuLinkProps) => {
  return (
    <button onClick={onClick} className='w-full text-left px-5 py-3 cursor-pointer hover:bg-gray-100 transition'>
      <span className='text-lg font-semibold'>{label}</span>
    </button>
  )
}
