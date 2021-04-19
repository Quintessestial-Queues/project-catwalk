import React from 'react';
import ProductCard from './ProductCard.jsx'
import styles from './relatedItems.module.css'

const RelatedProductCards = ({ products }) => {
  return (
    <div id={styles.relatedProductsContainer}>
      {products.map((product, index) => {
        return <ProductCard product={product} key={index} />
      })}
    </div>
  )
};

export default RelatedProductCards;