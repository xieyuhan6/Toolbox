"use client"
// import { eggTime } from '@/constants'
import React from 'react'
import StopButton from './components/StopButton'
import Image from 'next/image'

const page = () => {
  

  return(
    <section className='flex relative flex-row'>
      <div>
        <StopButton/>
      </div>
    <div className='ml-auto'>
      <Image src="egg.jpg" alt='eggs'/>
      <p>source:https://www.egginfo.co.uk/recipes/how-boil-egg</p>
    </div>
    </section>
  )
}

export default page