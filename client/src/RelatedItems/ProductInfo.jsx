import React from 'react';
import StarRating from '../SharedComponents/StarRating.jsx'
import styles from './relatedItems.module.css'

const ProductInfo = ({ product }) => {
  return (
    <div className={styles.productInfo}>
      {console.log('product info loaded')}
      <h5 className={styles.productText}>{product.category}</h5>
      <h4 className={styles.productText}>{product.name}</h4>
      <h5 className={styles.productText}>{product.default_price}</h5>
      <div className={styles.productText}>
        <StarRating starRating={4.0}/>
      </div>
    </div>
  )
};

export default ProductInfo