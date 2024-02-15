import React from 'react'
import banner from './assets/banner.jpg'

const Hero = () => {
  return (
    <div className='h-[600px] w-full bg-cover mb-22 bg-center shadow-image-dim' style={{backgroundImage: `url(${banner})`}}>
        {/* // <div class="w-full h-full justify-center items-center backdrop-brightness-50">
        // <div className='h-40 text-center items-center font-bold text-white text-4xl lg:text-6xl'>
        //     <h1 className=' py-[310px] lg:py-[330px]'>PREPARING STUDENTS FOR SUCCESSFUL CAREERS</h1>
        // </div>
        // <div className='flex flex-row items-center justify-center space-x-6 py-[280px] lg:py-[310px]'>
        // <li className='list-none bg-red-700 h-12 w-[200px] lg:w-[300px] rounded py-3 text-center font-semibold hover:bg-red-500'><a className='' href="#">REQUEST INFO</a></li>
        // <li className='list-none bg-red-700 h-12 w-[200px] rounded py-3 text-center font-semibold hover:bg-red-500'><a href="#">FIND YOUR PROGRAM</a></li>
        // </div>
        // </div> */}
        <div className='items-center py-[380px] text-center h-60'>
          <h2 className='text-white text-2xl font-bold lg:text-[45px]'>PREPARING STUDENTS FOR SUCCESSFUL CAREERS</h2>
          <div className='py-6 flex flex-col items-center max-w-lg justify-around container mx-auto space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4'>
            <a className='bg-red-700 w-[210px] hover:bg-red-900 h-[40px] py-2 font-bold rounded-full ' href="#">REQUEST INFO</a>
            <a className='bg-red-700 w-[210px] hover:bg-red-900 h-[40px] py-2 font-bold rounded-full ' href="#">FIND YOUR PROGRAM</a>
          </div>
        </div>
    </div>
  )
}

export default Hero