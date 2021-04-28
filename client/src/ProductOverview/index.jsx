import React, { useState, useEffect, useContext } from 'react';
import styles from './product.module.css';
import { dummyProduct, dummyProductStyles } from '../dummyData.js'

// context
import { ProductContext } from '../state/ProductContext.js';
import { RatingsAndReviewsContext } from '../state/RatingsAndReviewsContext.js';

//components
import StarRating from '../SharedComponents/StarRating.jsx';
import Gallery from './Gallery.jsx';
import StyleSelector from './StyleSelector.jsx';

// utils
import { getAverageRating } from '../utils/getAverageRating.js';

function ProductOverview() {
  const {
    product, setProduct, productStyles, setProductStyles, currentStyle
  } = useContext(ProductContext);

  const { reviews } = useContext(RatingsAndReviewsContext);

  const [defaultView, setDefaultView] = useState(true);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const average = getAverageRating(reviews);
    setAverageRating(average);
  }, [reviews])

  return (
    <div className={styles.grid}>

      <div className={`${styles.item} ${styles.announcement}`}>
        <p><i>SITE-WIDE ANNOUNCEMENT</i> -- SALE / DISCOUNT <b>OFFER</b> -- <a href='#'>NEW PRODUCT HIGHLIGHT</a></p>
      </div>

      <Gallery
        defaultView={defaultView}
        setDefaultView={setDefaultView} />

      <div className={defaultView === true ? `${styles.item} ${styles.productInfo}` : `${styles.hide}`}>
        <StarRating
          starRating={averageRating}
        />
        <a
          onClick={() => {
            console.log('clicked')
            const titleElement = document.getElementById('ratings')
            titleElement.scrollIntoView({ behavior: 'smooth' })
          }}
          className={styles.reviewsLink}
          >See All Reviews</a>
        <p className={styles.category}> {product.category} </p>
        <h1 className={styles.productTitle}> {product.name} </h1>
        {
          currentStyle.sale_price
            ?
            (<p className={styles.salePrice}>
              ${currentStyle.sale_price} {' '}
              <span className={styles.strikeThrough}>{currentStyle.original_price} </span>
            </p>)
            :
            (<p className={styles.price}> ${currentStyle.original_price} </p>)
        }

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