import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Records from './components/Records'
import Aids from './components/Aids'
import Booking from './components/Booking'
import Accessibility from './components/Accessibility'

import Apply from './components/Apply'
import RecentPosts from './components/RecentPosts'
import { Nextsteps } from './components/Nextsteps'
import Footer from './components/Footer'
import Copyright from './components/Copyright'

const App = () => {
  return (
    <div className='bg-white text-black'>
      <Navbar/>
      <Hero/>
      <About/>
      <Records/>
      <Aids/>
      <Booking/>
      <Accessibility/>
      <Apply/>
      <RecentPosts/>
      <Nextsteps/>
      <Footer/>
      <Copyright/>
      </div>
  )
}
export default App