import React from 'react'
import Vegetable from '../HomeComponents/Vegetable'
import GlobSec from '../../Components/GlobSec'
import Department from './Department'

const Shop = () => {
  return (
    <>
      <Vegetable/>
      <GlobSec title={"Organi Shop"} loc={"Shop"}/>
      <Department/>
    </>
  )
}

export default Shop