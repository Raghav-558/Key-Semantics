import React from 'react'
import Header from '../common/Header'
import CustomButton from '../common/CustomButton'

const Hero = () => {
  return (
    <div className='bg-hero bg-cover bg-center bg-no-repeat bg-light-gray'>
      <Header />
      <div className='max-w-[1232px] mx-auto px-4'>
        <div className='pt-[198px] pb-[287px] max-lg:py-36 max-md:py-[60px]'>
          <h1 className='text-custom-64 leading-[72px] max-md:text-5xl max-sm:text-3xl max-sm:max-w-[300px] font-bold tracking-[-1%] text-dark-blue max-w-[640px] mx-auto text-center'>
            AI-Powered Search as a Service
          </h1>
          <p className='font-medium text-2xl max-md:text-xl max-sm:text-base leading-8 tracking-[-1%] text-dark-blue text-center pt-10 max-md:pt-5 max-sm:pt-[14px]'>
            Unlock your content with KeySemantics.
          </p>
          <div className='flex justify-center mt-12 max-md:mt-6'>
            <CustomButton
              buttonText='Get started'
              myClass='hover:bg-white hover:text-dark-blue hover:border-dark-blue transtition-all duration-300 px-8 py-5 bg-dark-blue text-white text-base font-medium border border-transparent max-md:px-5 max-lg:py-3'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
