import React from 'react'
import Container from "../../components/common/containerClass/index"

import video from "../../assets/blog/video.mp4"

const BlogDetailsPage = () => {
  return (
      <div>
          <Container>
              <div>
              <div className="w-full lg:max-w-7xl md:max-w-3xl max-w-md mx-auto lg:my-9 md:my-9 my-6">
              <iframe 
              className="w-full h-[250px] lg:h-[600px] md:h-[400px] rounded-lg shadow-lg" 
              src="https://www.youtube.com/embed/gE7iqtZd5Lk" 
              title="Video Title" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
                </div>
                  <h1 className='lg:text-[44px] md:text-[34px] text-[22px] w-[250px] md:w-[390px] leading-tight font-bold mb-3'>Simple Christmas Decor Ideas</h1>
                  <p className='lg:text-[18px] md:text-[16px] text-[12px] text-justify mb-24'>Susan went for an organic approach using pine cones, greenery and fruit in place of glitzy decor. She started by trimming the Christmas tree with natural ornaments made of wood. Next, Susan created a rustic table centerpiece and dressed up the plate rack with fresh greens and a wreath.<br/> The dining room is kept simple with mini cypress trees, while the living room has hits of greenery and candles that glow with warmth. The porch is transformed into a cozy outdoor oasis complete with a garland wrapped around the railing and festive pillows and throws.</p>
                 

              </div>
          </Container>    
    </div>
  )
}

export default BlogDetailsPage