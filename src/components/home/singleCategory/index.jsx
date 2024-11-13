import React from 'react'


const SingleCategory = ({category}) => {
    return (
      <>
      <div className='lg:w-[400px] lg:h-[180px] w-[200px] h-[90px] md:w-[300px] md:h-[130px] bg-[#f6f6f6] rounded-lg relative shrink-0 '>
          <div className='flex flex-row'>
              <div className='flex flex-col gap-1 md:gap-2 lg:gap-3 ml-[18px] md:ml-[26px] lg:ml-[36px] mt-6 md:mt-10 lg:mt-12 '>
                        <h1 className='text-black text-[10px] md:text-[15px] lg:text-[20px] font-semibold'>{category.title }</h1>
                  <div className='py-1 px-2 md:py-2 md:px-4 lg:py-2 lg:px-4 text-[8px] md:text-[12px] lg:text-[14px] bg-white rounded-full font-semibold items-center justify-center mx-auto'>
                      <button>
                          See More
                      </button>
                  </div>

                  <div>
                      <img src={`http://localhost:3000/${category.categoryPic}`} alt="armchair" className='w-[96px] h-[80px] md:w-[150px] md:h-[120px] lg:w-[211px] lg:h-[180px] top-0 right-0 absolute' />
                  </div>
              </div>
          </div>
      </div>
       

      

</>
  )
}

export default SingleCategory