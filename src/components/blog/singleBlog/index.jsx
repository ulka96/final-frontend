import React from 'react'
import blog2 from "../../../assets/blog/blog2.png"
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const SingleBlog = ({ blog, blogId }) => {

  const getEmbedUrl = (url) => {
    if (!url) return '';
    const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([\w-]+)/;
    const match = url.match(youtubeRegex);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
    return url; 
  };

  const videoSrc = getEmbedUrl(blog?.videoUrl);

  const truncatedContent = blog?.content.length > 100
  ? `${blog.content.substring(0, 100)}...`
    : blog.content;
  
  
    const formattedDate = blog?.createdAt 
    ? new Date(blog.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      })
    : '';

  return (
      <div className='lg:mb-8 md:mb-8 mb-10'>

            {blog?.videoUrl && <div className="w-full lg:max-w-7xl md:max-w-3xl max-w-md mx-auto lg:my-9 md:my-9 my-6">
              <iframe 
              className="w-full h-[250px] lg:h-[300px] md:h-[250px] rounded-lg shadow-lg" 
              src={videoSrc}
              title="Video Title" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
      </div>}
              
               {blog?.image && <div className='w-full lg:max-w-7xl md:max-w-3xl max-w-md mx-auto lg:my-9 md:my-9 my-6'>
                <img src={blog?.image} alt="blog image" className='w-full h-[250px] lg:h-[300px] md:h-[250px] rounded-lg shadow-lg' />
              </div>}
           
              <p className='text-[#5f6980]'>{formattedDate}</p>
      <h1 className='md:text-[22px] text-[24px] lg:text-[22px]  my-2 lg:my-4 md:my-4 md:w-[353px]
       font-semibold'>{blog?.title}</h1>
      <p className='text-[#5f6980]'>{truncatedContent}</p>
      
  <Link to={`/blog/${blogId}`}><p className='md:mt-3 lg:mt-3 mt-2 hover:underline'>Read more..</p></Link>

    </div>
  )
}

export default SingleBlog

          