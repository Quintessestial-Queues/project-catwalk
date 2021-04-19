import React from 'react';
import StarRating from '../SharedComponents/StarRating.jsx'

const ProductInfo = ({ product }) => {
  return (
    <div className='productInfo'>
      {console.log('product info loaded')}
      <h4>Category</h4>
      <h3>Expanded Product Name</h3>
      <h4>Price</h4>
      <StarRating starRating={4.0}/>
    </div>
  )
};

export default ProductInfo