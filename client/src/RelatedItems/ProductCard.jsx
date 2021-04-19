import React from 'react';
import ProductInfo from './ProductInfo.jsx';
import styles from './relatedItems.module.css'

const ProductCard = ({ product, image }) => {
  return (
    <div className={styles.productCard}>
      {console.log('product card loaded')}
      {/* <button className='action-button' /> */}
      <div className='preview-image'>IMAGE</div>
      <ProductInfo product={product}/>
    </div>
  )
};

export default ProductCard;