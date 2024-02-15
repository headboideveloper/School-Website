import React from 'react'
import {FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-slate-800 w-full h-[1300px] lg:h-[400px] items-center text-center py-16'>
        <div className='flex flex-col justify-around items-center lg:flex-row lg:space-x-6 space-y-6'>
         
         <div>
         <div className='py-6 space-y-6 lg:space-y-8 pl-5'>
              <h2 className='font-bold text-gray-400 text-2xl'>JACKIE UNIVERSITY</h2>
              <p className=' text-gray-600 font-semibold'>&copy; 2023 JACKIE UNIVERSITY</p>
              <div className='flex flex-col space-y-4 items-center justify-between lg:flex-row lg:space-y-0 lg:space-x-4'>
                <FaDribbbleSquare className='bg-red' size={30}/>
                <FaFacebookSquare size={30}/>
                <FaGithubSquare size={30}/>
                <FaInstagramSquare size={30}/>
                <FaTwitterSquare size={30}/>
              </div>
          </div>
         </div>
         <div>
         <div className='py-8 space-y-4 lg:space-y-3 ml-7'>
              <h2 className='font-bold text-gray-400'>870 ABC Park Drive</h2>
              <p className=' font-bold text-gray-400'>GHKL, MO</p>
              <p className=' font-bold text-gray-400'>64532</p>
              <p className=' font-bold text-gray-400'>115-381-1000</p>
              <p className=' font-bold text-gray-400'>MY JACKIE</p>
            </div>
         </div>
         <div>
         <div className='py-6 space-y-6 lg:space-y-8'>
              <h2 className='font-bold text-gray-400 border-b-2 border-gray-700 uppercase'>Accredited University</h2>
              <p className='font-bold text-gray-400 border-b-2 border-gray-700'>BLOG</p>
              <p className='font-bold text-gray-400 border-b-2 border-gray-700 uppercase'>Concern Form</p>
           </div>
         </div>
         <div>
         <div className='py-6 space-y-6 lg:space-y-8 pl-5'>
            <h2 className='font-bold text-gray-400 border-b-2 border-gray-700 uppercase'>Consumer Information</h2>
              <p className='font-bold text-gray-400 border-b-2 border-gray-700'>DISABILITY SERVICES</p>
              <p className='font-bold text-gray-400 border-b-2 border-gray-700 uppercase'>JOBS AT JACKIE</p>
          </div>
         </div>
         <div>
         <div className='py-6 space-y-6 lg:space-y-8 pr-8'>
            <h2 className='font-bold text-gray-400 border-b-2 border-gray-700 uppercase'>news</h2>
              <p className='font-bold text-gray-400 border-b-2 border-gray-700 uppercase'>terms & conditions</p>
              <p className='font-bold text-gray-400 border-b-2 border-gray-700 uppercase'>title vi and non-discrimination</p>
            </div>
         </div>
        </div>
    </div>
  )
}

export default Footer