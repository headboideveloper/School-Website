import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  const [nav,setNav] = useState(false)
   function navHandler () {
      setNav(!nav)
   }
  return (
    <div className='h-[100px] w-full bg-red-800 flex justify-between items-center'>
        <div className='px-8 h-10'>
            <h2 className='font-bold text-white text-3xl'>JACKIE UNIVERSITY</h2>
        </div>
        <div>
            <ul className='space-x-4 px-10 hidden lg:flex uppercase'>
                <li className='border-1 border-black bg-white h-12 w-35 py-3 px-3 hover:bg-black hover:text-white'><a className=' font-semibold' href="#">Plan a Visit</a></li>
                <li className='border-1 border-black bg-white h-12 w-40 py-3 px-3 hover:bg-black hover:text-white'><a className=' font-semibold ' href="#">Request a Visit</a></li>
                <li className='border-1 border-black bg-white h-12 w-40 py-3 px-3 hover:bg-black hover:text-white'><a className=' font-semibold ' href="#">Apply To Jackie</a></li>
                <li className='border-1 border-black bg-white h-12 w-35 py-3 px-3 hover:bg-black hover:text-white'><a className=' font-semibold ' href="#">MyJackie</a></li>
            </ul>
        </div>

        <div onClick={navHandler} className='block md:hidden'>
        {!nav ? <AiOutlineMenu className='text-white' size= {30}/> : <AiOutlineClose className='text-white' size={30}/>}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[70%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h2 className='text-red-700 font-bold w-full text-3xl m-4'>
          JACKIE UNIVERSITY
      </h2>
       <ul className='space-y-4 uppercase p-4 text-black'>
       <li><a href="#" className='p-4 text-red-700 font-bold'>Home</a></li>
      <li><a href="#" className='p-4 text-red-700 font-bold'>About</a></li>
      <li><a href="#" className='p-4 text-red-700 font-bold'>Programmes</a></li>
      <li><a href="#" className='p-4 text-red-700 font-bold'>Booking</a></li>
      <li><a href="#" className='p-4 text-red-700 font-bold'>Contact</a></li>
      </ul>
        </div>
    </div>
  )
}

export default Navbar