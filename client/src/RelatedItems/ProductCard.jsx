import React, { useState } from 'react';
import ProductInfo from './ProductInfo.jsx';
import styles from './relatedItems.module.css'
import xIcon from '../../../assets/x-icon.svg';

const ProductCard = ({ product, outfit, handleClick, buttonType, handleRemove, images }) => {

  // Event Components
  function RemoveButton() {
    return (
      <div>
        <button className={styles.productButton} onClick={() => {handleRemove(product)}}>
          <img src={xIcon} />
        </button>
      </div>
    )
  }

  // Conditional Rendering
  if (buttonType === 'remove') {
    var button = <RemoveButton/>
  }

  // Image Selection
  function findImage (images, id) {
    var image = images.filter(img => {
      return Number(img.product_id) === id
    })
    var url = image[0].results[0].photos[0].thumbnail_url
    return url
  }

  return (
    <div className={styles.productCard}>
      {button}
      <div className={styles.img}>
        <img src={findImage(images, product.id)} onClick={() => handleClick(product)} className={styles.img}/>
      </div>
      <ProductInfo product={product}/>
    </div>
  )
};

export default ProductCard;