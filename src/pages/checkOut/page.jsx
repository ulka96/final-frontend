
import React from 'react'
import Container from "../../components/common/containerClass/index"
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';


const CheckoutPage = (props) => {

const handlePaymentAndCart = () => {
    props.closeCheckoutCart() 
    props.openPayment()
}

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
                               onClick={props.closeCheckoutCart}
                                className='p-[10px] bg-[#f8f7fb] rounded-full'>
                                <IoClose className='w-6 h-6 text-black hover:text-[#7c71df]'/>
                            </button>   
                            <h3 className='text-[20px] md:ml-28 ml-20 font-semibold'>Checkout</h3>
                            </div>
                        </div>
                            <div className="my-8">
                          <div className='flex flex-col justify-center '>
                                  <div className='lg:ml-7 md:ml-7 ml-4'>
                                  <h1 className='md:text-[20px] text-[18px] text-[#5f6980] font-semibold'>Customer information</h1>
                                  <h2 className='text-start'>Have an account?<span className='text-[#887ee2] ml-1 font-bold'>Login</span></h2>
                                    </div>
                            
                                  <div className='c md:ml-6 lg:ml-6 ml-3' >
                                   <input type="email" placeholder='Email' className='px-[14px] py-[13px] w-full hover:shadow-2xl shadow-[#f4ebff] 
                            hover:border-1 border hover:border-[#d6bbfb]  rounded-xl  outline-none md:mt-6 md:mb-8 mt-6 mb-8' />
                            </div>
                            
                            <h1 className='md:text-[20px] text-[18px] text-[#5f6980] font-semibold lg:ml-7 md:ml-7 ml-4 mb-6'>Shipping address</h1>
                            <form className='flex flex-col gap-6  md:ml-6 lg:ml-6 ml-3' >
                        <input type="text" placeholder='First name' className='px-[14px] py-[13px] lg:w-[353px] md:w-[353px] w-[300px] hover:shadow-2xl shadow-[#f4ebff] hover:border-1 border hover:border-[#d6bbfb] rounded-xl  outline-none' />
                        <input type="text" placeholder='Last name' className='px-[14px] py-[13px] lg:w-[353px] md:w-[353px] w-[300px] hover:shadow-2xl shadow-[#f4ebff] hover:border-1 border hover:border-[#d6bbfb] rounded-xl  outline-none' />
                        <input type="number" placeholder='+1' className='px-[14px] py-[13px] lg:w-[353px] md:w-[353px] w-[300px] hover:shadow-2xl shadow-[#f4ebff] hover:border-1 border hover:border-[#d6bbfb] rounded-xl  outline-none' />
                        <input type="text" placeholder='Address' className='px-[14px] py-[13px] lg:w-[353px] md:w-[353px] w-[300px] hover:shadow-2xl shadow-[#f4ebff] hover:border-1 border hover:border-[#d6bbfb] rounded-xl  outline-none' />
                        <div className='flex flex-row gap-4'>
                        <input type="text" placeholder='City' className='px-[14px] py-[13px] lg:w-[353px] md:w-[168px] w-[140px] hover:shadow-2xl shadow-[#f4ebff] hover:border-1 border hover:border-[#d6bbfb] rounded-xl  outline-none' />
                        <input type="text" placeholder='Country' className='px-[14px] py-[13px] lg:w-[353px] md:w-[168px] w-[140px] hover:shadow-2xl shadow-[#f4ebff] hover:border-1 border hover:border-[#d6bbfb] rounded-xl  outline-none' />
                        </div>   
                            </form>
                            



                                        </div>
                                      </div>  
                <div className="mt-6 w-full">
              <div className="flex items-center justify-center rounded-md border border-transparent bg-[#7c71df] px-6 py-3 text-base 
            font-medium text-white shadow-sm hover:bg-opacity-60 mt-16
            duration-200"><button onClick={handlePaymentAndCart}>Proceed to payment</button></div>
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

export default CheckoutPage