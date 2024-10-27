import React, { useEffect, useState } from 'react'
import Container from "../../common/containerClass/index"

// Images
import new1 from "../../../assets/home/new1.png"
import new2 from "../../../assets/home/new2.png"
import new3 from "../../../assets/home/new3.png"
import new4 from "../../../assets/home/new4.png"
import new5 from "../../../assets/home/new5.png"

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
      <div className='mt-9'>
          <Container>
              
          <div className="relative w-full ">
  {slides.map((slide, index) => (
    <div
      key={slide.id}
      className={`h-[655px] overflow-hidden ${
        index === currentSlide ? "transition-transform duration-700 ease-in-out transform hover:scale-110" : ""
      }`}
      style={{ display: index === currentSlide ? "block" : "none" }}
      > 
        <div className=" absolute left-[5%] top-1/2 transform -translate-y-1/2 text-white max-w-[400px] space-y-2 z-20 px-4 lg:px-0">
        <h1 className="ml-1 text-[14px] lg:text-lg font-medium text-black">
          {slide.title}
        </h1>
        <p className="text-3xl lg:text-[52px] font-bold text-[#C4932C] leading-[65px] w-[500px]">
          {slide.description}
        </p>
        <h1 className="ml-1 text-[14px] lg:text-lg font-medium text-black  w-[500px]">
          {slide.content}
        </h1>
        <button className="relative inline-block px-6 py-3 mt-4 text-sm font-semibold uppercase transition-all duration-300 group bg-gradient-to-r from-[#a07822] to-[#C4932C] hover:from-[#C4932C] hover:to-[#a07822] rounded-full text-white">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          </span>
          Shop Now
        </button>
      </div>    
          
      <img
        className="object-cover w-full h-full animate-zoomin "
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
        className={`h-[15px] w-[15px] border-[3px] border-[#ffffffcc] rounded-full mx-2 ${
          index === currentSlide ? "bg-[#a07822]" : "bg-transparent"
        } hover:border-[#a07822]`}
        onClick={() => goToSlide(index)}
      ></span>
    ))}
  </div>
</div>

              






          </Container>
    </div>
  )
}

export default Hero