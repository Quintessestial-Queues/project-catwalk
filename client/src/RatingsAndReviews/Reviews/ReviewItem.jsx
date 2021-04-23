import React from 'react';
import StarRating from '../../SharedComponents/StarRating.jsx';
import moment from 'moment';
import { FaCheck } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import PhotoModal from './PhotoModal.jsx';

import styles from './ReviewItem.module.css'

let ReviewItem = ({review}) => {
  const [helpfulnessCount, setCount] = useState(review.helpfulness);
  const [clicked, setClicked] = useState(false);
  const [showMore, toggleShowMore] = useState(false);


  const isFirstRender = useRef(true);

  let boldedSummary = review.summary.slice(0, 60);
  let restOfSummary = review.summary.length < 60 ? null : `...${review.summary.slice(60)}`;
  let body = !showMore ? review.body.slice(0, 250) : review.body;
  let showMoreButton = review.body.length > 250 && !showMore ? <button onClick={() => {
    toggleShowMore(!showMore);
  }}>Show More</button> : null;

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setClicked(true)
  }, [helpfulnessCount]);

  //TODO: Had to remove helpfulnessCount to get the sort working
    //plan to fix: when Yes or No is clicked, send a put and a get request right after so that the page is rendered

  return (
    <div className={styles.reviewContainer}>

      <span className={styles.starRating}><StarRating starRating={review.rating}/></span>
      <span className={styles.datePosted}>{`${review.reviewer_name} reviewed on ${moment(review.date).format("ll")}`}</span>

      <div className={styles.boldedSummary}>{boldedSummary} <p>{restOfSummary}</p></div>
      <p className={styles.body}>{body}{showMoreButton}</p>

      <div className={styles.photos}>
        {review.photos.length > 0 ? review.photos.map((photo, i) => {
          return (
            <PhotoModal key={i} photo={photo.url}/>
          )
        }) : null}
      </div>

      <span className={styles.recommendation}>{!review.recommend ? null : <span>
        <FaCheck/> {'I recommend this product'} </span>}</span>

      <div className={review.response ? styles.responseActive : styles.responseNormal}>{review.response ? `Response from seller: ${review.response}` : null}</div>

      <span className={styles.helpful}>Was this review helpful? <a onClick={() => {!clicked ? setCount(review.helpfulness + 1) : console.log('Already clicked!')}}>Yes ({review.helpfulness})</a>
      <a onClick={ () => {!clicked ? setCount(review.helpfulness - 1) : console.log('Already clicked!')}}> No</a></span>
    </div>
  )
}

export default ReviewItem;
