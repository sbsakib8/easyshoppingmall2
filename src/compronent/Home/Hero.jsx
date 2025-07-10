import React from 'react'
import Topheader from '../header/Topheader'
import Navber from './Navber'
import Carousels from '@/src/helper/Hero/Carousel'

function Hero() {
  return (
    <div>
      <Topheader/>
     <Navber/>
     <Carousels/>
    </div>
  )
}

export default Hero