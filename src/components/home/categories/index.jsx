import React from 'react'
import Container from '../../common/containerClass'
import SingleCategory from '../singleCategory/index.jsx'

const Categories = () => {
  return (
    <div>
      <Container>
              <div>
                  <h1 className='text-[20px] md:mt-10 lg:mt-12  mb-2 md:text-[24px] lg:text-[28px] font-bold lg:mb-6 md:mb-2'>Categories</h1>
                  <div className='gap-6 flex flex-row overflow-x-scroll scrollbar-hide scroll-smooth'>
                      <SingleCategory/>

                         
                  </div>   
              </div>
      </Container>
    </div>
  )
}

export default Categories