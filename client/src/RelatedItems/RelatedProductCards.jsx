import React from 'react';
import ProductCard from './ProductCard.jsx'
import styles from './relatedItems.module.css'

const RelatedProductCards = () => {
  return (
    <div id={styles.relatedProductsContainer}>
      <ProductCard />
    </div>
  )
};

export default RelatedProductCards;