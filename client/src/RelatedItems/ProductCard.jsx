import React from 'react';
import ProductInfo from './ProductInfo.jsx';

const ProductCard = () => {
  return (
    <div className='product-card'>
      {console.log('product card loaded')}
      {/* <button className='action-button' /> */}
      <div className='preview-image'>

      </div>
      <div className='product-info'>
        <ProductInfo />
      </div>
    </div>
  )
};

export default ProductCard;