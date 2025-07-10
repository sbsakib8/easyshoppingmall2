import React from 'react'
import Topheader from '../header/Topheader'
import Navber from './Navber'
import Carousels from '@/src/helper/Hero/Carousel'
import Categories from './Categories'

function Hero() {
  return (
    <div>
      <Topheader/>
     <Navber/>
     <Carousels/>
     <Categories/>
    </div>
  )
}

export default Hero