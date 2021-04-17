import React, { useState, useEffect } from 'react';
import StarRating from '../SharedComponents/StarRating.jsx';
import styles from './product.module.css';
import { dummyProduct, dummyProductStyles } from '../dummyData.js'

function ProductOverview() {
  const [product, setProduct] = useState({});
  const [productStyles, setProductStyles] = useState({});

  useEffect(() => {
    setProduct(dummyProduct);
    setProductStyles(dummyProductStyles);
  }, [])

  return (
    <div className={styles.grid}>

      <div className={`${styles.item} ${styles.announcement}`}>
       <p><i>SITE-WIDE ANNOUNCEMENT</i> -- SALE / DISCOUNT <b>OFFER</b> -- <a href='#'>NEW PRODUCT HIGHLIGHT</a></p>
      </div>

      <div className={styles.item}>image carousel</div>

      <div className={`${styles.item} ${styles.productInfo}`}>
        <StarRating
          starRating={1.6}
        />
        <p> {product.category} </p>
        <h1> {product.name} </h1>
        <p> {product.default_price} </p>
        <div>style selection</div>
      </div>

      <div className={`${styles.item} ${styles.description}`}>
          <h2>{product.slogan}</h2>
          <p>{product.description}</p>
      </div>
      <div className={`${styles.item} ${styles.features}`}>
        <ul className={styles.featureList}>
          {console.log(product.features)}
          {product && product.features && product.features.map((feature, i) => {
            return <li key={i}>{feature.feature} : {feature.value}</li>
          })}
        </ul>
      </div>
    </div>
  )
};

export default ProductOverview;