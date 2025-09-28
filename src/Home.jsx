import React from 'react'
import Hero from './Hero'
import About from './About'
import Cards from './Cards'
import Blogs from './Blogs'

function Home() {
  return (
    <div className='text-amber-50'>
        <Hero/>
        <Blogs/>
        <Cards/>
        <About/>
    </div>
  )
}

export default Home