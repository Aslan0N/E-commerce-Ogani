import axios from 'axios';
import React, { useEffect } from 'react'

const SingleCard = ({myCard, setMyCard}) => {

 useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((res) => {
        console.log(res.data);
        setMyCard(res.data);
      });
 },[])
  return (

    <>
        {myCard.map((item, index) => {
              return (
                <div className="col-4" key={index}>
                  <div className="card">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="card-body">
                    <div className="title">{item.title}</div>
                    <div className="price">{item.price}</div>
                  </div>
                </div>
              );
            })}
    </>
  )
}

export default SingleCard