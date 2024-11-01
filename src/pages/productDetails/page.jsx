import React from 'react'

// React icons
import { FaStar } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";

// Images
import tables from "../../assets/home/new5.png"
import box from "../../assets/products/Box.png"
import leaf from "../../assets/products/Leaf.png"

// Components
import SpecificReviews from '../../components/productDetails/specificReviews';
import PeopleAlsoViewed from "../../components/common/peopleAlsoViewed/index"
import Container from '../../components/common/containerClass'
import { Link } from 'react-router-dom';


const stars = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const ProductDetailsPage = () => {
  return (
      <div>
      <Container>
      
        <div className='mt-11 flex flex-col'>
                   
          <div className='flex flex-col md:flex-row md:gap-8 lg:flex-row flex-grow'>
            <div className='w-[361px] flex-grow lg:w-[100%] lg:h-[380px] md:w-[100%] md:h-[400px] '>
              <img src={tables} alt="tables"
                className='w-full md:h-[300px] lg:h-[400px]' />
              </div>
                  

                  <div className='flex flex-col mt-6 md:mt-0 lg:mt-0 w-full flex-grow'>
                      <h1 className='text-[24px] md:text-[18px] lg:text-[28px] font-bold'>Luxe Armchair - Left Arm Chute</h1>
                    <div className='flex flex-row items-center gap-4 '>
                    <div className="flex flex-row items-center gap-1 ">
                   {stars.map((star) => (
                 <FaStar key={star.id} className="text-yellow-500 cursor-pointer" />
                    ))}
                        </div>
                          <p className='text-[14px] lg:text-[20px] font-poppins text-[#5f6980]'>5 Customer Review</p>
                      </div>
                      
                      <div className='flex flex-row items-center gap-3 mt-5 md:mt-3'>
                          <h1 className='text-[26px] md:text-[20px] lg:text-[24px] text-[#8965c8] font-poppins font-semibold'>$899.00</h1>
                          <h2 className='text-[16px] md:text-[14px] lg:text-[18px]  text-[#bfc3cc] line-through '>$1999.00</h2>
                          <button className='py-1 px-2 w-[58px] md:w-[50px] lg:w-[62px] bg-[#fddcdf] text-[#f65162] rounded-full'>-40%</button>
                      </div>

                      <div>
                          <p className='text-[#5f6980] text-justify md:text-[16px] lg:text-[18px] md:w-[330px] lg:w-[576px] mt-6 mb-8 md:mt-2 md:mb-3 lg:mt-7'>Ultra-functional and elegantly minimalist, our Luxe Armchair Collection draws inspiration from Nordic-style décor. It features a neutral color palette and natural wood accents, highlighted by uniquely designed hexagonal legs. </p>
                      </div>

                      <ul className='flex flex-row gap-4 '>
                      <li 
                      className={`h-10 w-10 lg:w-11 lg:h-11 bg-[#ae918c] border flex items-center justify-center rounded-full cursor-pointer`}
                        >
                       <span><BsCheck className='text-white text-xl md:text-lg lg:text-2xl' /></span>
                      </li>
                          
                      <li 
                      className={`h-10 w-10 lg:w-11 lg:h-11 bg-[#ae918c] border flex items-center justify-center rounded-full cursor-pointer`}
                        >
                       <span><BsCheck className='text-white text-xl md:text-lg lg:text-2xl'/></span>
                          </li>
                      </ul>


                     <div className='flex flex-row gap-4 items-center w-full'>
                <div className="flex items-center justify-center  font-black my-8 
                      border border-[#8965c8] rounded-full w-[113px] md:w-[100px] lg:w-[133px] md:my-5 lg:px-5 px-5">
                     
                     <button className="text-[16px] md:text-[14px] font-bold text-[#8965c8]">-</button>
                     <input
                       value={1}
                       type="number"
                       min="1"
                       max="100"
                       className="h-12 md:h-12 lg:h-12 text-[16px] w-full  md:text-[14px]  text-center font-semibold text-[#8965c8]"
                     />
                     <button  className="text-[16px] md:text-[14px] font-bold text-[#8965c8]">+</button>
                          </div>
                          
                <div className='w-[130px] md:w-[120px] lg:w-[130px] lg:h-12 h-12 md:h-12 items-center justify-center flex 
                          font-semibold text-[#8965c8] border border-[#8965c8] rounded-full'>
                              <Link to=""><button >Add To Cart</button></Link>
                          </div>
                      </div>
                      
                 
                  <div className='flex flex-col lg:mt-4'>
                  <div className='flex flex-row gap-2 items-center'>
                    <div className='w-5 h-5' >
                      <img src={box} alt="box" />
                    </div>
                      <p>Free shipping included</p>
                  </div>
                  
                  <div className='flex flex-row gap-2 items-center mb-8 mt-3'>
                    <div className='w-5 h-5' >
                      <img src={leaf} alt="leaf" />
                    </div>
                      <p>Made from the best of materials sourced</p>
                 </div>
                 </div>
              

                  </div>
                  </div>
          

              
                  <div className='border border-[#d9d9d9] w-full my-6'></div>

                  <div className='flex flex-row justify-center items-center gap-12 my-4'>
                      <h2 className='text-[16px] md:text-[18px] font-poppins font-bold'>Description</h2>
                      <h3 className='text-[16px] md:text-[18px] font-poppins text-[#9f9f9f]'>Reviews [5]</h3>
                  </div>
                  {/* <div>
                  <p className='text-[12px] md:text-[14px] lg:text-[16px] text-[#9f9f9f] text-justify'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.<br />
                      Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                  </div> */}
                 
          <SpecificReviews />
          
          <PeopleAlsoViewed/>
                   
              </div>
        </Container>
    </div>
  )
}

export default ProductDetailsPage