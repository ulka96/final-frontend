import React, { useEffect, useRef, useState } from 'react'

// Components
import SingleNewArrival from './singleNewArrival';



// React icons
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";

const NewArrivals = () => {

  const [newArrivals, setNewArrivals] = useState([])

  const fetchNewArrivals = async() => {
    const response = await fetch("http://localhost:3000/api/new-arrivals", {
      cache: "no-cache",
    })
    const data = await response.json()
    setNewArrivals(data.products)
  }
  
  useEffect(() => {
    fetchNewArrivals()
  }, [])

  console.log(newArrivals)



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
        <h1 className="text-[18px] md:text-[32px] lg:text-[38px] font-bold mb-6 text-start">New Arrivals</h1>
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
            
            {
              newArrivals && newArrivals.map((newArrival) => {
                          
                return <SingleNewArrival key={newArrival._id} newArrival={newArrival} productId={newArrival._id} />
              
              })

            }
 
      
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

export default NewArrivals