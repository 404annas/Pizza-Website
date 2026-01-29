import FoodCategories from '@/components/FoodCategories'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <FoodCategories />
    </div>
  )
}

export default Home