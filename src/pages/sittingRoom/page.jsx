import React, { useState } from 'react'
import Container from '../../components/common/containerClass'


// React icons
import { IoChevronUp } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import SingleProduct from '../../components/home/singleProduct';


const SittingRoomPage = () => {

const [isOpenCategory, setIsOpenCategory] = useState(false);
const [isOpenSort, setIsOpenSort] = useState(false);


const toggleDownCategory = () => {
   setIsOpenCategory(!isOpenCategory);
    };

const toggleDownSort = () => {
  setIsOpenSort(!isOpenSort);
         };
    

  return (
      <div>
          <Container>
              <div className='items-center justify-center flex flex-col my-12'>
              <h1 className='text-[24px] font-poppins font-semibold'>Sitting Room</h1>
              <p className='text-[#737b90] text-[14px] text-center mt-6'>Transform your sitting room with our elegant and functional seating options, perfect for every modern home.</p>
              
              <div className='py-5 px-6 border border-[#c0c0c2] w-[353px] rounded-[24px] mt-8 flex flex-row'>
                      <input type="text" placeholder='Search by name or category...'
                          className='text-[16px] text-[#c0c0c2] w-full outline-none' />
                      <FiSearch className='w-6 h-6'/>
              </div>
              </div>

    {/* Sub-Categories */}
    <div className="overflow-hidden w-full overflow-x-scroll scrollbar-hide scroll-smooth">
       <div className="flex flex-row gap-6 my-[10px]  whitespace-nowrap">
    <div className="py-[18px] px-8 bg-[#7c71df] text-white font-bold rounded-full flex justify-center items-center">
      All
    </div>
    <div className="py-[18px] px-8 bg-[#f8f7fb] font-bold rounded-full flex justify-center items-center w-[100px]">
      Sofa
    </div>
    <div className="py-[18px] px-8 bg-[#f8f7fb] font-bold rounded-full flex justify-center items-center w-[162px]">
      Accent chair
  </div>
    <div className="py-[18px] px-8 bg-[#f8f7fb] font-bold rounded-full flex justify-center items-center w-[162px]">
      Lounge chair
    </div>
                      
    <div className="py-[18px] px-8 bg-[#f8f7fb] font-bold rounded-full flex justify-center items-center w-[162px]">
      Coffee table
    </div>
    <div className="py-[18px] px-8 bg-[#f8f7fb] font-bold rounded-full flex justify-center items-center w-[162px]">
      Center table
    </div>
    <div className="py-[18px] px-8 bg-[#f8f7fb] font-bold rounded-full flex justify-center items-center w-[162px]">
      Flower pot
    </div>
    <div className="py-[18px] px-8 bg-[#f8f7fb] font-bold rounded-full flex justify-center items-center w-[162px]">
      Lamp
    </div>
  </div>
</div>
              

{/*Sorting */}
<div className='flex flex-col mt-8 '>
    <h1 className='text-[20px] font-bold'>Top Products</h1>
            <div className='flex flex-row my-3 justify-between'>
            
             {/* Sorting by Category */}
            <div className="w-[160px] relative">
            <button
              onClick={toggleDownCategory}
              className="border border-[#D0D0D0] rounded-[8px] w-full py-[4px] pl-[13px] pr-[7px] 
            flex justify-between items-center drop-shadow"
            >
              <h2 className="text-[14px] text-[#212121E5]">All Categories</h2>
              {isOpenCategory ? <IoChevronDown /> : <IoChevronUp />}
            </button>

            {isOpenCategory && (
              <div className="absolute top-[calc(100%_+_5px)] z-20 drop-shadow overflow-hidden">
                <button
                  className="flex justify-between items-center py-[4px] pl-[13px] pr-[7px]
                   bg-white cursor-pointer w-[140px] text-[14px] text-[#212121E5]"
                >
                  All categories
                </button>

                <button
                  className="flex justify-between items-center py-[4px] pl-[13px] pr-[7px]
                   bg-white cursor-pointer w-[140px] text-[14px] text-[#212121E5]"
                >
                  Sitting room
                </button>

                <button
                className="flex justify-between items-center py-[4px] pl-[13px] pr-[7px]
                   bg-white cursor-pointer w-[140px] text-[14px] text-[#212121E5]"
                >
                  Bedroom
                </button>

                <button
                  className="flex justify-between items-center py-[4px] pl-[13px] pr-[7px]
                   bg-white cursor-pointer w-[140px] text-[14px] text-[#212121E5]"
                >
                  Kitchen
                </button>

                <button
                 className="flex justify-between items-center py-[4px] pl-[13px] pr-[7px]
                   bg-white cursor-pointer w-[140px] text-[14px] text-[#212121E5]"
                >
                  Accessories
                </button>
              </div>
            )}
            </div>
                      

        {/* Sorting by price */}
           <div className="w-[160px] relative">
            <button
              onClick={toggleDownSort}
              className="border border-[#D0D0D0] rounded-[8px] w-full py-[4px] pl-[13px] pr-[7px] 
            flex justify-between items-center drop-shadow"
            >
              <h2 className="text-[14px] text-[#212121E5]">Sort By</h2>
              {isOpenSort ? <IoChevronDown /> : <IoChevronUp />}
            </button>

            {isOpenSort && (
              <div className="absolute top-[calc(100%_+_5px)] z-20 drop-shadow overflow-hidden">
                <button
                  className="flex justify-between items-center py-[4px] pl-[13px] pr-[7px]
                   bg-white cursor-pointer w-[140px] text-[14px] text-[#212121E5]"
                >
                  Price: Low to high
                </button>

                <button
                  className="flex justify-between items-center py-[4px] pl-[13px] pr-[7px]
                   bg-white cursor-pointer w-[140px] text-[14px] text-[#212121E5]"
                >
                  Price: High to low
                </button>


              </div>
            )}
          </div>                   
        </div>            
              </div>
              
              {/* Top products */}
              
              <div className='grid grid-cols-2 grid-rows-3 gap-8 lg:grid-cols-4 mt-6'>
              
              <SingleProduct/>
              <SingleProduct/>
              <SingleProduct/>
              <SingleProduct/>
              <SingleProduct/>
              <SingleProduct/>
              <SingleProduct/>
              <SingleProduct/>
              <SingleProduct/>
              <SingleProduct/>
              <SingleProduct/>
              <SingleProduct/>
             
            </div>  


              
          </Container>
    </div>
  )
}

export default SittingRoomPage