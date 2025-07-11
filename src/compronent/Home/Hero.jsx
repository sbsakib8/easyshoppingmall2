import React from 'react'
import Topheader from '../header/Topheader'
import Navber from './Navber'
import Carousels from '@/src/helper/Hero/Carousel'
import Categories from './Categories'
import Ads from './Ads'

function Hero() {
  return (
    <div>
      <Topheader/>
     <Navber/>
     <Carousels/>
     <Categories/>
     <Ads/>
    </div>
  )
}

export default Hero