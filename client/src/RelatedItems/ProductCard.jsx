import React, { useState } from 'react';
import ProductInfo from './ProductInfo.jsx';
import styles from './relatedItems.module.css'

const ProductCard = ({ product, image, outfit, handleClick }) => {
  return (
    <div className={styles.productCard}>
      {/* <button className='action-button' /> */}
      <div className={styles.img}>
        <img src={image} onClick={() => handleClick(product)} className={styles.img}/>
      </div>
      <ProductInfo product={product}/>
    </div>
  )
};

export default ProductCard;