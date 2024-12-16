import React from 'react'
import CustomCard from '../common/CustomCard'
import { DATA_SECURITY_LIST } from '../utils/helper'

const DataSecurity = () => {
  return (
    <CustomCard
      myClass='flex-row-reverse pb-[90px] max-lg:pb-0 max-md:pb-[60px]'
      myCustom='lg:pl-9'
      text='Data Security and Hosting'
      myImage='/assets/images/data-security.webp'
      myList={DATA_SECURITY_LIST}
    />
  )
}

export default DataSecurity
