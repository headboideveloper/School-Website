import React from 'react'

const RecentPosts = () => {
  return (
    <div className='w-full bg-gray-100 h-120 mb-20'>
    <div className='lg:py-20 py-8 items-center text-center max-w-md container mx-auto '>
        <h2 className='font-bold text-red-700 text-4xl lg:text-4xl capitalise underline'>Recent Posts</h2>
        </div>
        <div className='flex flex-col items-center justify-around space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6 container mx-auto'>
          <div>
            <h2 className='text-[18px] font-semibold'>How to Develop Exceptional Leadership Skills in 2023</h2>
            <p className='max-w-sm py-6 text-gray-500'>While some people have intrinsic personality traits that make them natural leaders, learning how to develop leadership skills will help you add value and make you a better leader.</p>
<p><li className='border-2 border-red-700 w-[150px] list-none mb-4 text-center h-[40px] py-[6px] font-semibold hover:bg-red-700' ><a className='hover:text-white text-red-700' href="#">READ MORE</a></li></p>
          </div>
          <div>
            <h2 className='text-[18px] font-semibold'>Top Career Opportunities for MBA Graduates in 2023</h2>
            <p className='max-w-sm py-6 text-gray-500'>While some people have intrinsic personality traits that make them natural leaders, learning how to develop leadership skills will help you add value and make you a better leader.</p>
            <p><li className='border-2 border-red-700 w-[150px] list-none mb-4 text-center h-[40px] py-[6px] font-semibold hover:bg-red-700' ><a className='hover:text-white text-red-700' href="#">READ MORE</a></li></p>
          </div>
          <div>
            <h2 className='text-[18px] font-semibold'>Top 20 Nursing Skills You Learn from a Nursing Degree</h2>
            <p className='max-w-sm py-6 text-gray-500'>While some people have intrinsic personality traits that make them natural leaders, learning how to develop leadership skills will help you add value and make you a better leader.</p>
            <p><li className='border-2 border-red-700 w-[150px] list-none mb-4 text-center h-[40px] py-[6px] font-semibold hover:bg-red-700' ><a className='hover:text-white text-red-700' href="#">READ MORE</a></li></p>
          </div>
        </div>
        </div>
  )
}

export default RecentPosts