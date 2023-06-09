import React from 'react'
import Vegetable from './Vegetable'
import FruitsCategory from './FruitsCategory'
import Summer from './Summer'
import FromBlog from './FromBlog'
import Carousel from './Carousel'
import VegetableImg from './VegetableImg'
import CategoryButton from './CtegoryButton'


const Home = () => {
  return (
    <>
      <Vegetable/>
      <VegetableImg/>
      <CategoryButton/>
      <FruitsCategory/>
      <Summer/>
      <Carousel/>
      <FromBlog/>
      
    </>
  )
}

export default Home