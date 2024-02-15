import React from 'react'

export const Nextsteps = () => {
  return (
    <div className='text-center items-center mb-24'>
        <h2 className='font-bold text-[22px] lg:text-4xl'>READY TO TAKE THE NEXT STEP?</h2>
        <p className='py-4 font-semibold text-gray-500  lg:text-2xl'>Fall 2 Classes Start August <span className='border-r-2 px-2'>28</span> <a className='underline decoration-red-700' href="#">Terms Date</a></p>
        <div className='flex flex-col space-y-6 w-full items-center text-center lg:px-72 py-6 lg:space-x-4 lg:space-y-0 lg:flex-row' >
        <p> <li className='list-none bg-red-700 h-12 w-[300px] rounded-full py-3 text-center text-white font-semibold hover:bg-red-500'><a href="#">REVIEW INFO</a></li></p>
        <p> <li className='list-none bg-red-700 h-12 w-[300px] rounded-full py-3 text-center text-white font-semibold hover:bg-red-500'><a href="#">APPLY NOW</a></li></p>
        </div>
    </div>
  )
}
