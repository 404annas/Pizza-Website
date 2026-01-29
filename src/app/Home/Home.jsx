import FoodCategories from '@/components/FoodCategories'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import React from 'react'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <FoodCategories />
        <About />
    </div>
  )
}

export default Home