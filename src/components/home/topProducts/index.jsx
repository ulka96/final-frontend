import React, { useState } from 'react'
import Container from '../../common/containerClass'
import SingleProduct from '../singleProduct'




const TopProducts = () => {


  return (
     <div>
          <Container>
              <div>
                  <h1 className='font-bold font-poppins text-[20px] my-6 '>Top Products</h1>
              
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
          
          <div className='flex justify-center items-center mx-auto py-3 border border-[#b88e2f] w-[200px]'>
            <button className='text-[18px] text-[#b88e2f] font-bold'>Show all</button>
          </div>
                  
                  

             </div>    
          </Container> 
    </div>
  )
}

export default TopProducts