import React from 'react'
import Topheader from '../header/Topheader'
import Navber from './Navber'
import Carousels from '@/src/helper/Hero/Carousel'
import Categories from './Categories'
import Ads from './Ads'
import Productcard from './Productcard'
import Productcarousel from '@/src/helper/Hero/Productcarousel'
import Footer from './Footer'

function Hero() {
  return (
    <div>
      <Topheader/>
     <Navber/>
     <Carousels/>
     <Categories/>
     <Ads/>
     <Productcard/>
     <div className=' hidden lg:block'>
       <Ads/>
     </div>
        <div className='w-[98%] lg:w-[95%] mx-auto'>
          <Productcarousel/>
          <Productcarousel/>
        </div>
        <Footer/>
    </div>
  )
}

export default Hero