import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import React from 'react'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
    </div>
  )
}

export default Home