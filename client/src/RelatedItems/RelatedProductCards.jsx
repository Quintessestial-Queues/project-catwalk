import React from 'react';
import ProductCard from './ProductCard.jsx'
import styles from './relatedItems.module.css'
import { dummyProductStyles } from '../dummyData.js'

const RelatedProductCards = ({ products }) => {
  return (
    <div id={styles.relatedProductsContainer}>
      {products.map((product, index) => {
        return <ProductCard product={product} image={dummyProductStyles.results[0].photos[0].thumbnail_url} key={index} />
      })}
    </div>
  )
};

export default RelatedProductCards;