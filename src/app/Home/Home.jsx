"use client"

import FoodCategories from '@/components/FoodCategories'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import React, { useState } from 'react'
import PopularPizza from '@/components/PopularPizza'
import PieTypes from '@/components/PieTypes'

const Home = () => {
  const [category, setCategory] = useState("PIZZA")

  return (
    <div>
      <Navbar />
      <Hero />
      <PieTypes />
      <FoodCategories activeCategory={category} onSelectCategory={setCategory} />
      {/* <About /> */}
      <PopularPizza activeCategory={category} />
    </div>
  )
}

export default Home