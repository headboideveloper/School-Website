import React from 'react'
import photo from '../components/assets/aids.jpg'

const Aids = () => {
  return (
    <section id='hero' className='flex flex-col-reverse container py-20 mx-auto p-6 lg:flex-row'>
    <div className='flex flex-col items-center space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52'>
        <h2 className='font-bold text-center text-[23px] border-b-2 border-red-700 lowercase lg:text-left'>MAKING COLLEGE AFFORDABLE</h2>
        <p className='text-gray-600 text-center lg:text-left'>Paying for your college degree is possible! At Jackie University, we
offer financial aid, scholarships, grants and lots of discounts to
help you pay for college.</p>
<p className='text-gray-600 text-center lg:text-left'>Whether you’re a recent high school graduate or a working
adult with a family, we can provide you with the education,
resources, support and opportunities you need to earn your
degree and achieve your goals.</p>
<p> <li className='list-none bg-red-700 h-12 w-[300px] rounded-full py-3 text-center text-white font-semibold hover:bg-red-500'><a href="#">VIEW SCHOLARSHIPS</a></li></p>
<p> <li className='list-none bg-red-700 h-12 w-[300px] rounded-full py-3 text-center text-white font-semibold hover:bg-red-500'><a href="#">EXPLORE FINANCIAL AIDS</a></li></p>
        </div>

    <div className='mb-24 mx-auto md:w-180 lg:w-1/2 lg:mb-0 flex justify-center items-center'>
    <img className='w[500px] h-[600px] z-10 rounded-lg' src={photo} alt='banner'/>
    </div>
    </section>
  )
}

export default Aids