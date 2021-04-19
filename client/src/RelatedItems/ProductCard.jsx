import React from 'react';
import ProductInfo from './ProductInfo.jsx';
import styles from './relatedItems.module.css'

const ProductCard = () => {
  return (
    <div className={styles.productCard}>
      {console.log('product card loaded')}
      {/* <button className='action-button' /> */}
      <div className='preview-image' />
      <ProductInfo />
    </div>
  )
};

export default ProductCard;