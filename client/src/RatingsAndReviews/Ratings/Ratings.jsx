import React, { useState, useEffect, useContext } from 'react';
import StarRating from '../../SharedComponents/StarRating.jsx';
import StarFilter from './StarFilter.jsx';
import Characteristics from './Characteristics.jsx';
import { sort } from 'fast-sort';
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
    console.log('Ratings has rendered');
  }, [])

  useEffect(() => {
    let sumOfRatings = reviews.reduce((accumulator, review, i) => {
      return accumulator + review.rating;
    }, 0);
    let averageOfRatings = sumOfRatings / reviews.length;

    setRating(averageOfRatings);
  }, [reviews])
  //What to do next:
    //Get the star filter to actually filter the review results
    //these filters SHOULD be additive (might have to use contexts for this)


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

      <div>
        <Characteristics />
      </div>

    </div>
  )
}

export default Ratings;