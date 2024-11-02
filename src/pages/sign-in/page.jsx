import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import Container from "../../components/common/containerClass/index"
import { IoClose } from "react-icons/io5";

// Images
import plant from "../../assets/register/plant.png"
import google from "../../assets/register/google.png"
import apple from "../../assets/register/apple.png"


const SignInPage = (props) => {

const handleCreateAccountClick = () => {
    props.closeLogin();
    props.toggleSignUp();
  };

  
  return (
      <div>
          <Container>
        
            <div className="relative z-10  w-full overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <div className="pointer-events-auto w-screen max-w-md">
                                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                    <div className="flex-1  px-4 py-6 sm:px-6">
                                        <div className="flex items-start lg:gap-28 md:gap-36 gap-24">
                                            <div className=" flex h-7 items-center ">
                                                      <button
                                                          onClick={props.closeLogin}
                                                          className='p-[10px] bg-[#f8f7fb] rounded-full '>
                                               <IoClose className='lg:w-6 lg:h-6 md:w-4 md:h-4 h-4 w-4 text-black hover:text-[#7c71df]'/>
                                           </button>
                                            
                                            </div>
                                        <h2 className="text-[20px]  font-medium text-gray-900" id="slide-over-title">Login</h2>
                                        </div>
                                  
                      
                  <div className='flex flex-col items-center justify-center'>
                        <div className='lg:w-[227px] lg:h-[227px] md:w-[227px] md:h-[227px] w-[127px] h-[127px] mt-5 md:mt-8'>
                          <img src={plant} alt="plant" />
                        </div>  
                    <h1 className='lg:text-[23px] md:text-[23px] text-[18px] lg:my-8 md:my-8 mt-4 mb-8 font-semibold'>Welcome back</h1>
                      <form className='flex flex-col gap-6 lg:w-[353px] md:w-[353px] w-[300px]' >
                        <input type="text" placeholder='Username' className='px-[14px] py-[13px] w-full hover:shadow-2xl shadow-[#f4ebff] hover:border-1 border hover:border-[#d6bbfb] rounded-xl  outline-none' />
                        <input type="password" placeholder='Password' className='px-[14px] py-[13px] w-full hover:shadow-2xl shadow-[#f4ebff] hover:border-1 border hover:border-[#d6bbfb] rounded-xl  outline-none' />
                        </form>
                      
                    <Link><p className='text-[#7c71df] my-6 lg:ml-56 md:ml-56 ml-36 font-semibold'>Forgot password ?</p></Link>

                      <div className='flex lg:w-[353px] md:w-[353px] w-[300px] mb-8 items-center justify-center rounded-3xl border border-transparent bg-[#7c71df] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-60 duration-200'>
                          <button>Login</button>
                        </div>
                        
                        <div className='flex flex-row items-center'>
                         <div className='border border-[#afb4bf] lg:w-[145px] md:w-[145px] w-[100px] h-0'></div>
                          <p className='text-[#5f6980] mx-5'>OR</p>
                          <div className='border border-[#afb4bf] lg:w-[145px] md:w-[145px] w-[100px] h-0'></div>
                        </div>
                     
                        <div className='flex flex-row gap-3 lg:w-[353px] md:w-[353px] w-[300px] my-8 items-center justify-center rounded-3xl border px-6 py-3 text-base font-medium duration-200'>
                          <img src={google} alt="google" className='w-6 h-6' />
                          <button>Continue with Google</button>
                        </div>

                        <div className='flex flex-row gap-3 lg:w-[353px] md:w-[353px] w-[300px] mb-8 items-center justify-center rounded-3xl border px-6 py-3 text-base font-medium duration-200'>
                          <img src={apple} alt="apple" className='w-6 h-6' />
                          <button>Continue with Apple</button>
                        </div>

                        <div className='flex flex-row gap-1 mb-8'>
                          <p>First time here?</p>
                          <Link><button
                            onClick={handleCreateAccountClick}
                             className='text-[#7c71df] font-semibold'>Create an account</button></Link>

                        </div>


                  </div>

                                    
                                        
                                    
                                      
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>             


          </Container>
    </div>
  )
}

export default SignInPage