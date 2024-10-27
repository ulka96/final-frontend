import React from 'react'
import Container from '../../common/containerClass'

import logo from "../../../assets/layout/Oasis.png"
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

import { Link } from 'react-router-dom';



const Footer = () => {
  return (

    <div className=''>
      <Container>
        <div className='flex flex-col lg:flex-row'>
          <div className='border border-[#b4b3b3] my-4 w-full'></div>
          <div className='flex flex-col gap-4'>
            <div>
             <img src={logo} alt="logo" className='w-[80px] h-[30px]' />
            </div>
            <h1 className='text-[#898989] w-[249px]'>Worldwide furniture store since 2020. We sell over 1000+ branded products on our website</h1>
            <h2 className='flex items-center gap-2'>
              <MdLocationOn className='text-[#898989] w-5 h-5'/>
              <p className='text-[#898989]'>Sawojajar Malang, Indonesia</p>
            </h2>
            <p className='flex items-center gap-2'>
             <FaPhoneAlt className='text-[#898989] w-5 h-5'/>
             <p className='text-[#898989]'>+6289 456 3455</p>
            </p>
            <Link className='text-[#898989]'>www.oasis.com</Link>
          </div>

         <div className='flex flex-row gap-28'>
          <div className='flex flex-col gap-2 mt-6'>
            <h1 className='font-poppins font-bold text-[24px]'>Menu</h1>
            <ul className='text-[#898989] flex flex-col gap-2'>
              <li>
                <Link>
                  Products
                </Link>
              </li>
              <li>
                <Link>
                  Rooms
                </Link>
              </li>
              <li>
                <Link>
                  Inspirations
                </Link>
              </li>
              <li>
                <Link>
                  About Us
                </Link>
              </li>
              <li>
                <Link>
                Terms & Policy
                </Link>
              </li>
           </ul>
          </div>


          <div className='flex flex-col gap-2 mt-6'>
            <h1 className='font-poppins font-bold text-[24px]'>Account</h1>
            <ul className='text-[#898989] flex flex-col gap-2'>
              <li>
                <Link>
                  My Account
                </Link>
              </li>
              <li>
                <Link>
                  Checkout
                </Link>
              </li>
              <li>
                <Link>
                  My Cart
                </Link>
              </li>
              <li>
                <Link>
                  My Catalog
                </Link>
              </li>
           </ul>
            </div>
          </div>
          
          <div className='flex flex-col gap-2 mt-6'>
            <h1 className='font-poppins font-bold text-[24px]'>Stay Connected</h1>
            <ul className='text-[#898989] flex flex-col gap-2'>
              <li>
                <Link>
                  Facebook
                </Link>
              </li>
              <li>
                <Link>
                  Instagram
                </Link>
              </li>
              <li>
                <Link>
                  Twitter
                </Link>
              </li>
           </ul>
          </div> 
          
          <div className='flex flex-col gap-2 mt-6'> 
            <h1 className='font-poppins font-bold text-[24px]'>Stay Updated</h1>
            
            <div className='flex gap-1'>
            <div className='py-[11px] px-3 bg-[#f4f5f7] w-[242px]'>
            <input type="email" placeholder='Enter Your Email' className='bg-[#f4f5f7] outline-none' />
            </div>
            <div className='p-[10px] bg-[#e89f71] w-[46px]'>
              <FaTelegramPlane className='w-6 h-6 text-white'/>
              </div>
              </div>

            </div> 






       </div>
        
      
      </Container>
    </div>
  )
}

export default Footer