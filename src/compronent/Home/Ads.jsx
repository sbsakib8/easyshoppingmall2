import Image from 'next/image'
import React from 'react'

function Ads() {
  return (
    <div className='container '>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5'> 
         <div className=''>
            <Image 
          src="/img/ads1.jpg" 
          height={400} 
          width={400} 
          className="object-cover bg-white shadow-md rounded-lg hover:shadow-lg  cursor-pointer hover:scale-110 transition-all duration-300 delay-200" 
          alt="Advertisement"
        />
         </div>
         <div className=''>
            <Image 
          src="/img/ads2.jpg" 
          height={400} 
          width={400} 
          className="object-cover bg-white shadow-md rounded-lg hover:shadow-lg  cursor-pointer hover:scale-110 transition-all duration-300 delay-200" 
          alt="Advertisement"
        />
         </div>
         <div className=''>
            <Image 
          src="/img/ads3.jpg" 
          height={400} 
          width={400} 
          className="object-cover bg-white shadow-md rounded-lg hover:shadow-lg  cursor-pointer hover:scale-110 transition-all duration-300 delay-200" 
          alt="Advertisement"
        />
         </div>
         <div className=''>
            <Image 
          src="/img/ads4.jpg" 
          height={400} 
          width={400} 
          className="object-cover bg-white shadow-md rounded-lg hover:shadow-lg  cursor-pointer hover:scale-110 transition-all duration-300 delay-200" 
          alt="Advertisement"
        />
         </div>
        </div>
    </div>
  )
}

export default Ads