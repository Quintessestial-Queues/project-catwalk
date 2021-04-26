import React, { useState, useEffect, useContext } from 'react';
import RatingsBar from './RatingsBar.jsx';
import styles from './StarFilter.module.css';
import { RatingsAndReviewsContext } from '../../state/RatingsAndReviewsContext'

const StarFilter = (props) => {
  const { reviews, filteredReviews, setFilteredReviews, starFilters, setStarFilters } = useContext(RatingsAndReviewsContext);

  const getFraction = (targetNumber) => {
    let filtered = reviews.filter((review, i) => {
      return review.rating === targetNumber;
    })
    let fraction = filtered.length / reviews.length;
    let fractionPercentage = (fraction * 100).toFixed(2);
    return fractionPercentage;
  }

  useEffect(() => {
    setFiveStarFraction(getFraction(5));
    setFourStarFraction(getFraction(4));
    setThreeStarFraction(getFraction(3));
    setTwoStarFraction(getFraction(2));
    setOneStarFraction(getFraction(1));

    let starFiltered = reviews.filter((review, i) => {
      return starFilters.length ? starFilters.includes(review.rating) : true;
    });
    setFilteredReviews(starFiltered);

  }, [reviews])

  const [fiveStarFraction, setFiveStarFraction] = useState(() => {
    return getFraction(5);
  });
  const [fourStarFraction, setFourStarFraction] = useState(() => {
    return getFraction(4);
  });
  const [threeStarFraction, setThreeStarFraction] = useState(() => {
    return getFraction(3);
  });
  const [twoStarFraction, setTwoStarFraction] = useState(() => {
    return getFraction(2);
  });
  const [oneStarFraction, setOneStarFraction] = useState(() => {
    return getFraction(1);
  });

  const handleOnClickStars = (e) => {
    let rating = Number(e.target.getAttribute('value'));

    let starCopy = starFilters.slice();

    if (starCopy.includes(rating)) {
      starCopy = starCopy.filter(star => star !== rating);
    } else {
      starCopy.push(rating);
    }


    let starFiltered = reviews.filter((review, i) => {
      return starCopy.length ? starCopy.includes(review.rating) : true;
    });

    setStarFilters(starCopy);
    setFilteredReviews(starFiltered);
  }

  return (
    <div className={styles.starFilterContainer}>
      <div className={styles.starFilterItem}><span value={5} onClick={handleOnClickStars} className={styles.starLabel}>5 Stars</span> <RatingsBar ratingFraction={fiveStarFraction} /></div>

      <div className={styles.starFilterItem}><span value={4} onClick={handleOnClickStars} className={styles.starLabel}>4 Stars</span> <RatingsBar ratingFraction={fourStarFraction} /></div>

      <div className={styles.starFilterItem}><span value={3} onClick={handleOnClickStars} className={styles.starLabel}>3 Stars</span> <RatingsBar ratingFraction={threeStarFraction} /></div>

      <div className={styles.starFilterItem}><span value={2} onClick={handleOnClickStars} className={styles.starLabel}>2 Stars</span> <RatingsBar ratingFraction={twoStarFraction} /></div>

      <div className={styles.starFilterItem}><span value={1} onClick={handleOnClickStars} className={styles.starLabel}>1 Stars</span> <RatingsBar ratingFraction={oneStarFraction} /></div>

    </div>
  )
}

export default StarFilter;