import React, { useEffect, useState } from 'react'
import Container from "../../components/common/containerClass/index"
import blog from "../../assets/blog/blog.png"
import furniro from "../../assets/blog/furniro.png"
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom'
import SingleBlog from '../../components/blog/singleBlog';



const BlogPage = () => {

  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async() => {
    const response = await fetch("http://localhost:3000/api/blogs");
    const data = await response.json();
    setBlogs(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);


    return (
        <>
            <div
                style={{ backgroundImage: `url(${blog})`, backgroundSize: 'cover', height: '316px' }}
                className='relative md:mt-6'
                  >
            </div>
          <Container>
            
              <div className='absolute top-7 right-3 lg:right-96 md:right-14 lg:top-16 lg:left-96 md:top-9 flex flex-col items-center justify-center pt-[61px] '>
                  <img src={furniro} alt="furniro" className='lg:w-[77px] md:w-[60px]  w-[50px]' />
                  <h1 className='lg:text-[40px] md:text-[30px] text-[24px] font-semibold mt-0'>Blog</h1>
                  <p className='lg:text-[16px] md:text-[14px] text-[12px] text-center text-[#5f6980]'>Explore the latest trends in modern furniture design that can elevate your living space with style and functionality</p>
                  
                  <div className=' lg:w-[600px] md:w-[500px] w-[300px] lg:my-8 md:my-20 my-14 flex flex-row items-center relative'>
                      <input type="text" placeholder='Search' className='w-full lg:py-3 lg:px-7 md:py-2 md:px-6 py-1 px-5 rounded-2xl outline-none lg:text-[16px] text-[12px] md:text-[14px]' />
                      <button><CiSearch className='absolute lg:top-3 lg:right-5 md:top-2 md:right-5 top-1 right-4 lg:text-2xl md:text-xl text-lg'/></button>
                  </div>
            </div>
                <h1 className='text-[28px] font-poppins font-semibold lg:mt-12 md:mt-12 mt-8 lg:mb-8 md:mb-8 mb-6 '>Latest Articles</h1>
                

                <div className='md:grid md:grid-cols-2 md:auto-rows-auto 
                lg:grid lg:grid-cols-3 lg:auto-rows-auto
                grid grid-cols-1 auto-rows-auto md:gap-8 '>
            {
              blogs && blogs.map((blog) => {
                return <SingleBlog blog={blog} blogId={blog._id} />
              })
                   }
                    
                 
                </div>



                         {/* Pagination */}
         <div className="my-8 md:my-12 lg:my-14 flex justify-center items-center space-x-2 md:space-x-3 ">
                  {/* Previous Button */}
              <button className=" px-3 py-1 md:px-4 md:py-2  lg:px-5 lg:py-3 bg-gray-100 hover:bg-gray-200 hover:text-white rounded-lg text-[12px] md:text-[14px] lg:text-[16px]"
              >
                Prev
              </button>

            {/* Page Number Buttons */}
          
              <button
                className={`px-2 py-1 md:px-3 md:py-2 lg:px-4 lg:py-3 bg-gray-100 hover:bg-gray-200 hover:text-white rounded-lg text-[12px] md:text-[14px] lg:text-[16px]`}
              >
                1
              </button>

            {/* Next Button */}
              <button
                className=" px-3 py-1 md:px-4 md:py-2  lg:px-5 lg:py-3 bg-gray-100 hover:bg-gray-200 hover:text-white rounded-lg text-[12px] md:text-[14px] lg:text-[16px]"
              >
                Next
              </button>
          </div>
         </Container>
    
    </>
  )
}

export default BlogPage