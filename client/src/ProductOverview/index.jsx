import React, { useState, useEffect, useContext } from 'react';
import styles from './product.module.css';
import { dummyProduct, dummyProductStyles } from '../dummyData.js'

// context
import  { ProductContext }  from '../state/ProductContext.js';

//components
import StarRating from '../SharedComponents/StarRating.jsx';
import Gallery from './Gallery.jsx';
import StyleSelector from './StyleSelector.jsx';

function ProductOverview() {
  const {
    product, setProduct, productStyles, setProductStyles
  } = useContext(ProductContext);

  const [defaultView, setDefaultView] = useState(true);


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

        <StyleSelector />
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