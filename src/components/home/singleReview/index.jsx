// SingleReview.js
import React from 'react';
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

const stars = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const SingleReview = () => {
  return (
    <div className="w-full max-w-xs lg:max-w-[400px]  mx-auto mb-6  bg-white rounded-lg flex flex-col items-start text-center shadow-lg p-4 lg:p-6"> 
      <div className="mb-4 text-4xl">
          <BiSolidQuoteAltLeft />
      </div>
      <div className="mb-4">
          <p className="text-gray-500 text-sm lg:text-base font-semibold leading-5 text-start">
            I’m thrilled with my new watch! The design is sleek and modern, and its performance is flawless. It’s a real conversation starter and adds elegance to every outfit.
          </p>
      </div>
      <div className='flex flex-col lg:flex-row lg:gap-44 items-center mt-auto'> 
        <div className="flex flex-row items-center gap-4">
            <img src="https://i.ibb.co/hKgs8gm/profile.jpg" alt="profile" className="w-16 h-16 rounded-full border-2 border-gray-200" />
            <h4 className="text-gray-500 text-lg font-semibold leading-6">James Robertson</h4>
        </div>
        <div className="flex flex-row items-center gap-1 mt-2">
          {stars.map((star) => (
            <FaStar key={star.id} className="text-yellow-500 cursor-pointer" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
