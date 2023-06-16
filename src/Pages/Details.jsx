import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalContext'
import { useParams } from 'react-router-dom'
import DetailsCard from '../Components/DetailsCard'

const Details = () => {
  const {id} = useParams()
  const {detailData} = useContext(GlobalContext)
  const myProduct = detailData.find((item)=> item.id.toString() === id)
  return (
    <>
        {
          !myProduct ? 'wait' : <DetailsCard product={myProduct}/>
        }
    </>
  )
}

export default Details 