import React, { useState } from 'react'
import Container from '../../common/containerClass'
import SingleProduct from '../singleProduct'




const TopProducts = () => {


  return (
     <div>
          <Container>
              <div>
                  <h1 className='font-bold font-poppins text-[20px] mt-6 mb-3 md:mt-10 lg:mt-12 md:text-[24px]  lg:text-[28px] '>Top Products</h1>
              
             <div className='grid grid-cols-2 grid-rows-3 gap-8 lg:grid-cols-4 '>
              
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
           
          </div>  
          
          <div className='flex justify-center items-center lg:mt-12 md:mt-8 mt-6 mx-auto  lg:py-3 md:py-2 py-1 border border-[#b88e2f] md:w-[300px] lg:w-[400px] w-[200px]'>
            <button className='lg:text-[18px] md:text-[16px] text-[14px] text-[#b88e2f] font-bold '>Show all</button>
          </div>
                  
                  

             </div>    
          </Container> 
    </div>
  )
}

export default TopProducts