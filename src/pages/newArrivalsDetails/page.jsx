import React, { useEffect, useState } from 'react'

// React icons
import { FaStar } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";

// Images
import tables from "../../assets/home/new5.png"
import box from "../../assets/products/Box.png"
import leaf from "../../assets/products/Leaf.png"

// Components
import SpecificReviews from '../../components/productDetails/specificReviews';
import Container from '../../components/common/containerClass'
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ErrorModal from '../../components/common/errorModalRating'; 

const stars = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const NewArrivalsDetailsPage = () => {

  const [newArrivalDetail, setNewArrivalDetail] = useState(null);  
  const [activeSection, setActiveSection] = useState('description');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);

  const { productId } = useParams();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userId = useSelector((state) => state.auth.user);


  const fetchNewArrivalsDetails = async () => {
    try {
      if (!productId) throw new Error("Product ID is undefined");
      const response = await fetch(`http://localhost:3000/api/new-arrivals/${productId}`);
      const data = await response.json();
      setNewArrivalDetail(data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  console.log(newArrivalDetail)

  useEffect(() => {
    fetchNewArrivalsDetails();
  }, [productId]);

  if (!newArrivalDetail) {
    return <p>Loading...</p>; 
  }

  const colors = newArrivalDetail?.color?.length ? JSON.parse(newArrivalDetail.color[0]) : [];
  

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
          comment,
          userId,
        }),
      });

      const data = await response.json();

      if (response.status === 200) {
        setErrorMessage("");
        setIsModalOpen(false);
        fetchNewArrivalsDetails();
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      setErrorMessage("An error occurred while submitting your rating.");
    }
  };

  const hasRated = newArrivalDetail.ratings?.map((singleRating) => singleRating.user === userId)

  
  const handleStarClick = (starId) => {
    if (isLoggedIn) {
      if (!hasRated) {
        setRating(starId);
        setIsModalOpen(true); // Open the modal
      } else {
        setErrorMessage("You have already rated this product.");
        setShowErrorModal(true);  // Show the error modal
      }
    } else {
      setErrorMessage("Please log in to rate this product.");
      setShowErrorModal(true);  // Show the error modal
    }
  };
  

  return (
      <div>
      <Container>

         {/* Error Modal */}
         {showErrorModal && (
          <ErrorModal 
            message={errorMessage} 
            onClose={() => setShowErrorModal(false)}  // Close modal
          />
        )}
      
        <div className='mt-11 flex flex-col'>
                   
          <div className='flex flex-col md:flex-row md:gap-8 lg:flex-row flex-grow'>
            <div className='w-[361px] flex-grow lg:w-[70%] lg:h-[380px] md:w-[100%] md:h-[400px] '>
              <img src={`http://localhost:3000/${newArrivalDetail.productPic}`} 
                alt={newArrivalDetail.title}
                className='w-full md:h-[300px] lg:h-[400px]' />
              </div>
                  

                  <div className='flex flex-col mt-6 md:mt-0 lg:mt-0 w-full flex-grow'>
                      <h1 className='text-[24px] md:text-[18px] lg:text-[28px] font-bold'>{newArrivalDetail.title}</h1>
                    <div className='flex flex-row items-center gap-4 '>
                    <div className="flex flex-row items-center gap-1 ">
                   {stars.map((star, index) => (
                 <FaStar
                 key={star.id}
                 className="text-yellow-500 cursor-pointer"
                 onClick={() => handleStarClick(star.id)}
               />
                    ))}
                        </div>
                          <p className='text-[14px] lg:text-[20px] font-poppins text-[#5f6980]'>{newArrivalDetail.ratings?.length} Customer Review</p>
                      </div>
                      
                      <div className='flex flex-row items-center gap-3 mt-5 md:mt-3'>
                <h1 className='text-[26px] md:text-[20px] lg:text-[24px] text-[#8965c8] font-poppins font-semibold'>${newArrivalDetail.discountedPrice}</h1>
                          <h2 className='text-[16px] md:text-[14px] lg:text-[18px]  text-[#bfc3cc] line-through '>${newArrivalDetail.price}</h2>
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
                 </div>
              

                  </div>
                  </div>
          

              
                  {/* Toggle Section */}
          <div className='border border-[#d9d9d9] w-full my-6'></div>
          <div className='flex flex-row justify-center items-center gap-12 my-4'>
            <h2
              onClick={() => setActiveSection('description')}
              className={`text-[16px] md:text-[18px] cursor-pointer font-poppins ${activeSection === 'description' ? 'font-bold' : 'text-[#9f9f9f]'}`}
            >
              Description
            </h2>
            <h3
              onClick={() => setActiveSection('reviews')}
              className={`text-[16px] md:text-[18px] cursor-pointer font-poppins ${activeSection === 'reviews' ? 'font-bold' : 'text-[#9f9f9f]'}`}
            >
              Reviews [5]
            </h3>
            {activeSection === 'reviews' && <div className='p-2 border border-black rounded-lg hover:text-white hover:bg-black'>
              <button>
                Write a review
              </button>
            </div>}
          </div>

          {/* Conditional Rendering */}
          {activeSection === 'description' ? (
            <p className='text-[12px] md:text-[14px] lg:text-[16px] text-[#9f9f9f] text-justify'>
              {newArrivalDetail.description}
            </p>
          ) : (
            <SpecificReviews />
          )}



                    {/* Modal */}
                    {isModalOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-lg font-bold mb-4">Rate Product</h2>
                <div className="flex gap-2">
                  {stars.map((star, index) => (
                    <FaStar
                      key={index}
                      className={`cursor-pointer ${rating >= star.id ? "text-yellow-500" : "text-gray-300"}`}
                      onClick={() => setRating(star.id)}
                    />
                  ))}
                </div>
                <textarea
                  placeholder="Write your comment here..."
                  className="w-full mt-4 p-2 border rounded-md"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
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
        </Container>
    </div>
  )
}

export default NewArrivalsDetailsPage