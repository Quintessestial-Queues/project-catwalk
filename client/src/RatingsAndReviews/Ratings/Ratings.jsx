import React, { useState, useEffect } from 'react';
import StarRating from '../../SharedComponents/StarRating.jsx';
import StarFilter from './StarFilter.jsx';

import styles from './Ratings.module.css';

let Ratings = ({reviews}) => {
  //add star component
  //add a big number that represents the average rating
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