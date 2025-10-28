import React from 'react'

interface CustomButtonProps {
  label: string;
  onClick: () => void;
  className?: string
}

const CustomButton = ({label, onClick, className}: CustomButtonProps) => {
  return (
    <button className={`w-full py-4 bg-airbnb hover:bg-airbnb-dark text-white rounded-xl transition text-center cursor-pointer ${className}`} onClick={onClick}>
      <span className='font-semibold'>{label}</span>
    </button>
  )
}

export default CustomButton
