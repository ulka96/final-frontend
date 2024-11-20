import React, { useEffect, useMemo, useState } from 'react'


// Components
import SpecificReviews from '../../components/productDetails/specificReviews';
import Container from '../../components/common/containerClass'
import { Link, useParams } from 'react-router-dom';
import RightSideProduct from '../../components/productDetails/rightSideProduct';

// const stars = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const NewArrivalsDetailsPage = () => {

  const [newArrivalDetail, setNewArrivalDetail] = useState(null);  
  const [activeSection, setActiveSection] = useState('description');
  const [ratings, setRatings] = useState(0)

  const { productId } = useParams();
  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // const userId = useSelector((state) => state.auth.user?._id);
  

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

      // Fetch ratings for the product
      const fetchProductRatings = async () => {
        try {
          if (!productId) throw new Error("Product ID is undefined");
          const response = await fetch(`http://localhost:3000/api/rate/${productId}`);
          const data = await response.json();
          setNewArrivalDetail((prev) => ({ ...prev, ratings: data.ratings }));
          setRatings(data)
        } catch (error) {
          console.error("Error fetching product ratings:", error);
        }
  };
       
        useEffect(() => {
          fetchProductRatings();
          fetchNewArrivalsDetails();
      
        }, [productId]);



  if (!newArrivalDetail) {
    return <p>Loading...</p>;
  }


  return (
      <div>
      <Container>

         
      
        <div className='mt-11 flex flex-col'>
                   
          <div className='flex flex-col md:flex-row md:gap-8 lg:flex-row flex-grow'>
            <div className='w-[361px] flex-grow lg:w-[70%] lg:h-[380px] md:w-[100%] md:h-[400px] '>
              <img src={`http://localhost:3000/${newArrivalDetail.productPic}`} 
                alt={newArrivalDetail.title}
                className='w-full md:h-[300px] lg:h-[400px]' />
              </div>
                  

                  <div className='flex flex-col mt-6 md:mt-0 lg:mt-0 w-full flex-grow'>
                    
              


              <RightSideProduct
                newArrivalDetail={newArrivalDetail}
                fetchProductRatings={fetchProductRatings}
                ratings={ratings}
                // averageRating={averageRating}
              />
              

                  
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
              <SpecificReviews
                reviews={newArrivalDetail?.ratings} 
            productId={newArrivalDetail?._id} />
          )}






                            
              </div>
        </Container>
    </div>
  )
}

export default NewArrivalsDetailsPage