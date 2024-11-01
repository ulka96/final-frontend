import React, { useEffect, useState } from 'react'
import Container from "../../common/containerClass/index"

// Images
import new1 from "../../../assets/home/new1.png"
import new2 from "../../../assets/home/new2.png"
import new3 from "../../../assets/home/new3.png"
import new4 from "../../../assets/home/new4.png"
import new5 from "../../../assets/home/new5.png"
import { Link } from 'react-router-dom'

const slides = [
    {
      id: 1,
      title: 'New Arrival',
      description: 'Discover Our New Collection',
      content: 'Experience the elegance and functionality of cutting-edge design where luxury meets innovation in every piece for ultimate relaxation',
      imageUrl: new1
    },
    {
      id: 2,
      title: 'New Arrival',
      description: 'Discover Our New Collection',
      content: 'Experience the elegance and functionality of cutting-edge design where luxury meets innovation in every piece for ultimate relaxation',
      imageUrl: new2
    },
    {
      id: 3,
      title: 'New Arrival',
      description: 'Discover Our New Collection',
      content: 'Experience the elegance and functionality of cutting-edge design where luxury meets innovation in every piece for ultimate relaxation',
      imageUrl: new3
    },
    {
      id: 4,
      title: 'New Arrival',
      description: 'Discover Our New Collection',
      content: 'Experience the elegance and functionality of cutting-edge design where luxury meets innovation in every piece for ultimate relaxation',
      imageUrl: new4
    },
    {
      id: 5,
      title: 'New Arrival',
      description: 'Discover Our New Collection',
      content: 'Experience the elegance and functionality of cutting-edge design where luxury meets innovation in every piece for ultimate relaxation',
      imageUrl: new5
    }
  ];

const Hero = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);
  
    const goToSlide = (index) => {
      setCurrentSlide(index);
    };
  

  return (
      
      <div className='mt-9 '>
              
          <div className="relative ">
  {slides.map((slide, index) => (
    <div
      key={slide.id}
      className={`h-[65vh] overflow-hidden ${
        index === currentSlide ? "transition-transform duration-700 ease-in-out transform hover:scale-110" : ""
      }`}
      style={{ display: index === currentSlide ? "block" : "none" }}
    > 
        <div className="lg:mt-0 mt-36 absolute left-[5%] top-1/2  transform -translate-y-1/2 text-white lg:max-w-[400px] lg:space-y-2 z-20 px-4 lg:px-0">
        
        <Container>
        <div className='-ml-4 items-baseline mb-11'>
        <h1 className="md:ml-1 lg:mt-24 text-[12px] lg:text-lg md:text-[16px] font-medium text-black">
          {slide.title}
        </h1>
        <p className="text-lg lg:text-[52px] md:text-[32px] font-bold text-[#C4932C] leading-6 md:leading-10 lg:leading-[65px] w-[200px] md:w-[500px] lg:w-[500px]">
          {slide.description}
        </p>
        <h1 className="hidden lg:block md:block  ml-1 text-[14px] lg:text-lg font-medium text-black md:w-[400px]  lg:w-[500px]">
          {slide.content}
        </h1>
        <button className="relative mb-24 md:mb-40 lg:-mb-48 inline-block py-1 px-3 lg:px-6 lg:py-3 md:px-4 md:py-2 md:mt-3 lg:mt-4 mt-3 text-xs lg:text-sm font-semibold uppercase transition-all duration-300 group bg-gradient-to-r from-[#a07822] to-[#C4932C] hover:from-[#C4932C] hover:to-[#a07822] rounded-full text-white">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          </span>
          <Link to="/products">Shop Now</Link>
            </button>
          </div>
        </Container>  
        </div>  
          
      <img
        className="object-cover h-[50vh]  lg:h-auto animate-zoomin "
        src={slide.imageUrl}
        alt={slide.title}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  ))}
  <div className="flex absolute left-1/2 transform -translate-x-1/2 bottom-[20px] cursor-pointer">
    {slides.map((_, index) => (
      <span
        key={index}
        className={`lg:h-[15px] lg:w-[15px] md:h-[10px] md:w-[10px] h-[8px] w-[8px] border-[1px] lg:border-[3px] md:border-[2px] border-[#ffffffcc] rounded-full mx-2 ${
          index === currentSlide ? "bg-[#a07822]" : "bg-transparent"
        } hover:border-[#a07822]`}
        onClick={() => goToSlide(index)}
      ></span>
    ))}
  </div>
</div>

              






    </div>
    
  )
}

export default Hero