import React from 'react';
import {products} from "../data.js";
import Cards from './Cards.jsx';
const MainContent = () => {
  return (
    <div className ='card-container' style={{ display:'flex', gap:'20px', flexWrap:'wrap' , borderTop:'1px solid #E0E0E0', marginTop:'10px', justifyContent:'center'}}>
      {
        products.length >0 && products.map((
          product, index
        )=>{
          return <Cards key={index} product={product} />
        })
      }
    </div>
  )
}

export default MainContent;
