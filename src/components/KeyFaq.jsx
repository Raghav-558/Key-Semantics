import React, { useState, useRef } from 'react'
import SubHeading from '../common/SubHeading'
import { KEY_ACCORDION_LIST, KEY_LIST } from '../utils/helper'
import { ArrowIcon } from '../utils/icons'
import CustomButton from '../common/CustomButton'

const AccordionItem = ({ handleToggle, active, obj, index }) => {
  const contentEl = useRef()
  const {
    title,
    firstDescription,
    secondDescription,
    thirdDescription,
    imageOne,
    altOne,
    imageTwo,
    altTwo
  } = obj

  return (
    <div className='overflow-hidden border-t border-b border-gray py-4 max-sm:py-3 max-lg:max-w-[700px] mx-auto'>
      <div
        role='button'
        aria-expanded={active === index}
        aria-controls={`content-${title}`}
        className={`flex items-center cursor-pointer justify-between ${
          active === title ? 'active' : ''
        }`}
        onClick={() => handleToggle(index)}
      >
        <p className='font-medium text-lg max-sm:text-base leading-7 text-dark-blue'>
          {title}
        </p>
        <div
          className={`transition-transform duration-500 ${
            active === index ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <ArrowIcon myClass='max-sm:h-[10px] h-[13px]' />
        </div>
      </div>
      <div
        title={`content-${title}`}
        ref={contentEl}
        className={`rc-collapse ${active === index ? 'show' : ''}`}
        style={{
          height:
            active === index ? `${contentEl.current.scrollHeight}px` : '0px',
          transition: 'height 0.3s ease-out'
        }}
      >
        <div className='pt-4 max-sm:pt-2 pr-4 text-dark-blue'>
          {firstDescription}
        </div>
        <div className='pr-4 pt-2 pb-4 text-dark-blue'>{secondDescription}</div>
        <div className='flex items-center gap-4'>
          <img
            src={imageOne}
            alt={altOne}
            className='h-[150px] w-1/2 rounded-lg object-cover max-lg:h-32 max-sm:h-[88px]'
          />
          <img
            src={imageTwo}
            alt={altTwo}
            className='h-[150px] w-1/2 rounded-lg object-cover max-lg:h-32 max-sm:h-[88px]'
          />
        </div>
        <div className='pr-4 pt-4 text-dark-blue'>{thirdDescription}</div>
      </div>
    </div>
  )
}

const KeyFaq = () => {
  const [active, setActive] = useState(null)

  const handleToggle = index => {
    setActive(prev => (prev === index ? null : index))
  }

  return (
    <div className='bg-light-gray pt-[82px] max-lg:pt-[60px] pb-[74px] max-lg:pb-[60px] max-md:pb-0'>
      <div className='max-w-[1232px] mx-auto px-4'>
        <div className='flex flex-wrap -mx-3'>
          <div className='w-1/2 max-md:w-full max-md:flex max-md:justify-center max-lg:px-3'>
            <img
              src='/assets/images/key-girl.webp'
              alt='key-girl'
              className='h-[337px] max-sm:h-60 object-cover rounded-md max-md:mx-auto sticky top-0'
            />
          </div>
          <div className='w-1/2 max-md:w-full max-md:pt-8 max-lg:pl-5 lg:pl-9 max-lg:px-3'>
            <SubHeading
              text='Key Q&A'
              myClass='text-dark-blue max-md:text-center'
            />
            <div className='pb-4'>
              {KEY_LIST.map((obj, i) => (
                <ul key={i} className='pt-2 max-md:pt-2'>
                  <li className='ml-6 list-disc text-dark-blue font-normal'>
                    {obj}
                  </li>
                </ul>
              ))}
            </div>
            {KEY_ACCORDION_LIST.map((obj, index) => (
              <AccordionItem
                key={index}
                active={active}
                handleToggle={handleToggle}
                obj={obj}
                index={index}
              />
            ))}
            <CustomButton
              buttonText='Get a demo'
              myClass='text-sm leading-5 font-normal text-dark-blue py-3 px-4 border border-dark-blue mt-6 hover:bg-dark-blue hover:text-white transition-all duration-300'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default KeyFaq
