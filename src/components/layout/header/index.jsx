import React, { useState } from 'react';

// React router
import { Link } from 'react-router-dom';

// Redux hooks
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, setUser } from '../../../slices/auth.slice.js';

// React icons
import { HiMiniBars3 } from 'react-icons/hi2';
import { HiX } from 'react-icons/hi';
import { CgProfile } from 'react-icons/cg';
import { CiHeart } from 'react-icons/ci';
import { PiShoppingCart } from 'react-icons/pi';
import { LiaLongArrowAltRightSolid } from 'react-icons/lia';

// Components
import Container from '../../common/containerClass/index';

// Images
import logo from '../../../../src/assets/layout/Oasis.png';
import CartPage from '../../../pages/cart/page';
import SignInPage from '../../../pages/sign-in/page';
import SignUpPage from '../../../pages/sign-up/page';
// import WishlistPage from '../../../pages/wishlist/page';
import EmptyCartPage from '../../../pages/emptyCart/page';
import CheckoutPage from '../../../pages/checkOut/page';
import PaymentPage from '../../../pages/payment/page';
import { clearWishlist } from '../../../slices/wishlist.slice.js';
import { clearCart } from '../../../slices/cart.slice.js';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isEmptyCartOpen, setIsEmptyCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const wishlist = useSelector((state) => state.wishlist.wishlist)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWishlistClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault(); 
      setIsModalOpen(true); 
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);

  };


  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleEmptyCart = () => {
    setIsEmptyCartOpen(!isEmptyCartOpen);
  };

  const toggleCheckout = () => {
    setIsCheckoutOpen(!isCheckoutOpen);
  };

  const togglePayment = () => {
    setIsPaymentOpen(!isPaymentOpen);
  };

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSignUp = () => {
    setIsSignUpOpen(!isSignUpOpen);
  };

  const navElements = [
    {
      id: '1',
      title: 'Home',
      href: '/',
    },
    {
      id: '2',
      title: 'Shop',
      href: '/products',
    },
    {
      id: '3',
      title: 'Categories',
    },
    {
      id: '4',
      title: 'Blog',
      href: '/blog',
    },
  ];

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.cart.cart);

  console.log(user);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/log-out', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error('Logout failed');
      }
  
      // Dispatch actions to clear Redux state
      dispatch(logout());
      dispatch(clearCart());
      dispatch(clearWishlist());
  
      // Also clear the cart and wishlist from localStorage
      localStorage.removeItem('cart');
      localStorage.removeItem('wishlist');
  
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };
  

  return (
    <Container>
      <div className="mt-[15px]">
        <div className="flex justify-between items-center">
          <div>
            <img src={logo} alt="logo" className="w-[80px] h-[30px]" />
          </div>

          <ul className="hidden lg:flex lg:gap-10 lg:text-[18px] lg:font-semibold ">
            {navElements &&
              navElements.map((elem) => {
                return (
                  <Link
                    to={elem.href}
                    className="hover:text-gray-400 transition duration-200"
                  >
                    <li key={elem.id}>{elem.title}</li>
                  </Link>
                );
              })}
          </ul>

          <div className="lg:flex gap-[30px] hidden md:hidden ">
            <div className="p-[19px] rounded-full relative bg-[#f8f7fb]">
              <Link to="/wishlist" onClick={handleWishlistClick}>
                <CiHeart className="w-6 h-6 text-[#5e4fa8]" />
              </Link>
              <span
                className="h-6 w-6 rounded-full bg-[#5e4fa8] border border-[#5e4fa8] text-white flex 
            items-center justify-center text-xs font-semibold absolute -right-[10px] top-3"
              >
                {isLoggedIn ? wishlist?.length : 0}
              </span>
            </div>

            {/* Modal */}
        {isModalOpen && (
          <div onClick={closeModal}  className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-lg font-semibold mb-4">
                You must be logged in to view your wishlist.
              </h2>
              <button
                onClick={toggleLogin}
                className="px-4 py-2 bg-[#5e4fa8] text-white rounded-md hover:bg-[#4e3e99]"
              >
                Login
                  </button>

            </div>
          </div>
        )}

            <div className="p-[19px] rounded-full bg-[#f8f7fb] relative">
              <button
                onClick={toggleCart}>
                <PiShoppingCart className="w-6 h-6 text-[#5e4fa8] " />
              </button>
              <span
                className="h-6 w-6 rounded-full bg-[#5e4fa8] border border-[#5e4fa8] text-white flex 
            items-center justify-center text-xs font-semibold absolute -right-[10px] top-3"
              >
                {isLoggedIn ? cart?.length : 0}
              </span>
            </div>

            <div className="py-4 px-5 rounded-full bg-[#7c71df] items-center justify-center my-auto">
              <Link className="flex gap-3 items-center justify-center">
                {!isLoggedIn ? (
                  <button onClick={toggleLogin}>
                    <p className="text-[16px] font-semibold text-white">
                      Get Started
                    </p>
                  </button>
                ) : (
                  <button onClick={handleLogout}>
                    <p className="text-[16px] font-semibold text-white">
                      Logout
                    </p>
                  </button>
                )}
                <LiaLongArrowAltRightSolid className="w-6 h-6 text-white" />
              </Link>
            </div>

            {isLoggedIn && user.profilePic !== null && (
              <img
                src={`http://localhost:3000/${user?.profilePic}`}
                alt="profile"
                className="w-10 h-10 rounded-full lg:mt-3"
              />
            )}

            {!isLoggedIn || isLoggedIn && user.profilePic === null && (
              <CgProfile className="w-10 h-10 text-gray-500 lg:mt-3" />
            )}

            {isLoggedIn && <div className='lg:mt-5 font-semibold'>Welcome, {user?.userName}</div>}
          </div>

          {/* Mobile menu icon */}
          <div className="lg:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <HiX className="w-8 h-8" />
            ) : (
              <HiMiniBars3 className="w-8 h-8" />
            )}
          </div>
        </div>



        {/* Mobile menu items */}
        {isMenuOpen && (
          <ul className="lg:hidden  flex flex-col z-10  md:z-10 gap-4 mt-4 p-6 text-[14px] absolute right-5 top-[70px] bg-white shadow-lg rounded-lg border border-gray-200 text-gray-700">
            <li className="flex items-center gap-2 mb-3">
              {isLoggedIn && user.profilePic !== null && <img
                src={`http://localhost:3000/${user?.profilePic}`}
                alt="profile"
                className="w-6 h-6 rounded-full"
              />}
          
          {!isLoggedIn || isLoggedIn && user.profilePic === null && (
              <CgProfile className="w-6 h-6 text-gray-500 " />
            )}
              
              {isLoggedIn ?
                <div className='font-semibold'>Welcome, {user?.userName}</div>
              : <Link className="hover:text-gray-900 transition duration-200">
              <button onClick={toggleLogin}>Login</button>
            </Link>
              
              }

              
            </li>
            {isLoggedIn && (
              <Link
                onClick={toggleCart}
                className="hover:text-gray-900 transition duration-200"
              >
                My Orders
              </Link>
            )}
            {isLoggedIn && (
              <Link
                to="/wishlist"
                className="hover:text-gray-900 transition duration-200"
              >
                My Favourites
              </Link>
            )}
            {navElements.map((elem) => (
              <Link
                key={elem.id}
                className="hover:text-gray-900 transition  duration-200"
              >
                <Link to={elem.href}>
                  <li>{elem.title}</li>
                </Link>
              </Link>
            ))}
            {/* {!isLoggedIn && (
              <Link className="hover:text-gray-900 transition duration-200">
                <button onClick={toggleLogin}>Login</button>
              </Link>
            )} */}
            {isLoggedIn && (
              <button
                onClick={handleLogout}
                className="hover:text-gray-900 transition duration-200 mr-36"
              >
                Logout
              </button>
            )}
          </ul>
        )}

        {isCartOpen && (
          <CartPage closeCart={toggleCart} openCheckout={toggleCheckout} />
        )}
        {isEmptyCartOpen && <EmptyCartPage closeEmptyCart={toggleEmptyCart} />}
        {isCheckoutOpen && (
          <CheckoutPage
            closeCheckoutCart={toggleCheckout}
            openPayment={togglePayment}
          />
        )}
        {isPaymentOpen && <PaymentPage closePayment={togglePayment} />}

        {isLoginOpen && (
          <SignInPage closeLogin={toggleLogin} toggleSignUp={toggleSignUp} />
        )}
        {isSignUpOpen && (
          <SignUpPage closeSignUp={toggleSignUp} closeLogin={toggleLogin} />
        )}
      </div>
    </Container>
  );
};

export default Header;
