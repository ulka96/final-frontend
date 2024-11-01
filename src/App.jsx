import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/layout/header/index';
import Footer from './components/layout/footer/index';

const App = () => {
  const location = useLocation();

  return (
    <div>
      <Header />
      <Outlet />
      {location.pathname !== '/cart' && <Footer />}
    </div>
  );
};

export default App;
