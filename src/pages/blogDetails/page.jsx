import React, { useEffect, useState } from 'react'
import Container from "../../components/common/containerClass/index"
import { useParams } from 'react-router-dom';


const BlogDetailsPage = () => {

  const [blogDetail, setBlogDetail] = useState(null);  
  const { blogId } = useParams();

  const fetchBlogDetails = async () => {
    try {
      if (!blogId) throw new Error("Blog ID is undefined");
      const response = await fetch(`http://localhost:3000/api/blogs/${blogId}`);
      const data = await response.json();
      setBlogDetail(data);
    } catch (error) {
      console.error("Error fetching blog details:", error);
    }
  };

  useEffect(() => {
    fetchBlogDetails();
  }, [blogId]);

  if (!blogDetail) {
    return <p>Loading...</p>; 
  }

  const getEmbedUrl = (url) => {
    if (!url) return '';
    const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([\w-]+)/;
    const match = url.match(youtubeRegex);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
    return url; 
  };

  const videoSrc = getEmbedUrl(blogDetail?.videoUrl);

  return (
      <div>
          <Container>
        <div>
          
              {blogDetail?.videoUrl && <div className="w-full lg:max-w-7xl md:max-w-3xl max-w-md mx-auto lg:my-9 md:my-9 my-6">
              <iframe 
              className="w-full h-[250px] lg:h-[600px] md:h-[400px] rounded-lg shadow-lg" 
              src={videoSrc} 
              title="Video Title" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>}
          
          {blogDetail?.image && <div className='w-full lg:max-w-7xl md:max-w-3xl max-w-md mx-auto lg:my-9 md:my-9 my-6'>
                <img src={blogDetail?.image} alt="blog image" className='w-[80%] h-[190px] lg:h-[500px] md:h-[350px] rounded-lg shadow-lg' />
          </div>}
          

          <h1 className='lg:text-[44px] md:text-[34px] text-[22px] w-[250px] md:w-[390px] lg:w-[800px]
                   leading-tight font-bold mb-3'>{blogDetail?.title}</h1>
          <p className='lg:text-[18px] md:text-[16px] text-[12px]
                   text-justify mb-24'>{blogDetail?.content}</p>
                 
              </div>
          </Container>    
    </div>
  )
}

export default BlogDetailsPage