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
      <div className='border border-[#b4b3b3] w-full my-4'></div>
        <div className='flex flex-col lg:flex-row lg:w-full lg:gap-20'>
            <div className='flex flex-col gap-4'>
            <div>
             <img src={logo} alt="logo" className='w-[80px] h-[30px]' />
            </div>
            <h1 className='text-[#898989] w-[249px] text-[14px] lg:text-[16px] md:text-[16px]'>Worldwide furniture store since 2020. We sell over 1000+ branded products on our website</h1>
            <h2 className='flex items-center gap-2'>
              <MdLocationOn className='text-[#898989] w-5 h-5'/>
              <p className='text-[#898989] text-[14px] lg:text-[16px] md:text-[16px]'>Sawojajar Malang, Indonesia</p>
            </h2>
            <p className='flex items-center gap-2'>
             <FaPhoneAlt className='text-[#898989] w-5 h-5'/>
             <p className='text-[#898989] text-[14px] lg:text-[16px] md:text-[16px]'>+6289 456 3455</p>
            </p>
            <Link className='text-[#898989] text-[14px] lg:text-[16px] md:text-[16px]'>www.oasis.com</Link>
          </div>

         <div className='flex flex-row gap-28'>
          <div className='flex flex-col gap-2 mt-6'>
            <h1 className='font-poppins font-bold text-[20px] lg:text-[24px] md:text-[24px]'>Menu</h1>
            <ul className='text-[#898989] flex flex-col gap-2 text-[14px] lg:text-[16px] md:text-[16px]'>
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
            <h1 className='font-poppins font-bold text-[24px] text-[20px] lg:text-[24px] md:text-[24px]'>Account</h1>
            <ul className='text-[#898989] flex flex-col gap-2 text-[14px] lg:text-[16px] md:text-[16px]'>
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
            <h1 className='font-poppins font-bold text-[24px] text-[20px] lg:text-[24px] md:text-[24px]'>Stay Connected</h1>
            <ul className='text-[#898989] flex flex-col gap-2 text-[14px] lg:text-[16px] md:text-[16px]'>
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
            <h1 className='font-poppins font-bold text-[24px] text-[20px] lg:text-[24px] md:text-[24px]'>Stay Updated</h1>
            
            <div className='flex gap-1'>
            <div className='py-[9px] px-2 lg:py-[11px] lg:px-3 md:py-[11px] md:px-3 bg-[#f4f5f7] w-[200px] md:w-[242px] lg:w-[242px]'>
            <input type="email" placeholder='Enter Your Email' className='bg-[#f4f5f7] outline-none text-[14px] lg:text-[16px] md:text-[16px]' />
            </div>
            <div className='p-[7px] lg:p-[10px] md:p-[10px] bg-[#e89f71] w-[40px] lg:w-[46px] md:w-[46px]'>
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