import React from 'react'
import Lottie from 'react-lottie-player'
import InfographyKey from '../lottie/infography-key.json'
import Mobile from '../lottie/mobile.json'

const KeyApi = () => {
  return (
    <div className='pb-[82px] max-lg:pb-[60px] max-md:pb-0 api'>
      <div className='max-w-[1232px] px-4 mx-auto'>
        <Lottie
          className='w-full max-md:hidden'
          loop
          animationData={InfographyKey}
          play
        />
        <Lottie
          className='h-[900px] md:hidden'
          loop
          animationData={Mobile}
          play
        />
      </div>
    </div>
  )
}

export default KeyApi
