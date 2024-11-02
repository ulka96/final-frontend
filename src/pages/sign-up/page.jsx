import React from 'react'
import { Link } from 'react-router-dom';

import Container from "../../components/common/containerClass/index"
import { IoClose } from "react-icons/io5";

// Images
import nightstand from "../../assets/register/nightstand.png"
import google from "../../assets/register/google.png"
import apple from "../../assets/register/apple.png"


const SignUpPage = (props) => {

const handleCreateAccountClick = () => {
    props.closeSignUp();
    props.closeLogin();
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
                                        <div className="flex items-start lg:gap-16 md:gap-24 gap-14">
                                            <div className=" flex h-7 items-center ">
                                                      <button
                                                          onClick={props.closeSignUp}
                                                          className='p-[10px] bg-[#f8f7fb] rounded-full '>
                                               <IoClose className='lg:w-6 lg:h-6 md:w-4 md:h-4 h-4 w-4 text-black hover:text-[#7c71df]'/>
                                           </button>
                                            
                                            </div>
                                        <h2 className="text-[20px]  font-medium text-gray-900" id="slide-over-title">Create an account</h2>
                                        </div>
                                  
                       
                  <div className='flex flex-col items-center justify-center'>
                        <div className='lg:w-[227px] lg:h-[227px] md:w-[227px] md:h-[227px] w-[127px] h-[127px] mt-5 md:mt-8'>
                          <img src={nightstand} alt="nightstand" />
                        </div>  
                    <h1 className='lg:text-[23px] md:text-[23px] text-[18px] lg:my-8 md:my-8 mt-4 mb-8 font-semibold'>Let's get your account set up</h1>
                      <form className='flex flex-col gap-6 lg:w-[353px] md:w-[353px] w-[300px]' >
                        <input type="email" placeholder='Email' className='px-[14px] py-[13px] w-full hover:shadow-2xl shadow-[#f4ebff] hover:border-1 border hover:border-[#d6bbfb] rounded-xl  outline-none' />
                        <input type="text" placeholder='Username' className='px-[14px] py-[13px] w-full hover:shadow-2xl shadow-[#f4ebff] hover:border-1 border hover:border-[#d6bbfb] rounded-xl  outline-none' />
                        <input type="password" placeholder='Password' className='px-[14px] py-[13px] w-full hover:shadow-2xl shadow-[#f4ebff] hover:border-1 border hover:border-[#d6bbfb] rounded-xl  outline-none' />
                        <input type="file" className='ml-2' />
                        </form>
                      
                        <div className='flex flex-row gap-3 justify-center ml-4 md:ml-0 md:mr-7'>
                          <div><input type="checkbox" className='w-4 h-4 mt-8 mb-6'/></div>
                          <p className='text-[#5f6980] text-[15px] w-[280px] mt-6 mb-6 '>I agree to the <Link className='underline'>Terms and Conditions of Furniture</Link> and acknowledge the <Link className='underline'>Privacy Policy</Link></p>
                      </div>
                        
                      <div className='flex lg:w-[353px] md:w-[353px] w-[300px] mb-8 items-center justify-center rounded-3xl border border-transparent bg-[#7c71df] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-60 duration-200'>
                          <button>Create account</button>
                        </div>
                        

                        <div className='flex flex-row gap-1 mb-8'>
                          <p>Already have an account?</p>
                          <Link><p onClick={handleCreateAccountClick} className='text-[#7c71df] font-semibold'>Login</p></Link>

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

export default SignUpPage