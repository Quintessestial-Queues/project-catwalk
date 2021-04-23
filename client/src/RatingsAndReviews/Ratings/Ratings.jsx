import React, { useState, useEffect } from 'react';
import StarRating from '../../SharedComponents/StarRating.jsx';
import StarFilter from './StarFilter.jsx';
import { sort } from 'fast-sort';

import styles from './Ratings.module.css';

let Ratings = ({reviews}) => {

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

  //What to do next:
    //Get the star filter to actually filter the review results
    //these filters SHOULD be additive (might have to use contexts for this)


  return (
    <div className={styles.ratingsContainer}>

      <h3>{`Ratings & Reviews`}</h3>

      <div className={styles.starRatingItem}>
        <p className={styles.numberRating}>{averageRating.toFixed(1)}</p>
        <span className={styles.starRating}><StarRating  starRating={averageRating}/></span>
      </div>

      <div >
        <StarFilter reviews={reviews}/>
      </div>

      <div>
        <span>Sizing</span>
      </div>

    </div>
  )
}

export default Ratings;