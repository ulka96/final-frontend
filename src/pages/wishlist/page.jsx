import React from 'react'
import { useRef } from 'react';
import {Link} from 'react-router-dom'
import Container from "../../components/common/containerClass/index"
import SingleProduct from "../../components/home/singleProduct/index"

// React icons
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
import { GoHeart } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import { clearWishlist, removeFromWishlist } from '../../slices/wishlist.slice';
import { AiOutlineDelete } from 'react-icons/ai';
import {PiShoppingCart} from 'react-icons/pi'
import { addToCart } from '../../slices/cart.slice';

const WishlistPage = () => {

  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlist)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleClearWishlist = () => {
    dispatch(clearWishlist());
  };



  // const handleAddToCart = () => {
  //   if (!isLoggedIn) {
  //     alert("You must be logged in to add products to your cart.");
  //     return;
  //   }
  //   dispatch(addToCart(product));
  // };



// Slider
const sliderRef = useRef(null);

const scrollLeft = () => {
 if (sliderRef.current) {
    const scrollAmount = 300; 
    if (sliderRef.current.scrollLeft <= 0) {
      sliderRef.current.scrollLeft = sliderRef.current.scrollWidth;
    } else {
      sliderRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      });
    }
  }
};
const scrollRight = () => {
  if (sliderRef.current) {
    const scrollAmount = 300;
    if (
      sliderRef.current.scrollLeft + sliderRef.current.clientWidth >=
      sliderRef.current.scrollWidth
    ) {
      sliderRef.current.scrollLeft = 0;
    } else {
      sliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  }
};

  return (
    
    <div>
    <Container>
      
              <div>
                  <div className='flex flex-col items-center justify-center gap-2 mt-12'>
                  <GoHeart className='lg:text-4xl md:text-3xl text-2xl'/>
            <h1 className='lg:text-[28px] md:text-[24px] text-[20px] font-semibold'>My Wishlist ({wishlist.length})</h1>
            {wishlist?.length !== 0 && <button onClick={handleClearWishlist}>Clear Wishlist</button>}
                  </div>
                  
      {wishlist?.length !== 0 && <div className="relative flex items-center mt-12 mb-24">
        {/* Left Arrow */}
        <button 
          onClick={scrollLeft} 
          className="absolute left-0 z-10 p-1 md:p-2 lg:p-4 -ml-4 md:-ml-7 lg:-ml-10 mb-9 text-2xl md:text-3xl lg:text-5xl text-[#bab4f7]">
          <HiOutlineArrowCircleLeft />
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex overflow-x-scroll scroll-smooth space-x-4 scrollbar-hide w-full"
          style={{ scrollBehavior: 'smooth' }} 
            >      
              
              {wishlist.map((product) => (
                <>
                  <div className='flex flex-col'>
                      <div className="justify-center items-center relative w-[164px] h-[173px] lg:w-[296px] lg:h-[313px] md:w-[343px] md:h-[343px] bg-[#f3f4f7] overflow-hidden  hover:drop-shadow-lg">
                      <Link><div className="absolute inset-0 transform transition-transform duration-1000 ease-in-out hover:scale-110 ">
                          <img src={`http://localhost:3000/${product?.productPic}`} alt="sofa2" className="w-full h-full object-cover" />
                      </div>
                      </Link>
              {product?.newArrival && <div className='py-[8px] px-[6px] lg:py-[12px] lg:px-[10px] md:py-[12px] md:px-[10px]  ml-2 rounded-full bg-[#2ec1ac] absolute top-2 right-2 md:top-3 md:right-3 lg:top-4 lg:right-4'>
                  <p className='text-white text-[8px] lg:text-[11px] 
                    md:text-[10px]'>New</p>              
                      </div>}
                      
                      {product?.discount > 0 && <div className='py-[8px] px-[6px] lg:py-[12px] lg:px-[10px] md:py-[12px] md:px-[10px]  ml-2 rounded-full bg-[#dc2626] absolute top-2 right-2 md:top-3 md:right-3 lg:top-4 lg:right-4'>
                  <p className='text-white text-[8px] lg:text-[11px] 
                    md:text-[10px]'>{product?.discount} %</p>              
              </div> }
              </div>
      
           <div className='flex flex-col'>
                      <h1 className='font-semibold text-[12px] md:text-[16px] mt-1 ml-3'>{product?.title}</h1>
      
              <div className='flex flex-row mt-1 ml-3  items-center'>
              <p className={`${product?.discount > 0 ? 'line-through' : ''} text-[12px] md:text-[16px]`}>${product?.price}</p>
              {product?.discount > 0 && <p className='text-[12px] ml-2 md:ml-3 font-bold md:text-[16px]'>${product?.discountedPrice}</p>}
                          
              <div
                 onClick={() => dispatch(removeFromWishlist(product._id))}
                className='p-[4px] md:p-[5px] ml-3 md:ml-auto rounded-full bg-[#f8f7fb] cursor-pointer hover:bg-[#dfdff1]'>
                    
                <AiOutlineDelete className='w-4 h-4 md:w-5 md:h-5 hover:text-[#6e5fac]'/>
              </div>
                          
              <div
  onClick={() => {
    if (!isLoggedIn) {
      alert("You must be logged in to add products to your cart.");
      return;
    }
    dispatch(addToCart(product));
  }}
  className="p-[4px] md:p-[5px] ml-2 md:mr-5 rounded-full bg-[#f8f7fb] cursor-pointer hover:bg-[#dfdff1]"
>
  <PiShoppingCart className="w-4 h-4 md:w-5 md:h-5 hover:text-[#6e5fac]" />
</div>

                          
      
              </div>
                  
                    </div> 
                    </div>
                  </>
          
        ))}
     
        </div>

        {/* Right Arrow */}
        <button 
          onClick={scrollRight} 
          className="absolute right-0 z-10 p-1 md:p-2 lg:p-4 -mr-4 md:-mr-7 lg:-mr-10 mb-9 text-2xl md:text-3xl lg:text-5xl text-[#bab4f7]">
          <HiOutlineArrowCircleRight />
        </button>
          </div>}
          
       
            
              
              </div>   
    </Container>
    </div>
  )
}

export default WishlistPage