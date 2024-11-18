import React, { useEffect, useState } from 'react'
import Container from '../../components/common/containerClass'


// React icons
import { IoChevronUp } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import {CiHeart} from "react-icons/ci";
import { PiShoppingCart } from "react-icons/pi";
import {AiFillHeart} from "react-icons/ai"

import SingleProduct from '../../components/home/singleProduct';
import PeopleAlsoViewed from '../../components/common/peopleAlsoViewed';
import { addToCart } from '../../slices/cart.slice';
import { addToWishlist, removeFromWishlist } from '../../slices/wishlist.slice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const SittingRoomPage = () => {

  // const { productId } = useParams()
  
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlist)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // const isInWishlist = wishlist.some((item) => item._id === topProduct._id);


const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [sittingRooms, setSittingRooms] = useState([])
    
                            
const toggleDownCategory = () => {
   setIsOpenCategory(!isOpenCategory);
    };

const toggleDownSort = () => {
  setIsOpenSort(!isOpenSort);
    };

  
    const fetchSittingRooms = async () => {
      const response = await fetch("http://localhost:3000/api/products?category=Sitting Room");
      const data = await response.json();
    
      console.log(data); 
      setSittingRooms(data);  
    };
    
    useEffect(() => {
      fetchSittingRooms();  
    }, []);
    

    

  return (
      <div>
          <Container>
              <div className='items-center justify-center flex flex-col my-12'>
              <h1 className='text-[24px] md:text-[32px] lg:text-[44px] md:font-bold font-poppins font-semibold'>Sitting Room</h1>
              <p className='text-[#737b90] text-[14px] md:text-[18px] lg:text-[22px] text-center mt-6'>"Transform your sitting room with our elegant and functional seating options, perfect for every modern home."</p>
              
              <div className='py-4 px-5 border border-[#c0c0c2] w-[353px] md:w-[738px] lg:w-[642px] rounded-[24px] mt-8 flex flex-row'>
                      <input type="text" placeholder='Search by name or category...'
                          className='text-[16px] text-[#c0c0c2] w-full outline-none' />
                      <FiSearch className='w-6 h-6'/>
              </div>
              </div>

    {/* Product names */}
    <div className="overflow-hidden w-full overflow-x-scroll scrollbar-hide scroll-smooth lg:text-[20px]">
       <div className="flex flex-row gap-6 my-[10px]  whitespace-nowrap lg:mt-[80px] lg:mb-12 ">
    <div className="py-[18px] px-8  lg:py-[20px] lg:px-10  bg-[#7c71df] text-white font-bold rounded-full flex justify-center items-center">
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
<div className='flex flex-col mt-8 md:mt-12 md:flex-row md:justify-between md:items-baseline'>
    <h1 className='text-[20px] md:text-[32px] lg:text-[44px] font-bold'>Top Products</h1>
            <div className='flex flex-row my-3 justify-between md:gap-4'>
            
             {/* Sorting by Category */}
            <div className="w-[160px] lg:w-[200px] md:w-[180px] relative">
            <button
              onClick={toggleDownCategory}
                className="border border-[#D0D0D0] rounded-[8px] w-full py-[4px] pl-[13px] pr-[7px] 
              md:py-[5px] md:pl-[14px] md:pr-[8px] lg:py-[7px] lg:pl-[16px] lg:pr-[10px]
            flex justify-between items-center drop-shadow"
            >
              <h2 className="text-[14px] md:text-[16px] lg:text-[20px] text-[#212121E5] ">All Categories</h2>
              {isOpenCategory ? <IoChevronDown /> : <IoChevronUp />}
            </button>

            {isOpenCategory && (
              <div className="absolute top-[calc(100%_+_5px)] z-20 drop-shadow overflow-hidden">
                <button
                  className="flex justify-between items-center py-[4px] pl-[13px] pr-[7px] w-[160px] lg:w-[200px] md:w-[180px]
                  md:py-[5px] md:pl-[14px] md:pr-[8px] lg:py-[7px] lg:pl-[16px] lg:pr-[10px] bg-white cursor-pointer  text-[14px] md:text-[16px] lg:text-[20px] text-[#212121E5]"
                >
                  All categories
                </button>

                <button
                  className="flex justify-between items-center py-[4px] pl-[13px] pr-[7px] lg:w-[200px] md:w-[180px]
                 md:py-[5px] md:pl-[14px] md:pr-[8px] lg:py-[7px] lg:pl-[16px] lg:pr-[10px] bg-white cursor-pointer w-[160px] text-[14px] md:text-[16px] lg:text-[20px] text-[#212121E5]"
                >
                  Sitting room
                </button>

                <button
                className="flex justify-between items-center py-[4px] pl-[13px] pr-[7px] lg:w-[200px] md:w-[180px]
                 md:py-[5px] md:pl-[14px] md:pr-[8px] lg:py-[7px] lg:pl-[16px] lg:pr-[10px]  bg-white cursor-pointer w-[160px] text-[14px] md:text-[16px] lg:text-[20px] text-[#212121E5]"
                >
                  Bedroom
                </button>

                <button
                  className="flex justify-between items-center py-[4px] pl-[13px] pr-[7px] lg:w-[200px] md:w-[180px]
                 md:py-[5px] md:pl-[14px] md:pr-[8px] lg:py-[7px] lg:pl-[16px] lg:pr-[10px]  bg-white cursor-pointer w-[160px] text-[14px] md:text-[16px] lg:text-[20px] text-[#212121E5]"
                >
                  Kitchen
                </button>

                <button
                 className="flex justify-between items-center py-[4px] pl-[13px] pr-[7px] lg:w-[200px] md:w-[180px]
                 md:py-[5px] md:pl-[14px] md:pr-[8px] lg:py-[7px] lg:pl-[16px] lg:pr-[10px]  bg-white cursor-pointer w-[160px] text-[14px] md:text-[16px] lg:text-[20px] text-[#212121E5]"
                >
                  Accessories
                </button>
              </div>
            )}
            </div>
                      

        {/* Sorting by price */}
           <div className="w-[160px] md:w-[180px] lg:w-[200px] relative">
            <button
              onClick={toggleDownSort}
              className="border border-[#D0D0D0] rounded-[8px] w-full py-[4px] pl-[13px] pr-[7px] 
             md:py-[5px] md:pl-[14px] md:pr-[8px] lg:py-[6px] lg:pl-[15px] lg:pr-[9px] flex justify-between items-center drop-shadow"
            >
              <h2 className="text-[14px] md:text-[16px] lg:text-[20px] text-[#212121E5]">Sort By</h2>
              {isOpenSort ? <IoChevronDown /> : <IoChevronUp />}
            </button>

            {isOpenSort && (
              <div className="absolute top-[calc(100%_+_5px)] z-20 drop-shadow overflow-hidden">
                <button
                  className="flex justify-between items-center py-[4px] pl-[13px] pr-[7px] md:w-[180px] lg:w-[200px]
                md:py-[5px] md:pl-[14px] md:pr-[8px] lg:py-[6px] lg:pl-[15px] lg:pr-[9px] bg-white cursor-pointer w-[160px] text-[14px] md:text-[16px] lg:text-[20px] text-[#212121E5]"
                >
                  Price: Low to high
                </button>

                <button
                  className="flex justify-between items-center py-[4px] pl-[13px] pr-[7px] md:w-[180px] lg:w-[200px]
                md:py-[5px] md:pl-[14px] md:pr-[8px] lg:py-[6px] lg:pl-[15px] lg:pr-[9px] bg-white cursor-pointer w-[160px] text-[14px] md:text-[16px] lg:text-[20px] text-[#212121E5]"
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
          {
            sittingRooms && sittingRooms.map((sittingRoom) => {

              return   <div>
            
              <div className="justify-center items-center relative w-[164px] h-[173px] lg:w-[296px] lg:h-[313px] md:w-[343px] md:h-[343px] bg-[#f3f4f7] overflow-hidden  hover:drop-shadow-lg">
                  <Link to={`/products/${sittingRoom._id}`}><div className="absolute inset-0 transform transition-transform duration-1000 ease-in-out hover:scale-110 ">
                      <img src={`http://localhost:3000/${sittingRoom?.productPic}`} alt="sofa2" className="w-full h-full object-cover" />
                  </div>
                  </Link>
          {sittingRoom?.newArrival && <div className='py-[8px] px-[6px] lg:py-[12px] lg:px-[10px] md:py-[12px] md:px-[10px]  ml-2 rounded-full bg-[#2ec1ac] absolute top-2 right-2 md:top-3 md:right-3 lg:top-4 lg:right-4'>
              <p className='text-white text-[8px] lg:text-[11px] 
                md:text-[10px]'>New</p>              
                  </div>}
                  
                  {sittingRoom?.discount > 0 && <div className='py-[8px] px-[6px] lg:py-[12px] lg:px-[10px] md:py-[12px] md:px-[10px]  ml-2 rounded-full bg-[#dc2626] absolute top-2 right-2 md:top-3 md:right-3 lg:top-4 lg:right-4'>
              <p className='text-white text-[8px] lg:text-[11px] 
                md:text-[10px]'>{sittingRoom?.discount} %</p>              
          </div> }
          </div>
   
              
  
       <div className='flex flex-col'>
                  <h1 className='font-semibold text-[12px] md:text-[16px] mt-1 ml-3'>{sittingRoom?.title}</h1>
  
          <div className='flex flex-row mt-1 ml-3  items-center'>
          <p className={`${sittingRoom?.discount > 0 ? 'line-through' : ''} text-[12px] md:text-[16px]`}>${sittingRoom?.price}</p>
          {sittingRoom?.discount > 0 && <p className='text-[12px] ml-2 md:ml-3 font-bold md:text-[16px]'>${sittingRoom?.discountedPrice}</p>}
                
                      
          <div className='p-[4px] md:p-[5px] ml-3 md:ml-auto rounded-full bg-[#f8f7fb]'>
               
                <button onClick={() => {
                        if (!isLoggedIn) {
                          alert("You must be logged in to add products to your wishlist.");
                          return;
                        }
                        if (wishlist.some((item) => item._id === sittingRoom._id)) {
                          dispatch(removeFromWishlist(sittingRoom._id))
                        }
                        else {
                          dispatch(addToWishlist(sittingRoom))
                        }
}}>
                 {wishlist.some((item) => item._id === sittingRoom._id) ? (
                   <AiFillHeart className="text-red-500 w-4 h-4 md:w-5 md:h-5" />
                 ) : (
                  <CiHeart className='w-4 h-4 md:w-5 md:h-5' /> 
                 )}
                </button>
                
          </div>
                      
            <div className='p-[4px] md:p-[5px] ml-2 md:mr-5 rounded-full bg-[#f8f7fb] hover:bg-[#dfdff1]'>
                <button
                  className='cursor-pointer'
                  onClick={() => {
                    if (isLoggedIn) {

                      const handleAddToCart = (sittingRoom) => {
                        dispatch(addToCart(sittingRoom));
                        alert('Item added to cart!');
                      };
                      handleAddToCart(sittingRoom);
                    } else {
                      alert('Please log in to add items to the cart.');
                    }
                  }}>
                  <PiShoppingCart className='w-4 h-4 md:w-5 md:h-5 hover:text-[#6e5fac] '/>
                </button>
          </div>
                      
  
          </div>
              
       </div>  
  
       </div>
                     
            })
               }

             
              </div>  
              

         {/* Pagination */}
         <div className="my-8 md:my-12 lg:my-14 flex justify-center items-center space-x-2 md:space-x-3 ">
                  {/* Previous Button */}
              <button className=" px-3 py-1 md:px-4 md:py-2  lg:px-5 lg:py-3 bg-[#e7e5fb] hover:bg-[#7c71df] hover:text-white rounded-lg text-[12px] md:text-[14px] lg:text-[16px]"
              >
                Prev
              </button>

            {/* Page Number Buttons */}
          
              <button
                className={`px-2 py-1 md:px-3 md:py-2 lg:px-4 lg:py-3 bg-[#e7e5fb] hover:bg-[#7c71df] hover:text-white rounded-lg text-[12px] md:text-[14px] lg:text-[16px]`}
              >
                1
              </button>

            {/* Next Button */}
              <button
                className=" px-3 py-1 md:px-4 md:py-2  lg:px-5 lg:py-3 bg-[#e7e5fb] hover:bg-[#7c71df] hover:text-white rounded-lg text-[12px] md:text-[14px] lg:text-[16px]"
              >
                Next
              </button>
          </div>

              
        {/* People also viewed */}
         <PeopleAlsoViewed/>

              
          </Container>
    </div>
  )
}

export default SittingRoomPage