import React from 'react';
import PropTypes from 'prop-types';
import {LikeFilled, EyeFilled} from "@ant-design/icons";

const Cards = ({product}) => {
  return (
    <div className='child-cards-container' style={{ height:'260px' ,width:'320px', marginTop:'15px', borderBottomRightRadius:'2%', borderBottomLeftRadius:'2%'}}>
      <div className='child-cards-container' style={{ height:'220px', width:'320px' }}>
        <img className='child-cards-container' style={{ height:'100%', width:'100%', borderRadius:'2%' }} src={product.image} alt='images'/>
      </div>
       <div className='child-cards-container' style={{ height:'30px', width:'320px', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <p style={{ fontWeight:'bold', fontSize:'15px' }}>{product.title}</p>
        <div style={{ display:'flex' , gap:'13px'}}>
        <p style={{ fontSize:'12px',fontWeight:'bolder' }}><LikeFilled style={{ color:'grey', fontSize:'15px'}}/> {product.likes}</p>
        <p style={{ fontSize:'12px',fontWeight:'bolder' }}><EyeFilled style={{color:'grey',fontSize:'15px' }}/> {product.views}</p>
        </div>
       </div>
       <p style={{ fontSize:'12px', marginTop:'-3px', color:'grey' }}>{product.subTitle}</p>
    </div>
  )
}

export default Cards;

Cards.propTypes = {
  product : PropTypes.object.isRequired
}
