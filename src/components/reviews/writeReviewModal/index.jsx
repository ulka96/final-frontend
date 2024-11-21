import React, { useState } from 'react'

const ReviewModal = ({ showModal, setShowModal, fetchProductRatings, productId }) => {
    
    const [review, setReview] = useState({ comment: '' });

    console.log(review)
    
    const handleReviewSubmit = async () => {
        try {
          const response = await fetch(`http://localhost:3000/api/reviews`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              productId,
              userId,
              rating: review.rating,
              comment: review.comment,
            }),
            credentials: "include"
          });
            
            
    
          if (!response.ok) throw new Error('Failed to submit review');
          alert('Review submitted successfully!');
          setShowModal(false);
          fetchProductRatings(); // Refresh ratings
        } catch (error) {
          console.error('Error submitting review:', error);
          alert('Error submitting review');
        }
    };
    

  return (
         
        <div>
          
          {/* <h2 className="text-lg font-bold mb-4">Write a Review</h2> */}

          <div>
            <label className="block text-sm">Comment:</label>
            <textarea
              value={review.comment}
              onChange={(e) => setReview({ ...review, comment: e.target.value })}
              className="border p-2 rounded mb-4 w-full"
            />
          </div>
          <button
            onClick={handleReviewSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit Review
          </button>
    </div>
  )
}

export default ReviewModal