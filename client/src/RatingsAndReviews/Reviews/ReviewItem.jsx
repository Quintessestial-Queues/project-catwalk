import React from 'react';
import StarRating from '../../SharedComponents/StarRating.jsx';
import moment from 'moment';

//Styling
import styles from './ReviewItem.module.css'

let ReviewItem = ({review}) => {

  let rating = review.rating;

  return (
    <div className={styles.reviewContainer}>
      <span className={styles.starRating}><StarRating starRating={rating}/></span>
      <span className={styles.datePosted}>{moment(review.date).format("ll")}</span>
    </div>
  )
}

export default ReviewItem;