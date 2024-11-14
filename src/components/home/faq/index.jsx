import React, { useEffect, useState } from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

const Faq = () => {
  const [openStates, setOpenStates] = useState([]); 
  const [faqs, setFaqs] = useState([]);

  const fetchFaqs = async() => {
    const response = await fetch("http://localhost:3000/api/faqs");
    const data = await response.json();
    setFaqs(data);
    setOpenStates(new Array(data.length).fill(false));  
  };

  useEffect(() => {
    fetchFaqs();
  }, []);

  const toggleAccordion = (index) => {
    setOpenStates((prevOpenStates) => {
      const newOpenStates = [...prevOpenStates];
      newOpenStates[index] = !newOpenStates[index];
      return newOpenStates;
    });
  };

  return (
    <div className="w-full lg:max-w-[1280px] mx-auto p-4 ">
      <h2 className="lg:text-[28px] md:text-[26px] text-[20px] font-semibold mb-6 text-center">
        We have got the answers to your questions
      </h2>
      
      {faqs.map((faq, index) => (
        <div key={index} className="space-y-4">
          <div className="border-t border-gray-200 py-4 flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <span className="lg:text-[23px] font-semibold lg:mr-16 md:text-[20px] text-[16px]">
                {index + 1}
              </span>
              <div>
                <p
                  className="lg:text-[23px] md:text-[20px] text-[16px] font-medium cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.question}
                </p>
                {openStates[index] && ( 
                  <p className="text-[#816e81] mt-2 lg:text-[18px] md:text-[16px] text-[13px] lg:w-[922px] md:w-[588px] w-[300px]">
                    {faq.answer}
                  </p>
                )}
              </div>
            </div>
            <button
              onClick={() => toggleAccordion(index)}
              className="lg:ml-2 md:ml-2 lg:p-[10px] md:p-[10px] p-[8px] rounded-full bg-[#f8f7fb]"
            >
              {openStates[index] ? (
                <BsArrowUp className="lg:w-6 lg:h-6 md:w-6 md:h-6 w-5 h-5 text-[#7f74df]" />
              ) : (
                <BsArrowDown className="lg:w-6 lg:h-6 md:w-6 md:h-6 w-5 h-5 text-[#7f74df]" />
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
