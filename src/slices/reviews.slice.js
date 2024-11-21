import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reviews: [],
  };
  
  const reviewsSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {
      getReviews: (state, action) => {
          state.reviews = action.payload
      }
    },
  });
  

export const { getReviews} = reviewsSlice.actions;

export default reviewsSlice.reducer;
