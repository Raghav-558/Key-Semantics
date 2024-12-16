import React from 'react'
import SubHeading from './SubHeading'
import Description from './Description'

const Footer = () => {
  return (
      <div className='bg-footer bg-cover bg-center bg-no-repeat py-24'>
          <div className='max-w-[1232px] mx-auto px-4'>
              <SubHeading text="How does KeySemantics work?" myClass="text-dark-blue text-center max-md:text-2xl max-[520px]:max-w-[320px] mx-auto text-white" />
              <Description text="Request a demo for your team and let us show you how KeySemantics can help your company" myClass="text-white text-center pt-2"/>
          </div>
    </div>
  )
}

export default Footer