import React from 'react'

const CustomButton = ({ buttonText, myClass }) => {
  return (
    <button
      className={`${myClass}  tracking-[-1%] rounded-[48px]  `}
    >
      {buttonText}
    </button>
  )
}

export default CustomButton
