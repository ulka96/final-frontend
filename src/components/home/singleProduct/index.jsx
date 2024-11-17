import React from 'react'

// React icons
import {CiHeart} from "react-icons/ci";
import { PiShoppingCart } from "react-icons/pi";
import {AiFillHeart} from "react-icons/ai"


import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToWishlist, removeFromWishlist } from '../../../slices/wishlist.slice';
import { addToCart } from '../../../slices/cart.slice';

const SingleProduct = ({ topProduct, productId}) => {

  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlist)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const isInWishlist = wishlist.some((item) => item._id === topProduct._id);

  const toggleWishlist = () => {
    if (!isLoggedIn) {
      alert("You must be logged in to add products to your wishlist.");
      return;
    }
    if (isInWishlist) {
      dispatch(removeFromWishlist(topProduct._id));
    } else {
      dispatch(addToWishlist(topProduct));
    }
  };
    

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      alert("You must be logged in to add products to your cart.");
      return;
    }
    dispatch(addToCart(topProduct));
  };


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
              
              <button onClick={toggleWishlist}>
               {isInWishlist ? (
                 <AiFillHeart className="text-red-500 w-4 h-4 md:w-5 md:h-5" />
               ) : (
                <CiHeart className='w-4 h-4 md:w-5 md:h-5' /> 
               )}
              </button>
              
        </div>
                    
          <div className='p-[4px] md:p-[5px] ml-2 md:mr-5 rounded-full bg-[#f8f7fb] hover:bg-[]'>
              <button
                onClick={handleAddToCart}>
                <PiShoppingCart className='w-4 h-4 md:w-5 md:h-5 hover:text-[#6e5fac] '/>
              </button>
        </div>
                    

        </div>
            
     </div>  

     </div>
  )
}

export default SingleProduct

