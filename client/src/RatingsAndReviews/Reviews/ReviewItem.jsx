import React, { useState, useEffect, useRef, useContext } from 'react';
import StarRating from '../../SharedComponents/StarRating.jsx';
import moment from 'moment';
import { FaCheck } from 'react-icons/fa';
import PhotoModal from './PhotoModal.jsx';
import { APIContext } from '../../state/APIContext';
import { RatingsAndReviewsContext } from '../../state/RatingsAndReviewsContext';
import { ProductContext } from '../../state/ProductContext';
import styles from './ReviewItem.module.css'

let ReviewItem = ({review}) => {

  const { updateHelpfulReview, reportReview, getReviews } = useContext(APIContext);
  const { reviews, setReviews } = useContext(RatingsAndReviewsContext);
  const { productId } = useContext(ProductContext)

  const [notHelpfulCount, setNotHelpfulCount] = useState(0);
  const [helpfulnessCount, setCount] = useState(review.helpfulness);
  const [clicked, setClicked] = useState(false);
  const [showMore, toggleShowMore] = useState(false);

  let boldedSummary = review.summary.slice(0, 60);
  let restOfSummary = review.summary.length < 60 ? null : `...${review.summary.slice(60)}`;
  let body = !showMore ? review.body.slice(0, 250) : review.body;
  let showMoreButton = review.body.length > 250 && !showMore ? <button className={styles.showMoreButton}onClick={() => {
    toggleShowMore(!showMore);
  }}>Show More</button> : null;

  let reviewId = review.review_id;

  useEffect(() => {
    setCount(helpfulnessCount);
  }, [helpfulnessCount]);

  const handleOnClickHelpful = (event) => {
    if (!clicked) {
      console.log(event.target.getAttribute('value'))
      if (event.target.getAttribute('value') === 'No') {
        setNotHelpfulCount(notHelpfulCount + 1);
        setClicked(true);
      } else {
        updateHelpfulReview(reviewId)
        .then(() => {
          console.log('Successfully incremented helpfulness');
          getReviews(productId)
            .then(({data}) => {
              setReviews(data.results);
              setCount(review.helpfulness);
              setClicked(true);
            })
        })
        .catch((err) => {
          console.log('Error incrementing helpfulness', err);
        })
      }
    } else {
      console.log('Already clicked helpful');
    }
  }

  const handleOnClickReport = () => {
    reportReview(reviewId)
      .then(() => {
        console.log('Successfully reported review with ID: ' + reviewId);
        getReviews(productId)
          .then(({data}) => {
            setReviews(data.results);
          })
      })
      .catch((err) => {
        console.log('Error reporting review', err);
      })
  }

  return (
    <div className={styles.reviewContainer}>

      <span className={styles.starRating}><StarRating starRating={review.rating || 0}/></span>
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

      <span className={styles.helpful}>Was this review helpful? <a onClick={ handleOnClickHelpful} className={styles.hover}><u>Yes</u> ({review.helpfulness})</a>
      <a value='No' onClick={handleOnClickHelpful} className={styles.hover}> <u value='No'>No</u> ({notHelpfulCount})</a></span>

      <span onClick={handleOnClickReport} className={styles.hover}><u>Report</u></span>
    </div>
  )
}

export default ReviewItem;
