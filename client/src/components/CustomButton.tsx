import React from 'react'

interface CustomButtonProps {
  label: string;
  onClick: () => void;
  className?: string
}

const CustomButton = ({label, onClick, className}: CustomButtonProps) => {
  return (
    <button className={`${className} py-4 bg-airbnb hover:bg-airbnb-dark text-white rounded-xl transition text-center cursor-pointer`} onClick={onClick}>
      <span className='font-semibold text-xl'>{label}</span>
    </button>
  )
}

export default CustomButton
