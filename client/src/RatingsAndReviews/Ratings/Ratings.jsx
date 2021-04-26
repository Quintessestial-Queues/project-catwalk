import React, { useState, useEffect, useContext } from 'react';
import StarRating from '../../SharedComponents/StarRating.jsx';
import StarFilter from './StarFilter.jsx';
import Characteristics from './Characteristics.jsx';
import { RatingsAndReviewsContext } from '../../state/RatingsAndReviewsContext.js';

import styles from './Ratings.module.css';

let Ratings = (props) => {

  const { reviews, handleOnClickStars } = useContext(RatingsAndReviewsContext);

  const [averageRating, setRating] = useState(() => {
    let sumOfRatings = reviews.reduce((accumulator, review, i) => {
      return accumulator + review.rating;
    }, 0);
    let averageOfRatings = sumOfRatings / reviews.length;
    return averageOfRatings;
  });

  useEffect(() => {
    let sumOfRatings = reviews.reduce((accumulator, review, i) => {
      return accumulator + review.rating;
    }, 0);
    let averageOfRatings = sumOfRatings / reviews.length;

    setRating(averageOfRatings);
  }, [reviews])


  return (
    <div className={styles.ratingsContainer}>

      <h3>{`Ratings & Reviews`}</h3>

      <div className={styles.starRatingItem}>
        <p className={styles.numberRating}>{averageRating.toFixed(1)}</p>
        <span className={styles.starRating}><StarRating  starRating={averageRating || 0 }/></span>
      </div>

      <div >
        <StarFilter/>
      </div>

      <div className={styles.characteristicsItem}>
        <Characteristics />
      </div>

    </div>
  )
}

export default Ratings;