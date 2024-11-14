import React, { useEffect, useState } from 'react'
import Container from '../../common/containerClass'
import SingleProduct from '../singleProduct'
import { Link } from 'react-router-dom'




const TopProducts = () => {

  const [topProducts, setTopProducts] = useState([])

  const fetchTopProducts = async() => {
    const response = await fetch("http://localhost:3000/api/products")
    const data = await response.json()

    setTopProducts(data.splice(0,4))
  }

  useEffect(() => {
    fetchTopProducts()
  }, [])


  return (
     <div>
          <Container>
              <div>
          <h1 className='font-bold font-poppins text-[20px] mt-6 mb-3 
                  md:mt-10 lg:mt-12 md:text-[24px]  lg:text-[28px] '>Top Products</h1>
              
             <div className='grid grid-cols-2 grid-rows-3 gap-8 lg:grid-cols-4 '>
            {
              topProducts && topProducts.map((topProduct) => {

                return <SingleProduct key={topProduct._id} topProduct={topProduct} productId={topProduct._id} />
              })
              }
            
            
 
           
          </div>  
          
          <div className='flex justify-center items-center lg:mt-12 md:mt-8 mt-6 mx-auto  lg:py-3 md:py-2 py-1 
          border border-[#b88e2f] md:w-[300px] lg:w-[400px] w-[200px] text-[#b88e2f] hover:shadow-2xl hover:bg-[#b88e2f]  hover:text-white'>
            <Link to="/products">
              <button className='lg:text-[18px] md:text-[16px] text-[14px] font-bold '>Show all</button>
              </Link>
          </div>
                  
                  

             </div>    
          </Container> 
    </div>
  )
}

export default TopProducts