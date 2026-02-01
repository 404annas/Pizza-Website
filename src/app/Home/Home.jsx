"use client"

import FoodCategories from '@/components/FoodCategories'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import React, { useState } from 'react'
import PopularPizza from '@/components/PopularPizza'

const Home = () => {
  const [category, setCategory] = useState("PIZZA")

  return (
    <div>
      <Navbar />
      <Hero />
      <FoodCategories activeCategory={category} onSelectCategory={setCategory} />
      <About />
      <PopularPizza activeCategory={category} />
    </div>
  )
}

export default Home