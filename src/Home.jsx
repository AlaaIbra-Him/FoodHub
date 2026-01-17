import React from 'react'
import Hero from './Hero'
import About from './About'
import Cards from './Cards'
import Blogs from './Blogs'

function Home() {
  return (
    <div className='text-amber-50 bg-gradient-to-br from-green-900 via-gray-900 to-gray-950 px-4'>
      <Hero />
      <div className='border-t border-green-700'></div>
      <Blogs />
      <div className='border-t border-green-700'></div>
      <Cards />
      <div className='border-t border-green-700'></div>
      <About />
    </div>
  )
}

export default Home