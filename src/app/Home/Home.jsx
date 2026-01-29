import FoodCategories from '@/components/FoodCategories'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import React from 'react'
import PopularPizza from '@/components/PopularPizza'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <FoodCategories />
        <About />
        <PopularPizza />
    </div>
  )
}

export default Home