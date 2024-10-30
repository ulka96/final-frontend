import React from 'react'
import Hero from '../../components/home/hero'
import Satisfaction from '../../components/home/satisfaction'
import Categories from '../../components/home/categories'
import TopProducts from '../../components/home/topProducts'
import Reviews from '../../components/home/reviews'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Satisfaction />
      <Categories />
      <TopProducts />
      <Reviews/>
    </div>
  )
}

export default HomePage