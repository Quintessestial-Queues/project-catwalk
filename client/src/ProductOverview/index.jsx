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
       <p><i>SITE-WIDE ANNOUNCEMENT</i> -- SALE / DISCOUNT <b>OFFER</b> -- <a>NEW PRODUCT HIGHLIGHT</a></p>
      </div>

      <div className={styles.item}>image carousel</div>

      <div className={`${styles.item} ${styles.productInfo}`}>
        <StarRating
          starRating={1.6} // star rating from api will be integer
        />
        <p> {product.category} </p>
        <h1> {product.name} </h1>
        <p> {product.default_price} </p>
        <div>style selection</div>
      </div>

      <div className={`${styles.item} ${styles.description}`}>
        <div>
          Product Description and information
      </div>
        <div>
          Product Description and information
        </div>
      </div>
    </div>
  )
};

export default ProductOverview;