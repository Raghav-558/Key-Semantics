import React from 'react'

const Description = ({ text, myClass }) => {
  return (
    <p className={`leading-7 max-sm:text-sm ${myClass}`}>
      {text}
    </p>
  )
}

export default Description
