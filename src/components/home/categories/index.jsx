import React from 'react'
import Container from '../../common/containerClass'
import SingleCategory from '../singleCategory/index.jsx'

const Categories = () => {
  return (
    <div>
      <Container>
              <div>
                  <h1 className='text-[16px] md:text-[20px] lg:text-[24px] font-semibold lg:mb-2 md:mb-2 mb-1'>Categories</h1>
                  <div className='gap-6 flex flex-row overflow-x-scroll scrollbar-hide scroll-smooth'>
                      <SingleCategory/>


                  </div>   
              </div>
      </Container>
    </div>
  )
}

export default Categories