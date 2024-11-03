
import React from 'react'
import Container from "../../components/common/containerClass/index"
import { IoClose } from "react-icons/io5";

import tree from "../../assets/common/tree.png"
import { Link } from 'react-router-dom';


const ConfirmedOrderPage = (props) => {
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
                                onClick={props.closeCart}
                                className='p-[10px] bg-[#f8f7fb] rounded-full'>
                                <IoClose className='w-6 h-6 text-black hover:text-[#7c71df]'/>
                            </button>                    
                            </div>
                        </div>
                            <div className="my-8">
                                <div className='flex flex-col justify-center items-center'>
                                    <div>
                                        <img src={tree} alt="tree" className='md:w-[300px] md:h-[300px]' />
                                    </div>
                                         <h2 className='text-[23px] mt-8 lg:mb-6  md:mb-8 '>Your Order is Confirmed!</h2>
                                         <h3 className='text-[#5f6980] text-center lg:mb-24'>Thank you for shopping with us! Your beautiful new furniture is on its way and will be with you soon. Get ready to transform your space!</h3>                                      
                                         </div>
                                      </div>  
                <div className="mt-6 w-full">
              <Link to="" className="flex items-center justify-center rounded-md border border-transparent bg-[#7c71df] px-6 py-3 text-base 
            font-medium text-white shadow-sm hover:bg-opacity-60
            duration-200"><button>Done</button></Link>
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

export default ConfirmedOrderPage