import React, { useState, useEffect } from 'react';
import StarRating from '../SharedComponents/StarRating.jsx';
import styles from './product.module.css';
import { dummyProduct } from '../dummyData.js'

function ProductOverview() {
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(dummyProduct);
  }, [])

  return (
    <div className={styles.grid}>
      <div className={styles.item}>image carousel</div>
      <div className={styles.item}>
        <StarRating
          starRating={1.6} // star rating from api will be integer
        />
        <h1> product title </h1>
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