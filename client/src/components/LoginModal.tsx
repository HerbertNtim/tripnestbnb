"use client"

import React from 'react'
import Modal from '@/components/Modal'
import useLoginModal from '@/utils/LoginStore'

const LoginModal = () => {
  const { isOpen, close } = useLoginModal()
  const content = (
    <h2>Welcome Back</h2>
  )

  return (
    <Modal label='Log In' isOpen={isOpen} close={close} content={content} />
  )
}

export default LoginModal
