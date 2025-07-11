import { categoridata } from "@/src/data/categories/Categories"
import { FaEye } from "react-icons/fa";

function Categories() {
    return (
        <div className="container">
            <h2 className=" text-[20px] lg:text-[23px] font-bold text-gray-600">Featured Categories</h2>

            <div>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mt-5">
                    
                    {
                        categoridata.map((itme) => {
                            return (
                                <div key={itme.id} className="bg-white group relative cursor-pointer w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] p-4 rounded-full shadow-md hover:shadow-lg hover:opacity-80 transition-shadow duration-300 my-5">
                                    <img src={itme.image} alt="Category 1" className="w-full  object-cover rounded-md mb-2" />
                                    <div className=" absolute  inset-0 flex items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h3 className="text-lg text-[20px] font-bold">{itme.name}</h3>
                                        <FaEye className=" text-2xl ml-2" />
                                    </div>
                                     <h3 className="text-lg text-[20px] font-bold mt-3 text-center">{itme.name}</h3>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Categories