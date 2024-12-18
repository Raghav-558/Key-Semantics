import React from 'react'
import SubHeading from './SubHeading'
import CustomButton from './CustomButton'

const CustomCard = ({ myClass, text, myImage, myList ,myCustom }) => {
  return (
    <div className='bg-light-gray py-[74px] max-lg:py-[60px] max-md:pb-0'>
      <div className='max-w-[1232px] mx-auto px-4'>
        <div className={`flex flex-wrap -mx-3 items-center ${myClass} `}>
          <div className={`w-1/2 max-md:w-full max-lg:px-3 ${myCustom}`}>
            <SubHeading
              text={text}
              myClass='max-lg:leading-9 max-md:text-center max-md:pb-2 max-sm:pb-0 text-dark-blue max-lg:text-2xl'
            />
            <ul className='list-disc pl-6'>
              {myList.map((obj, i) => (
                <li key={i} className='pt-2 font-normal text-dark-blue leading-7 text-base max-w-[552px] max-md:max-w-none '>
                  {obj}
                </li>
              ))}
            </ul>
            <CustomButton
              buttonText='Get a demo'
              myClass='py-3 px-4 border border-dark-blue text-dark-blue hover:text-white hover:bg-dark-blue reansition-all duration-300 mt-6 max-sm:mt-5 max-md:mx-auto'
            />
          </div>
          <div className='w-1/2 max-md:w-full max-md:pt-8 max-lg:px-3'>
            <img
              src={myImage}
              alt='key-semantics'
              className='h-[337px] max-md:mx-auto object-cover max-sm:h-60 rounded-lg'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomCard
