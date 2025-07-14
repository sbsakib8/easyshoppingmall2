import Link from 'next/link'
import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import Topheader from '../header/Topheader';
function Navber() {
  return (

    <>
     <Topheader/>
     
     <div className='bg-white shadow-md hidden lg:block lg:w-[80%] lg:h-20 rounded-2xl mx-auto mt-2 z-30'>

      <div>
        <ul className='flex space-x-3 pt-5 justify-between item-center lg:w-[80%] lg:h-20 mx-auto'>
          <li className=' text-[20px] font-bold hover:bg-gray-200 px-3 h-10 rounded-md transition-all delay-200 cursor-pointer '><Link href={'/'}>Home</Link></li>
          {/* fashion section */}
          <div className='relative group '>

            <div className='flex items-center justify-between relative'>
              <li className=' text-[17px] font-medium hover:bg-gray-200  px-3 h-10 rounded-md transition-all delay-200 cursor-pointer '><Link href={'home'}>Fashion</Link></li>
              <FaAngleDown className='absolute -right-2 top-1 text-[20px] text-gray-500' />
            </div>
            <div className='absolute hidden group-hover:block bg-white shadow-lg rounded-md w-40 mt-2 h-40 group-hover:transition-all group-hover:delay-400 z-30'>
              <li className=' text-[18px]  hover:bg-gray-200 px-3 h-10 rounded-md transition-all delay-200 cursor-pointer mt-2'><Link href={'man'}>Man</Link></li>
              <li className=' text-[18px]  hover:bg-gray-200 px-3 h-10 rounded-md transition-all delay-200 cursor-pointer mt-2'><Link href={'man'}>Man</Link></li>
              <li className=' text-[18px] hover:bg-gray-200 px-3 h-10 rounded-md transition-all delay-200 cursor-pointer mt-2'><Link href={'man'}>Man</Link></li>
            </div>
          </div>

          {/*  Electronics section*/}
          <div className='relative group '>

            <div className='flex items-center justify-between relative'>
              <li className=' text-[17px] font-medium hover:bg-gray-200  px-3 h-10 rounded-md transition-all delay-200 cursor-pointer '><Link href={'home'}>Electronics</Link></li>
              <FaAngleDown className='absolute -right-2 top-1 text-[20px] text-gray-500' />
            </div>
            <div className='absolute hidden group-hover:block bg-white shadow-lg rounded-md w-40 mt-2 h-40 group-hover:transition-all group-hover:delay-400 z-30'>
              <li className=' text-[18px]  hover:bg-gray-200 px-3 h-10 rounded-md transition-all delay-200 cursor-pointer mt-2'><Link href={'man'}>Man</Link></li>
              <li className=' text-[18px]  hover:bg-gray-200 px-3 h-10 rounded-md transition-all delay-200 cursor-pointer mt-2'><Link href={'man'}>Man</Link></li>
              <li className=' text-[18px] hover:bg-gray-200 px-3 h-10 rounded-md transition-all delay-200 cursor-pointer mt-2'><Link href={'man'}>Man</Link></li>
            </div>
          </div>
          {/* Bags section */}
          <div className='relative group '>

            <div className='flex items-center justify-between relative'>
              <li className=' text-[17px] font-medium hover:bg-gray-200  px-3 h-10 rounded-md transition-all delay-200 cursor-pointer '><Link href={'home'}>Bags</Link></li>
              <FaAngleDown className='absolute -right-2 top-1 text-[20px] text-gray-500' />
            </div>
            <div className='absolute hidden group-hover:block bg-white shadow-lg rounded-md w-40 mt-2 h-40 group-hover:transition-all group-hover:delay-400 z-30'>
              <li className=' text-[18px]  hover:bg-gray-200 px-3 h-10 rounded-md transition-all delay-200 cursor-pointer mt-2'><Link href={'man'}>Man</Link></li>
              <li className=' text-[18px]  hover:bg-gray-200 px-3 h-10 rounded-md transition-all delay-200 cursor-pointer mt-2'><Link href={'man'}>Man</Link></li>
              <li className=' text-[18px] hover:bg-gray-200 px-3 h-10 rounded-md transition-all delay-200 cursor-pointer mt-2'><Link href={'man'}>Man</Link></li>
            </div>
          </div>
          {/* Footwear */}
          <div className='relative group '>

            <div className='flex items-center justify-between relative'>
              <li className=' text-[17px] font-medium hover:bg-gray-200  px-3 h-10 rounded-md transition-all delay-200 cursor-pointer '><Link href={'home'}>Footwear</Link></li>
              <FaAngleDown className='absolute -right-2 top-1 text-[20px] text-gray-500' />
            </div>
            <div className='absolute hidden group-hover:block bg-white shadow-lg rounded-md w-40 mt-2 h-40 group-hover:transition-all group-hover:delay-400 z-30'>
              <li className=' text-[18px]  hover:bg-gray-200 px-3 h-10 rounded-md transition-all delay-200 cursor-pointer mt-2'><Link href={'man'}>Man</Link></li>
              <li className=' text-[18px]  hover:bg-gray-200 px-3 h-10 rounded-md transition-all delay-200 cursor-pointer mt-2'><Link href={'man'}>Man</Link></li>
              <li className=' text-[18px] hover:bg-gray-200 px-3 h-10 rounded-md transition-all delay-200 cursor-pointer mt-2'><Link href={'man'}>Man</Link></li>
            </div>
          </div>
          {/*  Beauty section*/}
          <div className='relative group '>

            <div className='flex items-center justify-between relative'>
              <li className=' text-[17px] font-medium hover:bg-gray-200  px-3 h-10 rounded-md transition-all delay-200 cursor-pointer '><Link href={'home'}>Beauty</Link></li>
              <FaAngleDown className='absolute -right-2 top-1 text-[20px] text-gray-500' />
            </div>
            <div className='absolute hidden group-hover:block bg-white shadow-lg rounded-md w-40 mt-2 h-40 group-hover:transition-all group-hover:delay-400 z-30'>
              <li className=' text-[18px]  hover:bg-gray-200 px-3 h-10 rounded-md transition-all delay-200 cursor-pointer mt-2'><Link href={'man'}>Man</Link></li>
              <li className=' text-[18px]  hover:bg-gray-200 px-3 h-10 rounded-md transition-all delay-200 cursor-pointer mt-2'><Link href={'man'}>Man</Link></li>
              <li className=' text-[18px] hover:bg-gray-200 px-3 h-10 rounded-md transition-all delay-200 cursor-pointer mt-2'><Link href={'man'}>Man</Link></li>
            </div>
          </div>
          {/* Shop sectin */}
          <div className='relative group '>

            <div className='flex items-center justify-between relative'>
              <li className=' text-[17px] font-medium hover:bg-gray-200  px-3 h-10 rounded-md transition-all delay-200 cursor-pointer '><Link href={'home'}>Shop</Link></li>
              <FaAngleDown className='absolute -right-2 top-1 text-[20px] text-gray-500' />
            </div>
            <div className='absolute hidden group-hover:block bg-white shadow-lg rounded-md w-[600px] -ml-100 mt-5 h-40 group-hover:transition-all group-hover:delay-400 z-30'>
              <div className='flex items-center justify-between'>

                <div>
                  <li className=' text-[18px]  hover:bg-gray-200 px-3 h-10 rounded-md transition-all delay-200 cursor-pointer mt-2'><Link href={'man'}>tshirt</Link></li>
                  <li className=' text-[18px]  hover:bg-gray-200 px-3 h-10 rounded-md transition-all delay-200 cursor-pointer mt-2'><Link href={'man'}>shirt</Link></li>
                  <li className=' text-[18px] hover:bg-gray-200 px-3 h-10 rounded-md transition-all delay-200 cursor-pointer mt-2'><Link href={'man'}>pant</Link></li>
                </div>
                <div>
                  <li className=' text-[18px]  hover:bg-gray-200 px-3 h-10 rounded-md transition-all delay-200 cursor-pointer mt-2'><Link href={'man'}>borka</Link></li>
                  <li className=' text-[18px]  hover:bg-gray-200 px-3 h-10 rounded-md transition-all delay-200 cursor-pointer mt-2'><Link href={'man'}>Panjabi</Link></li>
                  <li className=' text-[18px] hover:bg-gray-200 px-3 h-10 rounded-md transition-all delay-200 cursor-pointer mt-2'><Link href={'man'}>Threepice</Link></li>
                </div>
                <div>
                  <li className=' text-[18px]  hover:bg-gray-200 px-3 h-10 rounded-md transition-all delay-200 cursor-pointer mt-2'><Link href={'man'}>Man</Link></li>
                  <li className=' text-[18px]  hover:bg-gray-200 px-3 h-10 rounded-md transition-all delay-200 cursor-pointer mt-2'><Link href={'man'}>Man</Link></li>
                  <li className=' text-[18px] hover:bg-gray-200 px-3 h-10 rounded-md transition-all delay-200 cursor-pointer mt-2'><Link href={'man'}>Man</Link></li>
                </div>

              </div>
            </div>
          </div>

        </ul>
      </div>
    </div>
    
    </>
   
  )
}

export default Navber