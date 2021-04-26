import React, { useState, useContext, useEffect } from 'react';
import ReviewItem from './ReviewItem.jsx';
import CreateReview from './CreateReview.jsx';
import { RatingsAndReviewsContext } from '../../state/RatingsAndReviewsContext.js';
import { ProductContext } from '../../state/ProductContext.js';
import { APIContext } from '../../state/APIContext.js';

import styles from './Reviews.module.css';

const Reviews = (props) => {
  const { reviews, filteredReviews, setReviews } = useContext(RatingsAndReviewsContext);
  const { getReviews } = useContext(APIContext);
  const { productId } = useContext(ProductContext);

  const [loading, setLoading] = useState(false);
  const [clickedMoreReviews, setClickedMoreReviews] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [showCreateReviewModal, setShowCreateReviewModal] = useState(false);

  const [reviewsView, setReviewsView] = useState(2);
  const [sortDropdown, setSortDropdown] = useState('relevance');

  useEffect(() => {
    getReviews(productId)
      .then(({data}) => {
        setReviews(data.results)
      })
      .catch((err) => {
        console.log('Error getting reviews in Reviews Component', err);
      })
  }, [productId])

  const handleScroll = (event) => {
    // TODO:implement me
  }

  const handleOnChangeSort = (e) => {
    getReviews(productId, e.target.value)
      .then(({ data }) => {
        setReviews(data.results);
      });
  }

  const handleClickMoreReviews = (event) => {
    setReviewsView(reviewsView + 2);
  }

  return (
    <div className={styles.reviewsContainer} onScroll={handleScroll}>
      <div className={styles.reviewSorter}>
        <p>
          {`${filteredReviews.length} reviews, sorted by `}
          <select onChange={handleOnChangeSort}>
            <option value='relevance'>Relevance</option>
            <option value='helpful'>Helpful</option>
            <option value='newest'>Newest</option>
          </select>
        </p>
      </div>
      <div className={styles.reviewsList}>
        {filteredReviews.slice(0, reviewsView).map((review, i) =>
          <ReviewItem key={i} review={review}/>
        )}
      </div>
      <div className='buttons'>
        {reviewsView < filteredReviews.length ? <button className={styles.moreReviewsButton} onClick={handleClickMoreReviews}>More Reviews</button> : null}
        <CreateReview showCreateReviewModal={showCreateReviewModal} />
      </div>
    </div>
  );
}


export default Reviews;
