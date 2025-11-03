'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'

type ModalProps = {
  label: string;
  content: React.ReactElement;
  isOpen: boolean;
  close: () => void;
}

const Modal = ({label, content, isOpen, close}: ModalProps) => {
  const [showModal, setShowModal] = useState(isOpen)

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen])

  const handleClose = useCallback(() => {
    setShowModal(false)

    setTimeout(() => {
      close()
    }, 200)
  }, [close])

  return (
    <div className='flex items-center justify-center fixed inset-0 z-50 bg-black/60'>
      <div className='relative w-[90%] md:w-[80%] lg:w-[700px] my-6 mx-auto h-auto'>
        <div className={`translate duration-600 h-full ${showModal ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-10'}`}>
          <div className='w-full h-auto rounded-xl relative flex flex-col bg-white'>
            <header className='h-[60px] flex items-center justify-center p-6 rounded-t relative border-b border-gray-300'>
              <button onClick={handleClose} className='p-3 absolute left-3 hover:bg-gray-300 rounded-full  cursor-pointer'>
                <MdOutlineClose size={24} />
              </button>

              <h2 className='text-lg font-bold'>{label}</h2>
            </header>

            <section className='p-6'>
              {content}
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
