import React from 'react'

const Records = () => {
  return (
    <div className='w-full container mx-auto text-white h-[1600px] lg:h-[700px] bg-black mb-20'>
        <div className='flex flex-col items-center text-center py-20 justify-around border-b-8 border-red-700 space-y-12 lg:flex-row lg:space-y-0 lg:space-x-6'>
            <div>
              <h2 className='text-[80px] lg:text-[110px] mt-5 py-6'>30+</h2>
              <p className='py-6 uppercase font-bold text-2xl underline decoration-4 decoration-red-700 underline-offset-8'>Undergraduate Program</p>
            </div>

            <div>
              <h2 className='text-[80px] lg:text-[110px] mt-5 py-6'>20+</h2>
              <p className='py-6 uppercase font-bold text-2xl hover:underline decoration-4 decoration-red-700 hover:underline-offset-8'>Undergraduate Program</p>
            </div>

            <div className=''>
              <h2 className='text-[80px] lg:text-[110px] mt-5 py-6'>18</h2>
              <p className='py-6 uppercase font-bold text-2xl hover:underline decoration-4 decoration-red-700 hover:underline-offset-8'>Undergraduate Program</p>
            </div>
        </div>
        <div className='w-full container mx-auto'>
          <p className='px-6 text-[23px] py-4'>Business Administration. Criminal Justice Administration. Cybersecurity. Health Care. Nursing. Psychology. Social Work</p>
        </div>
        <div className='py-2 flex-col flex space-y-12 mt-6 items-center text-centerfont-semibold justify-around lg:flex-row lg:space-y-0 lg:space-x-6'>
        <div className=' w-[350px] h-[50px] py-2 text-center border-2 border-red-600 hover:bg-white hover:text-red-700'>
          <a href="#">VIEW ALL UNDERGRADUATE PROGRAMS</a>
        </div>
        <div  className=' w-[350px] h-[50px] py-2 text-center border-2 border-red-600 hover:bg-white hover:text-red-700'>
        <a href="#">VIEW ALL GRADUATE PROGRAMS</a>
        </div>
        <div  className=' w-[350px] h-[50px] py-2 text-center border-2 border-red-600 hover:bg-white hover:text-red-700'>
        <a href="#">VIEW ALL PROGRAMS</a>
        </div>
        </div>
    </div>
  )
}

export default Records