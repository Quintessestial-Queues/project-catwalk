import React, { useContext, useEffect } from 'react';
import Ratings from './Ratings/Ratings.jsx'
import Reviews from './Reviews/Reviews.jsx';
import { dummyReviews } from '../dummyData.js';

import { APIContext } from '../state/APIContext';
import { RatingsAndReviewsContext } from '../state/RatingsAndReviewsContext.js';
import { ProductContext } from '../state/ProductContext.js';

import styles from './RatingsAndReviews.module.css';

const RatingsAndReviews = () => {

  const testContext = useContext(RatingsAndReviewsContext);
  const { getReviews } = useContext(APIContext);
  const { productId } = useContext(ProductContext);

  useEffect(() => {
    getReviews(productId)
      .then(({data}) => {
        console.log(data);
        // debugger;
        testContext.setReviews(data.results);
      })
      .catch((err) => {
        console.log('Error getting reviews', err);
      })
  }, [])

    return (
    <div className={styles.ratingsAndReviews}>
      <div><Ratings /></div>
      <div><Reviews /></div>
      </div>
    )

}

export default RatingsAndReviews;

