import React from 'react'
import CustomButton from './CustomButton'

const Header = () => {
  return (
    <div className='pt-[47px] max-md:pt-8'>
      <div className='max-w-[1232px] mx-auto px-4'>
        <div className='flex items-center justify-between'>
          <img
            src='./assets/images/page-logo.webp'
            alt='page-logo'
            className='w-[248px] h-[40px] cursor-pointer max-md:w-[200px] max-md:h-[35px] max-sm:w-[180px] max-sm:h-[33px]'
          />
          <CustomButton buttonText='Request a demo' myClass="hover:bg-dark-blue hover:text-white transtition-all duration-300 px-[14.5px] py-[11.2px] text-dark-blue border border-dark-blue font-normal text-sm leading-5 max-md:px-3 max-md:py-2" />
        </div>
      </div>
    </div>
  )
}

export default Header
