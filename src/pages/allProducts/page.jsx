import React, { useEffect, useState } from 'react'
import Container from '../../components/common/containerClass'


// React icons
import { IoChevronUp } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

import SingleProduct from '../../components/home/singleProduct';


const AllProductsPage = () => {

  // States
const [isOpenCategory, setIsOpenCategory] = useState(false);
const [isOpenSort, setIsOpenSort] = useState(false);
const [topProducts, setTopProducts] = useState([])
const [categories, setCategories] = useState([])
  
const [selectedCategory, setSelectedCategory] = useState("All Categories");
const [selectedSort, setSelectedSort] = useState(null);
const [searchQuery, setSearchQuery] = useState("");

// Pagination States
const [currentPage, setCurrentPage] = useState(1);
const [productsPerPage] = useState(8); // Adjust this value as needed
  
  
const toggleDownCategory = () => {
   setIsOpenCategory(!isOpenCategory);
    };

const toggleDownSort = () => {
  setIsOpenSort(!isOpenSort);
    };


const fetchTopProducts = async() => {
  const response = await fetch("http://localhost:3000/api/products")
  const data = await response.json()
  
  setTopProducts(data)
}
  
useEffect(() => {
  fetchTopProducts()
}, [])
  
  
// Categories

const fetchCategories = async() => {
const response = await fetch("http://localhost:3000/api/categories")
  const data = await response.json()
  
setCategories(data)
}
  
useEffect(() => {
  fetchCategories()
  }, [])


  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsOpenCategory(false);
  };

  const handleSortClick = (sortType) => {
    setSelectedSort(sortType);
    setIsOpenSort(false);
  };

  const filteredProducts = topProducts
    .filter((product) => {
      if (selectedCategory === "All Categories") return true;
      return product.category === selectedCategory;
    })
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (selectedSort === "Price: Low to high") return a.price - b.price;
      if (selectedSort === "Price: High to low") return b.price - a.price;
      return 0;
    });
  
  
  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prevPage) => prevPage - 1);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

    

  return (
      <div>
          <Container>
              <div className='items-center justify-center flex flex-col my-12'>
              <h1 className='text-[24px] md:text-[32px] lg:text-[44px] md:font-bold font-poppins font-semibold'>Our Products</h1>
              <p className='text-[#737b90] text-[14px] md:text-[18px] lg:text-[22px] text-center mt-6'>"Explore furniture that harmoniously combines style and comfort to elevate your home."</p>
              
              <div className='py-4 px-5 border border-[#c0c0c2] w-[353px] md:w-[738px] lg:w-[642px] rounded-[24px] mt-8 flex flex-row'>
            <input
              type="text"
              placeholder='Search by name or category...'
              className='text-[16px] text-[#c0c0c2] w-full outline-none'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            
            />
              <FiSearch className='w-6 h-6'/>
              </div>
              </div>
              

{/*Sorting */}
<div className='flex flex-row mt-8 md:mt-12 justify-between'>
            <div className='flex flex-row my-3 w-full justify-between'>
            
             {/* Sorting by Category */}
            <div className="w-[160px] lg:w-[200px] md:w-[180px] relative ">
            <button
              onClick={toggleDownCategory}
                className="border border-[#D0D0D0] rounded-[8px] w-full py-[4px] pl-[13px] pr-[7px] 
              md:py-[5px] md:pl-[14px] md:pr-[8px] lg:py-[7px] lg:pl-[16px] lg:pr-[10px]
            flex justify-between items-center drop-shadow"
            >
              <h2 className="text-[14px] md:text-[16px] lg:text-[20px] text-[#212121E5] ">{selectedCategory}</h2>
              {isOpenCategory ? <IoChevronDown /> : <IoChevronUp />}
            </button>

            {isOpenCategory && (
              <div className="absolute top-[calc(100%_+_5px)] z-20 drop-shadow overflow-hidden">
                <button
                  onClick={() => handleCategoryClick("All Categories")}
                  className="flex justify-between items-center py-[4px] pl-[13px] pr-[7px] w-[160px] lg:w-[200px] md:w-[180px]
                  md:py-[5px] md:pl-[14px] md:pr-[8px] lg:py-[7px] lg:pl-[16px] lg:pr-[10px] bg-white cursor-pointer  text-[14px] md:text-[16px] lg:text-[20px] text-[#212121E5]"
                >
                  All categories
                  </button>
                  
                  {
                    categories && categories.map((category) => {

                      return <button
                      key={category._id}
                      onClick={() => handleCategoryClick(category.title)}
                      className="flex justify-between items-center py-[4px] pl-[13px] pr-[7px] lg:w-[200px] md:w-[180px]
                     md:py-[5px] md:pl-[14px] md:pr-[8px] lg:py-[7px] lg:pl-[16px] lg:pr-[10px] bg-white cursor-pointer w-[160px] text-[14px] md:text-[16px] lg:text-[20px] text-[#212121E5]"
                    >
                      {category?.title}
                    </button>
                    })
                  }              

              </div>
            )}
            </div>
                      

        {/* Sorting by price */}
           <div className="w-[160px] md:w-[180px] lg:w-[250px] relative">
            <button
              onClick={toggleDownSort}
              className="border border-[#D0D0D0] rounded-[8px] w-full py-[4px] pl-[13px] pr-[7px] 
              md:py-[5px] md:pl-[14px] md:pr-[8px] lg:py-[7px] lg:pl-[16px] lg:pr-[10px] flex justify-between items-center drop-shadow"
            >
              <h2 className="text-[14px] md:text-[16px] lg:text-[20px] text-[#212121E5]">{selectedSort || "Sort By"}</h2>
              {isOpenSort ? <IoChevronDown /> : <IoChevronUp />}
            </button>

            {isOpenSort && (
              <div className="absolute top-[calc(100%_+_5px)] z-20 drop-shadow overflow-hidden">
                  <button
                  onClick={() => handleSortClick("Price: Low to high")}
                  className="flex justify-between items-center py-[4px] pl-[13px] pr-[7px] md:w-[180px] lg:w-[200px]
                md:py-[5px] md:pl-[14px] md:pr-[8px] lg:py-[6px] lg:pl-[15px] lg:pr-[9px] bg-white cursor-pointer w-[160px] text-[14px] md:text-[16px] lg:text-[20px] text-[#212121E5]"
                >
                  Price: Low to high
                </button>

                  <button
                  onClick={() => handleSortClick("Price: High to low")}
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
              {currentProducts.map((product) => (
            <SingleProduct
              key={product._id}
              topProduct={product}
              productId={product._id}
            />
          ))}
              

             
              </div>  
              

         {/* Pagination */}
         <div className="my-8 md:my-12 lg:my-14 flex justify-center items-center space-x-2 md:space-x-3 ">
                  {/* Previous Button */}
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-3 py-1 md:px-4 md:py-2 lg:px-5 lg:py-3 rounded-lg text-[12px] md:text-[14px] lg:text-[16px] ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#e7e5fb] hover:bg-[#7c71df] hover:text-white"
            }`}
              >
                Prev
              </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index + 1)}
              className={`px-2 py-1 md:px-3 md:py-2 lg:px-4 lg:py-3 rounded-lg text-[12px] md:text-[14px] lg:text-[16px] ${
                currentPage === index + 1
                  ? "bg-[#7c71df] text-white"
                  : "bg-[#e7e5fb] hover:bg-[#7c71df] hover:text-white"
              }`}
            >
              {index + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 md:px-4 md:py-2 lg:px-5 lg:py-3 rounded-lg text-[12px] md:text-[14px] lg:text-[16px] ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#e7e5fb] hover:bg-[#7c71df] hover:text-white"
            }`}
          >
            Next
          </button>

          </div>

              
          </Container>
    </div>
  )
}

export default AllProductsPage