import React, { useState } from 'react';
import ProductInfo from './ProductInfo.jsx';
import styles from './relatedItems.module.css'
import xIcon from '../../../assets/x-icon.svg';

const ProductCard = ({ product, outfit, handleClick, buttonType, handleRemove }) => {

  // Event Components
  function RemoveButton() {
    return (
        <button className={styles.productButton} onClick={() => {handleRemove(product)}}>
          <img src={xIcon} />
        </button>

    )
  }

  //Conditional Rendering
  if (buttonType === 'remove') {
    var button = <RemoveButton/>
  }

  return (
    <div className={styles.productCard}>
      {button}
      <div className={styles.img}>
        <img src={product.thumbnail} onClick={() => handleClick(product)} className={styles.img}/>
      </div>
      <ProductInfo product={product}/>
    </div>
  )
};

export default ProductCard;