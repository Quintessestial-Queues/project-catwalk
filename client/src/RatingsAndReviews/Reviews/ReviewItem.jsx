import React from 'react';
import StarRating from '../../SharedComponents/StarRating.jsx';
import moment from 'moment';
import { FaCheck } from 'react-icons/fa';

//Styling
import styles from './ReviewItem.module.css'

let ReviewItem = ({review}) => {

  let rating = review.rating;
  let boldedSummary = review.summary.slice(0, 60);
  let restOfSummary = review.summary.length < 60 ? null : `...${review.summary.slice(60)}`
  let body = review.body.slice(0, 250);
  let checkIcon = <FaCheck />;
  let recommendationText = 'I recommend this product';


  return (
    <div className={styles.reviewContainer}>
      <span className={styles.starRating}><StarRating starRating={rating}/></span>
      <span className={styles.datePosted}>{`${moment(review.date).format("ll")}`}</span>
      <div className={styles.boldedSummary}>{boldedSummary} <p>{restOfSummary}</p></div>
      <p className={styles.body}>{body}</p>
      <span className={styles.recommendation}>{!review.recommend ? null : <span>
        <FaCheck/> {recommendationText} </span>}</span>
    </div>
  )
}

export default ReviewItem;
