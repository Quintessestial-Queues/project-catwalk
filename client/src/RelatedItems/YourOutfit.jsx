import React from 'react';
import ProductCard from './ProductCard.jsx'
import styles from './relatedItems.module.css'
import { dummyProductStyles } from '../dummyData.js'

const YourOutfit = ({ outfits }) => {
  return (
    <div>
      <h3 id={styles.relatedItemsTitle}>Your Outfit</h3>
      <div id={styles.relatedProductsContainer}>
        {outfits.map((outfit, index) => {
          return <ProductCard product={outfit} image={dummyProductStyles.results[0].photos[0].thumbnail_url} key={index} />
        })}
      </div>
    </div>
  )
}

export default YourOutfit