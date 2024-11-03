import React from 'react'
import Container from "../../components/common/containerClass/index"

import video from "../../assets/blog/video.mp4"

const BlogDetailsPage = () => {
  return (
      <div>
          <Container>
              <div>
              <div className="w-full lg:max-w-6xl md:max-w-2xl max-w-md mx-auto lg:my-9 md:my-9 my-6">
              <iframe 
              className="w-full h-[250px] lg:h-[600px] md:h-[400px] rounded-lg shadow-lg" 
              src="https://www.youtube.com/embed/xfT31ZVedxE" 
              title="Video Title" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
                </div>
                  <h1 className='lg:text-[44px] md:text-[34px] text-[28px] font-bold mb-3'>Title of Blog</h1>
                  <p className='lg:text-[18px] md:text-[16px] text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem perferendis inventore quo, explicabo enim id commodi quos voluptatibus ipsam vero aspernatur dolor veniam totam officia perspiciatis, assumenda, voluptatum nostrum!
                  Voluptatibus vitae aspernatur accusantium repellendus nihil molestias officiis quaerat explicabo corrupti! Accusantium placeat recusandae esse itaque quos. Repellat, quidem voluptatibus iste delectus, aliquam quae voluptatum, nesciunt eius rerum facere perferendis.
                  Omnis fuga tenetur molestiae, voluptatum optio voluptatem fugiat dolores eum veritatis accusamus doloremque facere explicabo rerum labore delectus tempore corrupti. Quasi rem similique ducimus animi veniam quibusdam eos cupiditate. Modi.
                  Beatae iure tempora cumque, saepe, similique dolorem earum velit ratione, adipisci soluta sapiente dicta eius dolorum accusamus porro? Nostrum fuga pariatur labore cum dolorem voluptatibus voluptas natus, quod tempore id?
                  Porro qui, esse voluptatibus quas deserunt suscipit illum id, natus tenetur nobis ratione quae aut repellendus libero ad sed facilis, expedita officiis quam recusandae? Quos animi enim veritatis. Ex, eius.
                  Magni cum, tempora omnis totam impedit modi voluptatem aliquid? Nemo, deserunt repudiandae quisquam quas soluta odit ab officia rerum tempore eos cupiditate suscipit provident eaque. Quos minus deleniti enim deserunt!
                  Fuga asperiores quia eum earum molestiae voluptates eligendi temporibus cum, odit repellendus veniam, recusandae tempore sapiente voluptate ipsa excepturi soluta in reiciendis est deserunt. Consectetur aut corrupti explicabo. Soluta, hic.
                  Quae molestias vero dolore tempora ut nesciunt nemo accusamus nostrum praesentium, maiores veniam, adipisci odit quos officia iusto voluptatum magnam tenetur eius in? Error culpa excepturi deleniti ipsa est soluta.
                  Harum, ad deleniti? Doloribus ex quisquam necessitatibus perspiciatis labore, distinctio reprehenderit explicabo mollitia alias voluptatum expedita, dicta cupiditate molestias minima. Optio, laboriosam facere quasi odio ea sit quaerat accusantium enim.
                  Quasi sed, ducimus perspiciatis doloribus magni sit sapiente voluptatibus. Quos officiis repellat nostrum praesentium voluptatum laudantium ex ipsum ratione, itaque voluptas dolor? Obcaecati ipsam aperiam quasi voluptas perferendis, aspernatur esse!</p>
                 

              </div>
          </Container>    
    </div>
  )
}

export default BlogDetailsPage