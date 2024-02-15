import React from 'react'
import photo from '../components/assets/yes.jpg'

const Aids = () => {
  return (
    <section id='hero' className='flex flex-col container mx-auto p-6 lg:flex-row'>
    <div className='flex flex-col items-center space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52'>
        <h2 className='font-bold text-red-700 text-xl text-center lg:text-left'>Making Education Accessible</h2>
        <p className='text-gray-600 text-center lg:text-left'>At Jackie, you’ll be welcomed into a diverse community of learners
of different races, genders, ages and ethnicities. With online and
on-campus learning available, our students are scattered around
the country and the world.</p>

<p  className='text-gray-600 text-center lg:text-left'>
We want each student to feel included, supported and recognized
as they earn their degree. No matter where you come from,
earning a degree is a challenging but rewarding venture that
allows you to not only connect and learn from others, but maybe
teach something along the way.
</p>
<p><a className='border-b-2 border-red-700' href="#">Non-discriminatory Policy</a></p>
        </div>

    <div className='mb-24 mx-auto md:w-180 lg:w-1/2 lg:mb-0 flex justify-center items-center'>
    <img className='w[500px] h-[600px] z-10 opacity-90 rounded-lg' src={photo} alt='banner'/>
    </div>
    </section>
  )
}

export default Aids