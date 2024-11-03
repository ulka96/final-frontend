import React from 'react'
import Container from "../../components/common/containerClass/index"

import empty from "../../assets/common/empty.png"
import { Link } from 'react-router-dom';


const EmptyCartPage = (props) => {

//     const handleEmptyCart = () => {
//         props.closeEmptyCart()
// }
  return (
      <div>
          <Container>
        <div>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='md:text-[23px] md:mt-[128px] md:mb-8 lg:text-[25px] text-[20px]'>Your cart is empty</h2>
            <div>
                <img src={empty} alt="empty" className='md:w-[300px] md:h-[300px]' />
            </div>    
        </div>
              </div>
          </Container>

          <div className="mt-6 w-full">
              <Link to="/products" className=" mt-20 flex items-center justify-center rounded-md border border-transparent bg-[#7c71df] px-6 py-3 text-base 
            font-medium text-white shadow-sm hover:bg-opacity-60
            duration-200"><button onClick={props.closeEmpty}>Shop All</button></Link>
        </div>
    </div>
  )
}

export default EmptyCartPage