// Reviews.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from '../../common/containerClass';
import SingleReview from '../singleReview';
import { useSelector } from 'react-redux';

const Reviews = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 600,
        draggable: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 393,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 834,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ],
        customPaging: i => (
            <button className="w-3 h-3 rounded-full bg-gray-400 opacity-50 hover:bg-gray-500 transition-all duration-300 focus:outline-none">
            </button>
        )
    };

    const reviews = useSelector((state) => state.reviews.reviews)


    return (
        <section className="w-full overflow-hidden flex flex-row lg:p-8 p-4 justify-center items-center bg-[#f7f7f7] mb-5 mt-20">
            <Container>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='lg:text-[36px] text-[18px] font-semibold'>What Our Customer Say</h1>
                    <p className='w-[300px] lg:w-[351px] text-[12px] lg:text-[14px] text-center text-[#505050] mb-7'>Discover the Stories and Experiences of Our Delighted Customers</p>
                </div>
                
                <Slider {...settings} className="lg:space-x-3 space-x-3 md:mb-4 mb-2 overflow-hidden">
                    {
                        reviews && reviews.map((review) => {
                            return <SingleReview key={review._id} review={review} />
                        })
                    }                    
                     
                    {/* <SingleReview />
                    <SingleReview />
                    <SingleReview />
                    <SingleReview /> */}
                    
                </Slider>
            </Container>
        </section>
    );
};

export default Reviews; 
