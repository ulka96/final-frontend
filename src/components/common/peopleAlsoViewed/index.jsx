import React, { useRef } from 'react'

// Components
import SingleProduct from '../../home/singleProduct'


// React icons
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";

const PeopleAlsoViewed = () => {
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
    
    <div className="mx-auto relative w-full max-w-[380px] md:max-w-[730px] lg:max-w-[1280px]  my-16 md:my-24 lg:my-36">
      <div>
        <h1 className="text-[18px] md:text-[32px] lg:text-[38px] font-bold mb-6 text-start">People Also Viewed</h1>
      </div>

      <div className="relative flex items-center">
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
  
  )
}

export default PeopleAlsoViewed