import React, { useState } from 'react';
import ProductInfo from './ProductInfo.jsx';
import styles from './relatedItems.module.css'
import xIcon from '../../../assets/x-icon.svg';

const ProductCard = ({ product, outfit, handleClick, buttonType, handleRemove, images, url }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  // Event Components
  function RemoveButton() {
    return (
      <div className={styles.productButton}>
        <button onClick={() => {handleRemove(product)}}>
          <img src={xIcon} className={styles.icon}/>
        </button>
      </div>
    )
  }
  function ModalButton() {
    return (
      <div className={styles.productButton}>
        <button onClick={() => setIsModalVisible(!isModalVisible)}>
          <img src={xIcon} className={styles.icon}/>
        </button>
        {isModalVisible && <ComparisonModal comparedProduct={product}/>}
      </div>
    )
  }

  // Conditional Rendering
  if (buttonType === 'remove') {
    var button = <RemoveButton/>
  }

  // Image Selection
  function findThumbnail (images, id, option) {
    var image = images.filter(img => {
      return Number(img.product_id) === id
    })
    if (option) {
      return image[0]
    } else if (image[0]) {
      var url = image[0].results[0].photos[0].thumbnail_url
      return url
    }
  }

  return (
    <div className={styles.productCard}>
      {button}
      <div className={styles.img}>
        <img src={url || findThumbnail(images, product.id)} onClick={() => handleClick(product, findThumbnail(images, product.id, 1))} className={styles.img}/>
      </div>
      <ProductInfo product={product}/>
    </div>
  )
};

export default ProductCard;