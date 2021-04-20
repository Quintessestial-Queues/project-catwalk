import React, { useState, useEffect } from 'react';
import styles from './product.module.css';
import { dummyProduct, dummyProductStyles } from '../dummyData.js'

//components
import StarRating from '../SharedComponents/StarRating.jsx';
import Gallery from './Gallery.jsx';

function ProductOverview() {
  const [product, setProduct] = useState({});
  const [productStyles, setProductStyles] = useState({});
  const [defaultView, setDefaultView] = useState(true);

  useEffect(() => {
    setProduct(dummyProduct);
    setProductStyles(dummyProductStyles);
  }, [])

  return (
    <div className={styles.grid}>

      <div className={`${styles.item} ${styles.announcement}`}>
       <p><i>SITE-WIDE ANNOUNCEMENT</i> -- SALE / DISCOUNT <b>OFFER</b> -- <a href='#'>NEW PRODUCT HIGHLIGHT</a></p>
      </div>

      <Gallery
        productStyles={productStyles}
        defaultView={defaultView}
        setDefaultView={setDefaultView} />

      <div className={defaultView === true ? `${styles.item} ${styles.productInfo}` : `${styles.hide}`}>
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
          {product && product.features && product.features.map((feature, i) => {
            return <li key={i}>{feature.feature} : {feature.value}</li>
          })}
        </ul>
      </div>
    </div>
  )
};

export default ProductOverview;