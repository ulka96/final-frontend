import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/layout/header/index';
import Footer from './components/layout/footer/index';
import { useDispatch, useSelector } from 'react-redux';
import { loadCart } from './slices/cart.slice';

const App = () => {
const location = useLocation();

const dispatch = useDispatch();

const userId = JSON.parse(localStorage.getItem("userId"))

const getSpecificCart = async () => {
  
    const response = await fetch("http://localhost:3000/api/cart", {
      method: "GET",
      credentials: "include",
    });

  const data = await response.json()
  console.log(data?.cart)

  // dispatch(loadCart(data?.cart))

}

useEffect(() => {
  getSpecificCart()
}, [userId])
  
  return (

    <div>
      <Header />
      <Outlet />
      {location.pathname !== '/cart' && <Footer />}
    </div>
  );
};

export default App;
