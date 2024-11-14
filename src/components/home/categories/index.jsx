import React, { useEffect, useState } from 'react'
import Container from '../../common/containerClass'
import SingleCategory from '../singleCategory/index.jsx'

const Categories = () => {

const [categories, setCategories] = useState([])

const fetchCategories = async() => {
  const response = await fetch("http://localhost:3000/api/categories")
  const data = await response.json()

  setCategories(data)

  }
  
  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <div>
      <Container>
              <div>
                  <h1 className='text-[20px] md:mt-10 lg:mt-12  mb-2 md:text-[24px] lg:text-[28px] font-bold lg:mb-6 md:mb-2'>Categories</h1>
                  <div className='gap-6 flex flex-row overflow-x-scroll scrollbar-hide scroll-smooth'>
            {
              categories && categories.map((category) => {
                return <SingleCategory key={category._id} category={category} categoryId = {category._id} />
              })
                      }
            
            

                         
                  </div>   
              </div>
      </Container>
    </div>
  )
}

export default Categories