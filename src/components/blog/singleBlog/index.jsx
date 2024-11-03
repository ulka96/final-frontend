import React from 'react'
import blog2 from "../../../assets/blog/blog2.png"
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const SingleBlog = () => {

  const { blogId } = useParams()

  return (
      <div className='lg:mb-8 md:mb-8 mb-10'>
          <div className=''>
  <img src={blog2} alt="blog2" className='md:w-[353px] md:h-[217px]  w-[361px] h-[217px] lg:w-[405px] lg:h-[237px]' />  </div>
   <h1 className='md:text-[22px] text-[24px] lg:text-[22px]  my-2 lg:my-4 md:my-4 md:w-[353px] font-semibold'>The Art of Minimalism: How to Achieve a Sleek Look</h1>
  <p className='text-[#5f6980]'>Discover tips and tricks for adopting a minimalist approach to interior design and cr..</p>
  <Link to={`/blog/${blogId}`}><p className='md:mt-3 lg:mt-3 mt-2 hover:underline'>Read more..</p></Link>


    </div>
  )
}

export default SingleBlog