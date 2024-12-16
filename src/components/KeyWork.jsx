import React from 'react'
import SubHeading from '../common/SubHeading'
import { KEY_LIST } from '../utils/helper'
import { div } from 'three/webgpu'

const KeyWork = () => {
  return (
    <div className='pt-24 max-lg:pt-[60px] '>
      <div className='max-w-[1058px] mx-auto px-4'>
        <SubHeading text="How does KeySemantics work?" myClass="text-dark-blue text-center max-md:text-2xl max-[520px]:max-w-[320px] mx-auto" />
        <div className='flex flex-wrap'>
          {KEY_LIST.map((obj, i) => (
            <div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default KeyWork
