import React, { useState } from "react";
import SingleCard from "./SingleCard";

const Pages = () => {
  const [data, setData] = useState(30);
  const [myCard, setMyCard] = useState([]);


  const myFilter = (price) =>{
    const filtered = myCard.filter(elem=> elem.price === price )
    setMyCard(filtered)
  }

  return (
    <>
      <section id="page">
        <div className="container">
          <input
            type="range"
            min={0}
            max={100}
            value={data}
            onChange={(e) => {
              setData(e.target.value)
              myFilter(e.target.value)
            }}
          />
          <h3>{data}</h3>
        </div>
      </section>
      <section className="myCard">
        <div className="container">
          <div className="row">
            <SingleCard myCard={myCard} setMyCard={setMyCard} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Pages;
