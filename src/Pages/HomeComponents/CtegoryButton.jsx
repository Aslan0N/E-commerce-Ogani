import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext';

const CtegoryButton = () => {
    const context = useContext(GlobalContext)
  return (
    <>
       <section id='btn-category'>
       <h1>Featured Product</h1>
        <div className="btn-con">
          {context.category.map((item, index) => {
            return (
              <button
                className="btn-category"
                key={index}
                onClick={() => context.myFilter(item)}
              >
                {item}
              </button>
            );
          })}
        </div>
       </section>
    </>
  )
}

export default CtegoryButton