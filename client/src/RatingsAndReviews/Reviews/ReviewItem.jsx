import React from 'react';
import StarRating from '../../SharedComponents/StarRating.jsx';
import moment from 'moment';

//Styling
import styles from './ReviewItem.module.css'

let ReviewItem = ({review}) => {

  let rating = review.rating;
  let boldedSummary = review.summary.slice(0, 60);
  //TODO: Bugg with rest of summary being on the same row as the boldedSummary; Try to get the rest of the summary under the boldedSummary
  let restOfSummary = review.summary.length < 60 ? null : `...${review.summary.slice(60)}`
  let body = review.body.slice(0, 250);

  return (
    <div className={styles.reviewContainer}>
      <span className={styles.starRating}><StarRating starRating={rating}/></span>
      <span className={styles.datePosted}>{moment(review.date).format("ll")}</span>
      <p className={styles.boldedSummary}>{boldedSummary}</p>
      <p>{restOfSummary}</p>
      <p>{body}</p>
      <span className={styles.recommendation}>I recommend this product</span>
    </div>
  )
}

export default ReviewItem;