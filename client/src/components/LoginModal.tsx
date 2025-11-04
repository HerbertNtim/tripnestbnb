"use client"

import React from 'react'
import Modal from '@/components/Modal'
import useLoginModal from '@/utils/LoginStore'
import CustomButton from '@/components/CustomButton'

const LoginModal = () => {
  const { isOpen, close } = useLoginModal()
  const content = (
    <div className='flex flex-col space-y-4'>
      <h2 className='text-2xl font-bold'>Welcome Back</h2>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm text-gray-500 font-semibold mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={''}
            className="border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="user@example.com"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="text-sm text-gray-500 font-semibold mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={''}
            className="border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
            required
          />
        </div>

        <CustomButton label='Login' onClick={() => { }} />
      </form>
    </div>
  )

  return (
    <Modal label='Log In' isOpen={isOpen} close={close} content={content} />
  )
}

export default LoginModal
