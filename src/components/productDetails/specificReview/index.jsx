// SingleReview.js
import React from 'react';
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { FaRegStar, FaStar } from "react-icons/fa";
import {CgProfile} from "react-icons/cg"



const stars = Array.from({ length: 5 }, (_, i) => i + 1);

const SpecificReview = ({ review }) => {
  
  console.log(review)
  const averageRating = review.rating?.rating


  const formattedAverageRating = averageRating?.toFixed(1) || '0.0';
  

  return (
    <div className=" flex flex-col items-start text-center md:w-[667px] w-[363px] lg:w-[1155px] border shadow-lg p-2 lg:p-6"> 
      <div className="mb-2 text-xl">
          <BiSolidQuoteAltLeft />
      </div>
      <div className="mb-2">
          <p className="text-gray-500 text-[12px] md:text-[14px] lg:text-base font-semibold leading-3 md:leading-4 text-start">
            {review?.comment}
          </p>
      </div>
      <div className='flex flex-col lg:flex-row lg:gap-4 items-center mt-auto'> 
        <div className="flex flex-row items-center gap-4">

          { review?.userId.profilePic && <img src={`http://localhost:3000/${review?.userId.profilePic}`}
            alt="profile"
            className="w-10 h-10 rounded-full border-2 border-gray-200" />}
          
          {!review?.userId.profilePic && <CgProfile className="w-10 h-10 text-gray-500 lg:mt-3" />}

          <h4 className="text-gray-500 text-[14px] md:text-[16px] font-semibold leading-3">{review.userId.userName}</h4>
        </div>
 <div className="flex flex-row items-center gap-1 ">
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
                {/* Display average rating */}
              
                  <p className="text-[12px] lg:text-[18px] font-poppins text-[#5f6980]">
                    ({formattedAverageRating})
                  </p>
      </div>
    </div>
  );
};

export default SpecificReview;
