import Productcarousel from '@/src/helper/Hero/Productcarousel'
function Productcard() {
  return (
    <div className='container'>
        <h1 className=" text-[20px] lg:text-[23px] font-bold text-gray-600">Popular Products</h1>
        <div>
            
            <Productcarousel/>
            <Productcarousel/>
              <Productcarousel/>
            <Productcarousel/>
        </div>
    </div>
  )
}

export default Productcard