import React, { useState } from 'react';
import ProductCard from './ProductCard.jsx';
import styles from './relatedItems.module.css';
// import PlusSign from '../../../assets/plus-sign.png';
import { dummyProductStyles } from '../dummyData.js';

const YourOutfit = ({ outfits }) => {
  return (
    <div>
      <h3 id={styles.relatedItemsTitle}>Your Outfit</h3>
      <div id={styles.relatedProductsContainer}>
        <div id={styles.addOutfitCard}>
          {/* <img src={PlusSign}/> */}
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