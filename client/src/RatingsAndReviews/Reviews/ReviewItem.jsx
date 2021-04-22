import React from 'react';
import StarRating from '../../SharedComponents/StarRating.jsx';
import moment from 'moment';
import { FaCheck } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';

//Styling
import styles from './ReviewItem.module.css'

let ReviewItem = ({review}) => {
  const [helpfulnessCount, setCount] = useState(review.helpfulness);
  const [clicked, setClicked] = useState(false);
  const isFirstRender = useRef(true);

  let boldedSummary = review.summary.slice(0, 60);
  let restOfSummary = review.summary.length < 60 ? null : `...${review.summary.slice(60)}`;
  let body = review.body.slice(0, 250);
  let checkIcon = <FaCheck />;


  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setClicked(true)
  }, [helpfulnessCount]);


  return (
    <div className={styles.reviewContainer}>

      <span className={styles.starRating}><StarRating starRating={review.rating}/></span>
      <span className={styles.datePosted}>{`${review.reviewer_name} reviewed on ${moment(review.date).format("ll")}`}</span>

      <div className={styles.boldedSummary}>{boldedSummary} <p>{restOfSummary}</p></div>
      <p className={styles.body}>{body}</p>

      <span className={styles.recommendation}>{!review.recommend ? null : <span>
        <FaCheck/> {'I recommend this product'} </span>}</span>

      <div className={review.response ? styles.responseActive : styles.responseNormal}>{review.response ? `Response from seller: ${review.response}` : null}</div>

      <span className={styles.helpful}>Was this review helpful? <a onClick={() => {!clicked ? setCount(helpfulnessCount + 1) : console.log('Already clicked!')}}>Yes ({helpfulnessCount})</a>
      <a onClick={ () => {!clicked ? setCount(helpfulnessCount - 1) : console.log('Already clicked!')}}> No</a></span>
    </div>
  )
}

export default ReviewItem;
