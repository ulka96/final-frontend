import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from "./pages/home/page.jsx";
import SignInPage from './pages/sign-in/page.jsx';
import SignUpPage from './pages/sign-up/page.jsx';
import SittingRoomPage from './pages/sittingRoom/page.jsx';
import BedRoomPage from './pages/bedRoom/page.jsx';
import KitchenPage from './pages/kitchen/page.jsx';
import AccessoriesPage from './pages/accessories/page.jsx';
import AllProductsPage from './pages/allProducts/page.jsx';
import ProductDetailsPage from './pages/productDetails/page.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/sign-in',
        element: <SignInPage/>
      },
      {
        path: '/sign-up',
        element: <SignUpPage/>
      },
      {
        path: '/all-products',
        element: <AllProductsPage/>
      },
      {
        path: '/all-products/:productId',
        element: <ProductDetailsPage/>
      },
      {
        path: '/sitting-room',
        element: <SittingRoomPage/>
      },
      {
        path: '/bedroom',
        element: <BedRoomPage/>
      },
      {
        path: '/kitchen',
        element: <KitchenPage/>
      },
      {
        path: '/accessories',
        element: <AccessoriesPage/>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
