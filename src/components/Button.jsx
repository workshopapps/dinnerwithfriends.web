import React from 'react'

const Button = ({children, onClick, className}) => {
  return (
    <button onClick={onClick} className={`text-xs font-medium px-6 py-2 bg-[#1070FF] w-fit text-white rounded-[4px] ${className}`}>{children}</button>
  )
}

export default Button