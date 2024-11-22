import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/layout/header/index';
import Footer from './components/layout/footer/index';
import { useDispatch, useSelector } from 'react-redux';
import { loadCart } from './slices/cart.slice';

const App = () => {
const location = useLocation();

// const dispatch = useDispatch();

  // const user = JSON.parse(localStorage.getItem("user"))
  
// const user = useSelector((state) => state.auth.user)

// const getSpecificCart = async() => {
//   const response = await fetch(`http://localhost:3000/api/cart?user=${user}`);
//   const data = await response.json();

//   console.log(data)
  // dispatch(loadCart(data))
// }

// useEffect(() => {
//   getSpecificCart();
// }, []);
  


  return (

    <div>
      <Header />
      <Outlet />
      {location.pathname !== '/cart' && <Footer />}
    </div>
  );
};

export default App;
