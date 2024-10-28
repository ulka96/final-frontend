import React from 'react'
import sofa2 from "../../../assets/home/sofa2.png"


// react icons
import { CiHeart } from "react-icons/ci";
import { PiShoppingCart } from "react-icons/pi";

const SingleProduct = () => {
    return (
        <div>
            
       
            <div className="justify-center items-center relative w-[164px] h-[173px] lg:w-[296px] lg:h-[313px] md:w-[343px] md:h-[343px] bg-[#f3f4f7] overflow-hidden  hover:drop-shadow-lg">
                <div className="absolute inset-0 transform transition-transform duration-1000 ease-in-out hover:scale-110 ">
                    <img src={sofa2} alt="sofa2" className="w-full h-full object-cover" />
                </div>
        <div className='py-[8px] px-[6px] ml-2 rounded-full bg-[#2ec1ac] absolute top-2 right-2'>
              <p className='text-white text-[8px]'>New</p>
        </div> 
        </div>
 
            

     <div className='flex flex-col'>
                <h1 className='font-semibold text-[12px] mt-1 ml-3'>Fabric sofa</h1>

        <div className='flex flex-row mt-1 ml-3  items-center'>
            <p className='line-through text-[12px]'>$105.00</p>
            <p className='text-[12px] ml-2 font-bold'>$95.00</p>
                    
        <div className='p-[4px] ml-2 rounded-full bg-[#f8f7fb]'>
              <CiHeart className='w-4 h-4 '/>
        </div>
                    
        <div className='p-[4px] ml-2 rounded-full bg-[#f8f7fb]'>
              <PiShoppingCart className='w-4 h-4 '/>
        </div>
                    

        </div>
            
     </div>  

     </div>
  )
}

export default SingleProduct

