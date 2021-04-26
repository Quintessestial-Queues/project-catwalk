import React, { useState, useContext } from 'react';
import { ProductContext } from '../state/ProductContext.js';

import ProductCard from './ProductCard.jsx';
import styles from './relatedItems.module.css';
import PlusIcon from '../../../assets/plus-icon.svg';
import { dummyProductStyles } from '../dummyData.js';

const YourOutfit = ({ outfits, images, handleAddOutfit, handleRemove }) => {
  const {
    product, setProduct, productStyles, setProductStyles, currentStyle
  } = useContext(ProductContext);

  return (
    <div>
      <h3 id={styles.relatedItemsTitle}>Your Outfit</h3>
      <div id={styles.relatedProductsContainer}>
        <div id={styles.addOutfitCard} onClick={() => {handleAddOutfit(product)}}>
          <div className={styles.img}>
            <img src={PlusIcon} className={styles.img}/>
          </div>
          <h2 className={styles.img}>Add to Outfit</h2>
        </div>
        {outfits.map((outfit, index) => {
          return <ProductCard product={outfit} buttonType={'remove'} key={outfit.id} url={currentStyle.photos[0].thumbnail_url} handleRemove={handleRemove}/>
        })}
      </div>
    </div>
  )
}

export default YourOutfit