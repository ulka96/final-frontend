// SingleReview.js
import React from 'react';
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

const stars = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const SpecificReview = () => {
  return (
    <div className=" flex flex-col items-start text-center border shadow-lg p-2 lg:p-6"> 
      <div className="mb-2 text-xl">
          <BiSolidQuoteAltLeft />
      </div>
      <div className="mb-2">
          <p className="text-gray-500 text-[12px] md:text-[14px] lg:text-base font-semibold leading-3 md:leading-4 text-start">
            I’m thrilled with my new watch! The design is sleek and modern, and its performance is flawless. It’s a real conversation starter and adds elegance to every outfit.
          </p>
      </div>
      <div className='flex flex-col lg:flex-row lg:gap-4 items-center mt-auto'> 
        <div className="flex flex-row items-center gap-4">
            <img src="https://i.ibb.co/hKgs8gm/profile.jpg" alt="profile" className="w-10 h-10 rounded-full border-2 border-gray-200" />
            <h4 className="text-gray-500 text-[14px] md:text-[16px] font-semibold leading-3">James Robertson</h4>
        </div>
        <div className="flex flex-row items-center gap-1 mt-2 ml-7" >
          {stars.map((star) => (
            <FaStar key={star.id} className="text-yellow-500 cursor-pointer" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecificReview;
