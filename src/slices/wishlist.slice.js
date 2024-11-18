import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
  };
  
  const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
      addToWishlist: (state, action) => {
        const productExists = state.wishlist.some(
          (item) => item._id === action.payload._id
        );
        if (!productExists) {
          state.wishlist.push(action.payload);
          localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
        }
      },
      removeFromWishlist: (state, action) => {
        state.wishlist = state.wishlist.filter(
          (item) => item._id !== action.payload
        );
        localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
      },
      clearWishlist: (state) => {
        state.wishlist = [];
        localStorage.removeItem("wishlist");
      },

      loadWishlist: (state, action) => {
        state.wishlist = action.payload;
      },
    },
  });
  

export const { addToWishlist, removeFromWishlist, clearWishlist, loadWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
