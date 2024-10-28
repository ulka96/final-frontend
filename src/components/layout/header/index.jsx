import React, { useState } from 'react'

// React router
import { Link } from 'react-router-dom';

// React icons
import { HiMiniBars3 } from "react-icons/hi2";
import { HiX } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCart } from "react-icons/pi";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

// Components
import Container from "../../common/containerClass/index"

// Images
import logo from "../../../../src/assets/layout/Oasis.png"



const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const navElements = [
    {
      "id": "1",
      "title": "Home"
    },
    {
      "id": "2",
      "title": "Shop"
    },
    {
      "id": "3",
      "title": "Categories"
    },
    {
      "id": "4",
      "title": "Blog"
  }
]  
  return (
    <Container>
      <div className='mt-[11px]'>
        <div className='flex justify-between items-center'>
        <div>
           <img src={logo} alt="logo" className='w-[80px] h-[30px]' />
          </div>

          <ul className='hidden lg:flex lg:gap-10 lg:text-[14px] lg:font-semibold '>
          {
            navElements && navElements.map((elem) => {
              return <Link
                className="hover:text-gray-400 transition duration-200">
                <li key={elem.id}>{elem.title}</li>
              </Link>
            })
          }
          </ul>

          <div className='lg:flex gap-[30px] hidden md:hidden '>

            <div className='p-[19px] rounded-full bg-[#f8f7fb]'>
              <CiHeart className='w-6 h-6 text-[#5e4fa8]'/>
            </div>

            <div className='p-[19px] rounded-full bg-[#f8f7fb] relative'>
              <PiShoppingCart className='w-6 h-6 text-[#5e4fa8]' />
              <span className='h-6 w-6 rounded-full bg-[#5e4fa8] border border-[#5e4fa8] text-white flex 
            items-center justify-center text-xs font-semibold absolute -right-[10px] top-3'>2</span>
            </div>

            <div className='py-4 px-5 rounded-full bg-[#7c71df]'>
                <Link className='flex gap-3 items-center justify-center'>
                  <p className='text-[16px] font-semibold text-white'>Get Started</p>
                  <LiaLongArrowAltRightSolid className='w-6 h-6 text-white'/>
                </Link>
            </div>

            <div className='lg:flex items-center hidden md:hidden '>
            <CgProfile className='w-11 h-11 text-gray-500 ' />
            </div>

          </div>


        
            {/* Mobile menu icon */}
          <div className="lg:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <HiX className='w-8 h-8' /> // Close icon when menu is open
            ) : (
              <HiMiniBars3 className='w-8 h-8' /> // Bar icon when menu is closed
            )}
          </div>
      
        </div>

                {/* Mobile menu items */}
                {isMenuOpen && (
          <ul className='lg:hidden  flex flex-col z-10  md:z-10 gap-4 mt-4 p-6 text-[14px] absolute right-5 top-[70px] bg-white shadow-lg rounded-lg border border-gray-200 text-gray-700'>
            <li className='flex items-center gap-2 mb-3'>
              <CgProfile className='w-6 h-6 text-gray-500' />
              <span className='text-gray-600'>Profile</span>
            </li>
            <Link className='hover:text-gray-900 transition duration-200'>My Orders</Link>
            <Link className='hover:text-gray-900 transition duration-200'>My Favourites</Link>
            {navElements.map((elem) => (
              <Link key={elem.id} className='hover:text-gray-900 transition duration-200'>
                <li>{elem.title}</li>
              </Link>
            ))}
            <Link className='hover:text-gray-900 transition duration-200'>Logout</Link>
          </ul>
        )}


        
    
      </div>
      
    </Container>
    
  )
}

export default Header