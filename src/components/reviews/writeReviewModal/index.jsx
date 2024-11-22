import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ReviewModal = ({
  showModal,
  setShowModal,
  fetchProductRatings,
  productId,
}) => {
  const [review, setReview] = useState({ rating: 0, comment: "" });
  const [errorNotification, setErrorNotification] = useState("");
  const [successNotification, setSuccessNotification] = useState("");


  const userId = useSelector((state) => state.auth.user?._id);


  const handleReviewSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId,
          userId,
          rating: review.rating,
          comment: review.comment,
        }),
        credentials: "include",
      });

      if (!response.ok) throw new Error("Failed to submit review");

      setSuccessNotification("Review submitted successfully");
    setErrorNotification("");

    // Keep modal open to show the success message
    fetchProductRatings(); // Refresh ratings

    // Close the modal after showing the success notification
    setTimeout(() => {
      setShowModal(false);
    }, 2000); // Delay closing the modal for 2 seconds to let the success message show
  } catch (error) {
    console.error("Error submitting review:", error);
    setErrorNotification("Firstly, rate the product");
    setSuccessNotification("");
  }
    
    
  };

  if (!showModal) return null;


  

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-lg font-bold mb-4">Write a Review</h2>

        {/* Comment Input */}
        <div>
          <label className="block text-sm mb-1">Comment:</label>
          <textarea
            value={review.comment}
            onChange={(e) => setReview({ ...review, comment: e.target.value })}
            className="border p-2 rounded mb-4 w-full"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-2">
          <button
            onClick={() => setShowModal(false)}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleReviewSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>

       {/* Error Modal */}
       {errorNotification && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white rounded-lg p-6 w-full max-w-sm text-center">
      <p className={`text-lg font-medium text-red-600`}>
        {errorNotification}
      </p>
      <button
        onClick={() => setErrorNotification("")}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Close
      </button>
    </div>
  </div>
      )}
      

      {/* Success modal */}
      {successNotification && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white rounded-lg p-6 w-full max-w-sm text-center">
      <p className={`text-lg font-medium text-green-600`}>
        {successNotification}
      </p>
      <button
        onClick={() => setSuccessNotification("")}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Close
      </button>
    </div>
  </div>
)}


    </div>
  );
};

export default ReviewModal;
