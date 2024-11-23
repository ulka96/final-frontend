import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

// Initialize state from localStorage if available
const initialState = {
  isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) || false,
  user: JSON.parse(localStorage.getItem('user')) || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      
      localStorage.setItem('isLoggedIn', JSON.stringify(true));
      // localStorage.setItem('user', JSON.stringify(action.payload));
    },

    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      

      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('user');
    },
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    }
  },
});

export const { login, logout, setUser } = authSlice.actions;
export default authSlice.reducer;
