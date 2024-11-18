import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/layout/header/index';
import Footer from './components/layout/footer/index';
import { useDispatch } from 'react-redux';
import { loadCart } from './slices/cart.slice';

const App = () => {
const location = useLocation();

const dispatch = useDispatch();

const user = JSON.parse(localStorage.getItem("user"))

const getSpecificCart = async() => {
  const response = await fetch(`http://localhost:3000/api/cart?user=${user}`);
  const data = await response.json();
  dispatch(loadCart(data))
}

useEffect(() => {
  getSpecificCart();
}, [user]);
  

  return (

    <div>
      <Header />
      <Outlet />
      {location.pathname !== '/cart' && <Footer />}
    </div>
  );
};

export default App;
