import { configureStore } from "@reduxjs/toolkit";
// import userSlice from "../slices/user.slice.js";
import authSlice from "../slices/auth.slice.js"
import wishlistSlice from "../slices/wishlist.slice.js"
import cartSlice from "../slices/cart.slice.js"
import reviewsSlice from "../slices/reviews.slice.js"

const store = configureStore({
    reducer: {
        // user: userSlice.reducer,
        auth: authSlice,
        wishlist: wishlistSlice,
        cart: cartSlice,
        reviews: reviewsSlice
    }
})

export default store