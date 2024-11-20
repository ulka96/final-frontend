import React, { useEffect, useState } from 'react'
import SpecificReview from '../specificReview'


const SpecificReviews = ({  productId }) => {

  const [reviews, setReviews] = useState([])
  
  const fetchProductReviews = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/reviews/${productId}`);
      const data = await response.json();
      setReviews(data); 
    } catch (error) {
      console.error("Failed to fetch reviews", error);
    }
  };

  console.log(reviews)

  useEffect(() => {
    fetchProductReviews()
  }, [])

  

  return (
      <div>
          
          <section className=" flex flex-col gap-3 md:gap-4 mb-10 w-full md:w-[90%] items-center justify-center ">
        {
          reviews && reviews.map((review) => {
            return <SpecificReview key={review._id} review={review} />
          })
             }
              
              
         </section>



    </div>
  )
}

export default SpecificReviews