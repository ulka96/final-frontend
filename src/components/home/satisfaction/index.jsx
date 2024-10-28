import React from 'react'

// React icons
import { GrTrophy } from "react-icons/gr";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { BiSupport } from "react-icons/bi";


// Images
import shipping from "../../../assets/home/shipping.png"

// Component
import Container from "../../common/containerClass/index"


const Satisfaction = () => {
  return (
      <div>
          <Container>
              <div className='flex flex-col gap-6 lg:flex-row md:flex-row my-7 lg:my-[88px] md:my-[55px] lg:gap-[122px] md:gap-[22px] justify-center' >
                  
                  <div className='flex flex-row gap-8 '>
                  <div className='flex flex-row lg:gap-6 md:gap-4 gap-2 items-center'>
                      <div>
                          <GrTrophy className='w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10'/>
                      </div>
                      <div className='flex flex-col'>
                          <h1 className='lg:text-[18px] md:text-[14px] text-[14px] font-semibold'>High Quality</h1>
                          <p className='text-[#afafaf] lg:text-[16px] md:text-[12px] text-[12px]'>crafted from top materials</p>
                      </div>      
                  </div>

                  <div className='flex flex-row lg:gap-6 md:gap-4 gap-2  items-center'>
                      <div>
                          <VscWorkspaceTrusted className='w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10'/>
                      </div>
                      <div className='flex flex-col'>
                          <h1 className='lg:text-[18px] md:text-[14px] text-[14px] font-semibold'>Warrany Protection</h1>
                          <p className='text-[#afafaf] lg:text-[16px] md:text-[12px] text-[12px]'>Over 2 years</p>
                      </div>      
                      </div>
                  </div>


                 <div className='flex flex-row gap-20 md:gap-8'>
                  <div className='flex flex-row lg:gap-6 md:gap-4 gap-2  items-center'>
                      <div>
                          <img src={shipping} alt="shipping" className='w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10' />
                      </div>
                      <div className='flex flex-col'>
                          <h1 className='lg:text-[18px] md:text-[14px] text-[14px] font-semibold'>Free Shipping</h1>
                          <p className='text-[#afafaf] lg:text-[16px] md:text-[12px] text-[12px]'>Order over 150 $</p>
                      </div>      
                  </div>

                  <div className='flex flex-row lg:gap-6 md:gap-4 gap-2  items-center'>
                      <div>
                          <BiSupport className='w-6 h-6 lg:w-10 lg:h-10 md:w-8 md:h-8'/>
                      </div>
                      <div className='flex flex-col'>
                          <h1 className='lg:text-[18px] font-semibold md:text-[14px] text-[14px] '>24 / 7 Support</h1>
                          <p className='text-[#afafaf] lg:text-[16px] md:text-[12px] text-[12px]'>Dedicated support</p>
                      </div>      
                      </div>
                </div>
                  
                  

              </div>
          </Container>
    </div>
  )
}

export default Satisfaction