import React from 'react'
import { HEADLESS_LIST } from '../utils/helper'
import CustomCard from '../common/CustomCard'

const HeadlessSearch = () => {
  return (
    <CustomCard
      text='Headless federated search'
      myImage='/assets/images/headless-search.webp'
      myList={HEADLESS_LIST}
    />
  )
}

export default HeadlessSearch

