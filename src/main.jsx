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
import CartPage from './pages/cart/page.jsx';
import WishlistPage from './pages/wishlist/page.jsx';
import BlogPage from './pages/blog/page.jsx';
import BlogDetailsPage from './pages/blogDetails/page.jsx';
import EmptyCartPage from './pages/emptyCart/page.jsx';
import ConfirmedOrderPage from './pages/confirmedOrder/page.jsx';
import CheckoutPage from './pages/checkOut/page.jsx';
import PaymentPage from './pages/payment/page.jsx';

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
        path: '/cart',
        element: <CartPage/>
      },
      {
        path: '/products',
        element: <AllProductsPage/>
      },
      {
        path: '/products/:productId',
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
      {
        path: '/wishlist',
        element: <WishlistPage/>
      },
      {
        path: '/blog',
        element: <BlogPage/>
      },
      {
        path: '/blog/:blogId',
        element: <BlogDetailsPage/>
      },
      {
        path: '/checkout',
        element: <CheckoutPage/>
      },
      {
        path: '/payment',
        element: <PaymentPage/>
      },

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
