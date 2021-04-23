import React, { useState, useEffect } from 'react';
import StarRating from '../../SharedComponents/StarRating.jsx';

import styles from './Ratings.module.css';

let Ratings = ({reviews}) => {
  //add star component
  //add a big number that represents the average rating
  const [averageRating, setRating] = useState(0);

  useEffect(() => {
    let sumOfRatings = reviews.reduce((accumulator, review, i) => {
      return accumulator + review.rating;
    }, 0);
    let averageOfRatings = sumOfRatings / reviews.length;
    setRating(averageOfRatings);
  }, [averageRating])


  return (
    <div className={styles.ratingsContainer}>
      Ratings
      <p>{averageRating}</p>
        <StarRating starRating={averageRating}/>
      </div>
  )
}

export default Ratings;