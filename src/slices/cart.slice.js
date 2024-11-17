import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find((item) => item.product._id === product._id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ product, quantity: 1 });
          }
        
      localStorage.setItem("cart", JSON.stringify(state.cart)); 
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.filter((item) => item.product._id !== productId);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const existingProduct = state.cart.find((item) => item.product._id === productId);

      if (existingProduct) {
        existingProduct.quantity = quantity;

        if (quantity === 0) {
          state.cart = state.cart.filter((item) => item.product._id !== productId);
        }
      }
      localStorage.setItem("cart", JSON.stringify(state.cart)); 
      },
    
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
