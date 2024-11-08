import { configureStore } from "@reduxjs/toolkit";
// import userSlice from "../slices/user.slice.js";
import authSlice from "../slices/auth.slice.js"

const store = configureStore({
    reducer: {
        // user: userSlice.reducer,
        auth: authSlice
    }
})

export default store