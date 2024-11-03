
import React from 'react'
import Container from "../../components/common/containerClass/index"
import { IoClose } from "react-icons/io5";

import { Link } from 'react-router-dom';
import mastercard from "../../assets/common/mastercard.png"


const PaymentPage = (props) => {
  return (
      <div>
          <Container>
        <div>
            <div className="relative z-10 w-full" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <div className="pointer-events-auto w-screen max-w-md">
                                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6  ">
                                <div className="flex items-start gap-28">
                                    <div className=" flex h-7 items-center">
                                <button
                               onClick={props.closePayment}
                                className='p-[10px] bg-[#f8f7fb] rounded-full'>
                                <IoClose className='w-6 h-6 text-black hover:text-[#7c71df]'/>
                            </button>   
                            <h3 className='text-[20px] md:ml-28 ml-20 font-semibold'>Payment</h3>
                            </div>
                        </div>
                            <div className="my-8">
                          <div className='flex flex-col justify-center '>

                          <form className='flex flex-col gap-6 md:ml-6 lg:ml-6 ml-3 ' >
                            <div className='w-[353px]  relative' >
                                <div className='absolute lg:top-10 lg:left-3 md:top-10 md:left-3 top-4 left-2'>
                                    <img src={mastercard} alt="mastercard" className='w-6 h-6 ' />
                                </div>                  
                            <input type="number" placeholder='Card number'  className='  px-[44px] py-[13px] lg:w-[353px] md:w-[353px] w-[300px] hover:shadow-2xl shadow-[#f4ebff] 
                            hover:border-1 border hover:border-[#d6bbfb]  rounded-xl  outline-none md:mt-6 md:mb-6 mb-6' />
                            <div className='flex flex-row gap-4'>
                            <input type="text" placeholder='Exp. date' className='px-[14px] py-[13px] lg:w-[353px] md:w-[168px] w-[140px] hover:shadow-2xl shadow-[#f4ebff] hover:border-1 border hover:border-[#d6bbfb] rounded-xl  outline-none' />
                            <input type="number" placeholder='CVV' className='px-[14px] py-[13px] lg:w-[353px] md:w-[168px] w-[140px] hover:shadow-2xl shadow-[#f4ebff] hover:border-1 border hover:border-[#d6bbfb] rounded-xl  outline-none' />
                            </div>                            
                            </div>
                           <input type="text" placeholder='Name on card' className='px-[14px] py-[13px] lg:w-[353px] md:w-[353px] w-[300px] hover:shadow-2xl shadow-[#f4ebff] hover:border-1 border hover:border-[#d6bbfb] rounded-xl  outline-none' />
                            </form>
                            



                                        </div>
                                      </div>  
                <div className="md:mt-6 lg:mt-6 mt-20 w-full">
              <Link to="" className="flex items-center justify-center rounded-md border border-transparent bg-[#7c71df] px-6 py-3 text-base 
            font-medium text-white shadow-sm hover:bg-opacity-60
            duration-200 lg:w-[353px] md:w-[353px] w-[300px] ml-3 md:ml-6"><button>Pay Now</button></Link>
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

export default PaymentPage