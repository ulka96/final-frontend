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
              <div className='flex flex-row lg:my-[88px] lg:gap-[92px] justify-center' >
                  <div className='flex flex-row lg:gap-6 items-center'>
                      <div>
                          <GrTrophy className='lg:w-10 lg:h-10'/>
                      </div>
                      <div className='flex flex-col'>
                          <h1 className='lg:text-[18px] font-semibold'>High Quality</h1>
                          <p className='text-[#afafaf]'>crafted from top materials</p>
                      </div>      
                  </div>

                  <div className='flex flex-row lg:gap-6 items-center'>
                      <div>
                          <VscWorkspaceTrusted className='lg:w-10 lg:h-10'/>
                      </div>
                      <div className='flex flex-col'>
                          <h1 className='lg:text-[18px] font-semibold'>Warrany Protection</h1>
                          <p className='text-[#afafaf]'>Over 2 years</p>
                      </div>      
                  </div>

                  <div className='flex flex-row lg:gap-6 items-center'>
                      <div>
                          <img src={shipping} alt="shipping" className='lg:w-10 lg:h-10' />
                      </div>
                      <div className='flex flex-col'>
                          <h1 className='lg:text-[18px] font-semibold'>Free Shipping</h1>
                          <p className='text-[#afafaf]'>Order over 150 $</p>
                      </div>      
                  </div>

                  <div className='flex flex-row lg:gap-6 items-center'>
                      <div>
                          <BiSupport className='lg:w-10 lg:h-10'/>
                      </div>
                      <div className='flex flex-col'>
                          <h1 className='lg:text-[18px] font-semibold'>24 / 7 Support</h1>
                          <p className='text-[#afafaf]'>Dedicated support</p>
                      </div>      
                  </div>
                  
                  

              </div>
          </Container>
    </div>
  )
}

export default Satisfaction