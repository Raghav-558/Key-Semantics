import React from 'react'
import Lottie from 'react-lottie-player'
import SubHeading from '../common/SubHeading'
import { KEY_SEMANTICS_LIST } from '../utils/helper'

const KeyWork = () => {
  return (
    <div className='pt-24 max-lg:pt-[60px]'>
      <div className='pb-14 max-lg:pb-8'>
        <SubHeading
          text='How does KeySemantics work?'
          myClass='text-center max-md:text-2xl max-[520px]:max-w-[320px] mx-auto text-dark-blue'
        />
      </div>
      <div className='max-w-[1026px] mx-auto justify-center max-lg:gap-16 max-md:gap-12 max-sm:gap-8 flex flex-wrap gap-24'>
        {KEY_SEMANTICS_LIST.map((obj, i) => (
          <div className='flex flex-col max-w-[278px]' key={i}>
            <Lottie
              className='w-full max-w-[278px] '
              loop
              animationData={obj.lottie}
              play
            />
            <p className='text-center mt-6 text-dark-blue leading-7 text-base'>
              {obj.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default KeyWork
