// Accordion.jsx
import React, { useState } from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";


const Faq = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

  return (
    <div className="w-full lg:max-w-[1280px] mx-auto p-4 ">
      <h2 className="lg:text-[28px] md:text-[26px] text-[20px] font-semibold mb-6 text-center">
        We have got the answers to your questions
          </h2>
          
      <div className="space-y-4">
      <div
        className="border-t border-gray-200 py-4 flex items-start justify-between">
        <div className="flex items-start space-x-4">
          <span className="lg:text-[23px] font-semibold lg:mr-16 md:text-[20px] text-[16px]">01</span>
          <div>
            <p
              className="lg:text-[23px] md:text-[20px] text-[16px] font-medium cursor-pointer">
              What types of furniture do you offer?
            </p>
              <p className="text-[#816e81] mt-2 lg:text-[18px] md:text-[16px] text-[13px] lg:w-[922px] md:w-[588px] w-[300px]">We offer a wide range of contemporary furniture including sofas, chairs, tables, beds, storage solutions, and outdoor furniture. Our collection is designed to suit modern aesthetics and functional needs.</p>
          </div>
            </div>
        <button className="lg:ml-2 md:ml-2 lg:p-[10px]  md:p-[10px] p-[8px] rounded-full bg-[#f8f7fb]">
            <BsArrowDown className="lg:w-6 lg:h-6  md:w-6 md:h-6  w-5 h-5  text-[#7f74df]" />
            {/* <BsArrowUp className="text-gray-500" /> */}
        </button>             
      </div>
  </div>
          





  <div className="space-y-4">
      <div
        className="border-t border-gray-200 py-4 flex items-start justify-between">
        <div className="flex items-start space-x-4">
          <span className="lg:text-[23px] font-semibold lg:mr-16 md:text-[20px] text-[16px]">01</span>
          <div>
            <p
              className="lg:text-[23px] md:text-[20px] text-[16px] font-medium cursor-pointer">
              What types of furniture do you offer?
            </p>
              <p className="text-[#816e81] mt-2 lg:text-[18px] md:text-[16px] text-[13px] lg:w-[922px] md:w-[588px] w-[300px]">We offer a wide range of contemporary furniture including sofas, chairs, tables, beds, storage solutions, and outdoor furniture. Our collection is designed to suit modern aesthetics and functional needs.</p>
          </div>
            </div>
        <button className="lg:ml-2 md:ml-2 lg:p-[10px]  md:p-[10px] p-[8px] rounded-full bg-[#f8f7fb]">
            <BsArrowDown className="lg:w-6 lg:h-6  md:w-6 md:h-6  w-5 h-5  text-[#7f74df]" />
            {/* <BsArrowUp className="text-gray-500" /> */}
        </button>             
      </div>
  </div>
    </div>
  );
};

export default Faq;
