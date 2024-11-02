import React from 'react'
import { useRef } from 'react';
import Container from "../../components/common/containerClass/index"
import SingleProduct from "../../components/home/singleProduct/index"

// React icons
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
import { GoHeart } from "react-icons/go";

const WishlistPage = () => {

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
                   <h1 className='lg:text-[28px] md:text-[24px] text-[20px] font-semibold'>My Wishlist (4)</h1>
                  </div>
                  
      <div className="relative flex items-center mt-12 mb-24">
        {/* Left Arrow */}
        <button 
          onClick={scrollLeft} 
          className="absolute left-0 z-10 p-1 md:p-2 lg:p-4 -ml-4 md:-ml-7 lg:-ml-10 mb-9 text-2xl md:text-3xl lg:text-5xl text-[#bab4f7]">
          <HiOutlineArrowCircleLeft />
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex overflow-x-scroll scroll-smooth space-x-4  scrollbar-hide w-full"
          style={{ scrollBehavior: 'smooth' }} 
        >
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
     
        </div>

        {/* Right Arrow */}
        <button 
          onClick={scrollRight} 
          className="absolute right-0 z-10 p-1 md:p-2 lg:p-4 -mr-4 md:-mr-7 lg:-mr-10 mb-9 text-2xl md:text-3xl lg:text-5xl text-[#bab4f7]">
          <HiOutlineArrowCircleRight />
        </button>
      </div>
              
              
              
              </div>   
    </Container>
    </div>
  )
}

export default WishlistPage