import React, { useState, useContext } from 'react';
import { ProductContext } from '../state/ProductContext.js';

import ProductCard from './ProductCard.jsx';
import styles from './relatedItems.module.css';
import PlusIcon from '../../../assets/plus-icon.svg';
import { dummyProductStyles } from '../dummyData.js';

const YourOutfit = ({ outfits, handleAddOutfit }) => {
  const {
    product, setProduct, productStyles, setProductStyles, currentStyle
  } = useContext(ProductContext);

  return (
    <div>
      <h3 id={styles.relatedItemsTitle}>Your Outfit</h3>
      <div id={styles.relatedProductsContainer}>
        <div id={styles.addOutfitCard}>
          <img onClick={() => {handleAddOutfit(product)}} src={PlusIcon}/>
          <h5>Add to Outfit</h5>
        </div>
        {outfits.map((outfit, index) => {
          return <ProductCard product={outfit} image={dummyProductStyles.results[0].photos[0].thumbnail_url} key={index} />
        })}
      </div>
    </div>
  )
}

export default YourOutfit