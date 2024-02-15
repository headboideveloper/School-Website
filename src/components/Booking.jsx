import React from 'react'
import one from '../components/assets/one.jpg'
import two from '../components/assets/two.jpg'
import three from '../components/assets/three.jpg'
import four from '../components/assets/matese-fields-pvHma684eEI-unsplash.jpg'

const Booking = () => {
  return (
    <div className='w-full bg-gray-100'>
    <div className='items-center text-center max-w-md container mx-auto '>
        <h2 className='font-bold text-red-700 text-3xl lg:text-4xl underline'>Online & On-Campus</h2>
       <p className='py-6 text-gray-500'>With our flagship campus in Jackieville, our new residential
campus in Gilbert, campus centers across the U.S., and over
50 online degrees, your goals are just within reach.</p> 
    </div>

    <div className='flex flex-col container mx-auto items-center justify-around space-y-8 lg:space-x-4 lg:flex-row lg:space-y-0 mb-20'>
        <div className='relative'>
            <img className='w-[300px] h-[350px] z-10 hover:opacity-70 hover:scale-105 duration-500 rounded-lg' src={one} alt="" />
            <p className='absolute bottom-0 bg-black w-[300px] h-10 text-center mt-[-30px] text-white tracking-widest font-bold uppercase'>online</p>
        </div>
        <div>
        <img className='w-[300px] h-[350px] z-10 hover:opacity-70 hover:scale-105 duration-500 rounded-lg' src={two} alt="" />
        <p className='absolute bg-black w-[300px] h-10 mt-[-40px] text-center text-white tracking-widest font-bold uppercase'>JackieVille, OZ</p>

        </div>
        <div>
        <img className='w-[300px] h-[350px] z-10 hover:opacity-70 hover:scale-105 duration-500 rounded-lg' src={three} alt="" />
        <p className='absolute mt-[-40px] bg-black w-[300px] h-10 text-center text-white tracking-widest font-bold uppercase'>campus center</p>
        </div>

        <div>
        <img className='w-[300px] h-[350px] z-10 hover:opacity-70 hover:scale-105 duration-500 rounded-lg' src={four} alt="" />
        <p className='absolute mt-[-40px] bg-black w-[298px] h-10 text-center text-white tracking-widest font-bold uppercase'>gilbert, az</p>
        </div>
    </div>
    </div>
  )
}

export default Booking