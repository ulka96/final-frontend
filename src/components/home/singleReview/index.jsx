// SingleReview.js
import React from 'react';
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { FaRegStar, FaStar } from "react-icons/fa";
import {CgProfile} from "react-icons/cg"


const SingleReview = ({ review }) => {
  
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  
  const averageRating = review.rating?.rating

  return (
    <div className=" overflow-hidden max-w-xs ml-20 lg:ml-0 md:ml-0 lg:max-w-[400px] lg:w-[400px] lg:h-[300px] md:max-w-[390px] lg:mx-auto mb-6  bg-white rounded-lg flex flex-col items-start text-center shadow-lg p-4 lg:p-6"> 
      <div className="mb-4 text-4xl">
          <BiSolidQuoteAltLeft />
      </div>
      <div className="mb-4">
          <p className="text-gray-500 text-sm lg:text-base font-semibold leading-5 text-start">
            {review?.comment}
          </p>
      </div>
      <div className='flex flex-col lg:flex-row lg:gap-44 items-center mt-auto'> 
        <div className="flex flex-row items-center gap-4">
          
          { review?.userId.profilePic && <img src={`http://localhost:3000/${review?.userId.profilePic}`}
            alt="profile"
            className="w-16 h-16 rounded-full border-2 border-gray-200" />}
          
          {!review?.userId.profilePic && <CgProfile className="w-16 h-16 text-gray-500 lg:mt-3" />}
          

            <h4 className="text-gray-500 text-lg font-semibold leading-6">{review?.userId.userName}</h4>
        </div>
        <div className="flex flex-row items-center gap-1 mt-2">
        {stars.map((star) => (
                        <span
                            key={star}>
              {star <= averageRating ? (
                <FaStar className="text-yellow-500 cursor-pointer" />
              ) : (
                <FaRegStar className="text-yellow-500 cursor-pointer" />
              )}
            </span>
        ))}
          
        </div>

      </div>
    </div>
  );
};

export default SingleReview;
