import React from 'react'
import sofa2 from "../../../assets/home/sofa2.png"


// react icons
import { CiHeart } from "react-icons/ci";
import { PiShoppingCart } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const SingleProduct = ({ topProduct, productId}) => {
    
    // const { productId } = useParams()

    console.log(productId)
    
    return (
        <div>
            
       
            <div className="justify-center items-center relative w-[164px] h-[173px] lg:w-[296px] lg:h-[313px] md:w-[343px] md:h-[343px] bg-[#f3f4f7] overflow-hidden  hover:drop-shadow-lg">
                <Link to={`/products/${productId}`}><div className="absolute inset-0 transform transition-transform duration-1000 ease-in-out hover:scale-110 ">
                    <img src={`http://localhost:3000/${topProduct?.productPic}`} alt="sofa2" className="w-full h-full object-cover" />
                </div>
                </Link>
        {topProduct?.newArrival && <div className='py-[8px] px-[6px] lg:py-[12px] lg:px-[10px] md:py-[12px] md:px-[10px]  ml-2 rounded-full bg-[#2ec1ac] absolute top-2 right-2 md:top-3 md:right-3 lg:top-4 lg:right-4'>
            <p className='text-white text-[8px] lg:text-[11px] 
              md:text-[10px]'>New</p>              
                </div>}
                
                {topProduct?.discount > 0 && <div className='py-[8px] px-[6px] lg:py-[12px] lg:px-[10px] md:py-[12px] md:px-[10px]  ml-2 rounded-full bg-[#dc2626] absolute top-2 right-2 md:top-3 md:right-3 lg:top-4 lg:right-4'>
            <p className='text-white text-[8px] lg:text-[11px] 
              md:text-[10px]'>{topProduct?.discount} %</p>              
        </div> }
        </div>
 
            

     <div className='flex flex-col'>
                <h1 className='font-semibold text-[12px] md:text-[16px] mt-1 ml-3'>{topProduct?.title}</h1>

        <div className='flex flex-row mt-1 ml-3  items-center'>
        <p className={`${topProduct?.discount > 0 ? 'line-through' : ''} text-[12px] md:text-[16px]`}>${topProduct?.price}</p>
        {topProduct?.discount > 0 && <p className='text-[12px] ml-2 md:ml-3 font-bold md:text-[16px]'>${topProduct?.discountedPrice}</p>}
                    
        <div className='p-[4px] md:p-[5px] ml-3 md:ml-auto rounded-full bg-[#f8f7fb]'>
              <CiHeart className='w-4 h-4 md:w-5 md:h-5'/>
        </div>
                    
        <div className='p-[4px] md:p-[5px] ml-2 md:mr-5 rounded-full bg-[#f8f7fb]'>
              <PiShoppingCart className='w-4 h-4 md:w-5 md:h-5 '/>
        </div>
                    

        </div>
            
     </div>  

     </div>
  )
}

export default SingleProduct

