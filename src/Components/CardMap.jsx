import React, { useContext } from 'react'
import DetailsCard from './DetailsCard'
import { GlobalContext } from '../Context/GlobalContext'

const CardMap = () => {

   const {detailData} = useContext(GlobalContext)


  return (
    <>
    <div className="container">
        <div className="row g-4">
            {
            detailData.map((item)=>{
                return <DetailsCard product={item} key={item.id} />
            })
        }
        </div>
    </div>
        
    </>
  )
}

export default CardMap