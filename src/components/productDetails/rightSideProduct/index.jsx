import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux';

import ErrorModal from '../../../components/common/errorModalRating'; 


// React icons
import { FaRegStar, FaStar } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";
import { Link, useParams } from 'react-router-dom';

// Images
import box from "../../../assets/products/Box.png"
import leaf from "../../../assets/products/Leaf.png"

const RightSideProduct = ({ newArrivalDetail, fetchProductRatings, ratings }) => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");
    const [showErrorModal, setShowErrorModal] = useState(false);

    const colors = newArrivalDetail?.color?.length ? JSON.parse(newArrivalDetail.color[0]) : [];
    const { productId } = useParams();
    const userId = useSelector((state) => state.auth.user?._id)
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    
     // Rating
  const handleRateProduct = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/rate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId,
          rating,
          userId,
        }),
      });

        const data = await response.json();
        if (response.status === 201) {
            setErrorMessage("");
            setIsModalOpen(false);
            fetchProductRatings();
          } else {
            setErrorMessage(data.message);
          }
        } catch (error) {
          setErrorMessage("An error occurred while submitting your rating.");
        }
    };
    
      const hasRated = ratings.ratings?.some((singleRating) => singleRating.userId === userId);

      // Handle star click for rating
      const handleStarClick = (starId) => {
        if (isLoggedIn) {
          if (!hasRated) {
            setRating(starId);
            setIsModalOpen(true);
          } else {
            setErrorMessage("You have already rated this product.");
            setShowErrorModal(true);
          }
        } else {
          setErrorMessage("Please log in to rate this product.");
          setShowErrorModal(true);
        }
    };    
    
    
    // Calculate the average rating

    const averageRating = ratings.averageRating
    
      const stars = Array.from({ length: 5 }, (_, i) => i + 1);


  return (
      <div>
          
          {/* Error Modal */}
         {showErrorModal && (
          <ErrorModal 
            message={errorMessage} 
            onClose={() => setShowErrorModal(false)}  
          />
        )}
          

          <h1 className='text-[24px] md:text-[18px] lg:text-[28px] font-bold'>{newArrivalDetail.title}</h1>
                    <div className='flex flex-row items-center gap-4 '>
                    <div className="flex flex-row items-center gap-1 ">
                    {stars.map((star) => (
                        <span
                            onClick={handleStarClick}
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
                    ({averageRating})
                  </p>
              
                {/* <p className='text-[14px] lg:text-[20px] font-poppins text-[#5f6980]'>{newArrivalDetail.ratings?.length}  Customer Review</p> */}
                      </div>
                      
                      <div className='flex flex-row items-center gap-3 mt-5 md:mt-3'>
                <h1 className='text-[26px] md:text-[20px] lg:text-[24px] text-[#8965c8] font-poppins font-semibold'>${newArrivalDetail.price}</h1>
                {newArrivalDetail.discount > 0 && <h2 className='text-[16px] md:text-[14px] lg:text-[18px]  text-[#bfc3cc]
                           '>${newArrivalDetail.discountedPrice}</h2>}
                          {newArrivalDetail.discount > 0 && <button className='py-1 px-2 w-[58px] md:w-[50px] lg:w-[62px] bg-[#fddcdf] text-[#f65162] rounded-full'>-{newArrivalDetail.discount}%</button>}
                      </div>

                      <div>
                          <p className='text-[#5f6980] text-justify md:text-[16px] lg:text-[18px] md:w-[330px] lg:w-[576px] mt-6 mb-8 md:mt-2 md:mb-3 lg:mt-7'>{newArrivalDetail.description}</p>
                      </div>

                   <ul className='flex flex-row gap-4 '>
                   {

  

                     colors.map((col, index) => (
                       <li 
                         key={index} 
                         style={{ backgroundColor: col }} 
                         className="h-10 w-10 lg:w-11 lg:h-11 border flex items-center justify-center rounded-full cursor-pointer"
                       >
                         <span>
                           <BsCheck className="text-white text-xl md:text-lg lg:text-2xl" />
                         </span>
                       </li>
                     ))
                   }


                   </ul>


                     <div className='flex flex-row gap-4 items-center w-full'>
                <div className="flex items-center justify-center  font-black my-8 
                      border border-[#8965c8] rounded-full w-[113px] md:w-[100px] lg:w-[133px] md:my-5 lg:px-5 px-5">
                     
                     <button className="text-[16px] md:text-[14px] font-bold text-[#8965c8]">-</button>
                     <input
                       value={1}
                       type="number"
                       min="1"
                       max="100"
                       className="h-12 md:h-12 lg:h-12 text-[16px] w-full  md:text-[14px]  text-center font-semibold text-[#8965c8]"
                     />
                     <button  className="text-[16px] md:text-[14px] font-bold text-[#8965c8]">+</button>
                          </div>
                          
                <div className='w-[130px] md:w-[120px] lg:w-[130px] lg:h-12 h-12 md:h-12 items-center justify-center flex 
                          font-semibold text-[#8965c8] border border-[#8965c8] rounded-full'>
                              <Link to=""><button >Add To Cart</button></Link>
                          </div>
                      </div>
                      
                 
                  <div className='flex flex-col lg:mt-4'>
                  <div className='flex flex-row gap-2 items-center'>
                    <div className='w-5 h-5' >
                      <img src={box} alt="box" />
                    </div>
                      <p>Free shipping included</p>
                  </div>
                  
                  <div className='flex flex-row gap-2 items-center mb-8 mt-3'>
                    <div className='w-5 h-5' >
                      <img src={leaf} alt="leaf" />
                    </div>
                      <p>Made from the best of materials sourced</p>
              </div>
              

                                  {/* Modal */}
                                  {isModalOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-lg font-bold mb-4">Rate Product</h2>
                <div className="flex gap-2">
                {stars.map((star) => (
                <FaStar
                  key={star}
                  className={`cursor-pointer ${rating >= star ? "text-yellow-500" : "text-gray-300"}`}
                  onClick={() => setRating(star)}
                />
              ))}
                </div>
                {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
                <div className="flex justify-end gap-4 mt-4">
                  <button
                    className="py-2 px-4 bg-gray-200 rounded-md"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="py-2 px-4 bg-blue-500 text-white rounded-md"
                    onClick={handleRateProduct}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
              )}
              
                 </div>
    </div>
  )
}

export default RightSideProduct