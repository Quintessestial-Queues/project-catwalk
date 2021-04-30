import React, { useState, useEffect, useContext } from 'react';
import RatingsBar from './RatingsBar.jsx';
import styles from './StarFilter.module.css';
import { RatingsAndReviewsContext } from '../../state/RatingsAndReviewsContext'

const StarFilter = (props) => {
  const { reviews, filteredReviews, setFilteredReviews, starFilters, setStarFilters } = useContext(RatingsAndReviewsContext);

  const [recommendedPercentage, setRecommendedPercentage] = useState(0);

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
    let totalRecommended = reviews.reduce((accum, review, i) => {
      if (review.recommend) {
        accum += 1;
      }
      return accum;
    }, 0)
    let recommendedPercentageValue = Math.round((totalRecommended/reviews.length) * 100)
    setRecommendedPercentage(recommendedPercentageValue)
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
      <div className={styles.starFilterItem} ><span value={5} onClick={handleOnClickStars} className={styles.starLabel}>5 Stars</span> <RatingsBar ratingFraction={fiveStarFraction} filterValue={5} handleOnClickStars={handleOnClickStars}/></div>

      <div className={styles.starFilterItem}><span value={4} onClick={handleOnClickStars} className={styles.starLabel}>4 Stars</span> <RatingsBar ratingFraction={fourStarFraction} filterValue={4} handleOnClickStars={handleOnClickStars}/></div>

      <div className={styles.starFilterItem}><span value={3} onClick={handleOnClickStars} className={styles.starLabel}>3 Stars</span> <RatingsBar ratingFraction={threeStarFraction} filterValue={3} handleOnClickStars={handleOnClickStars}/></div>

      <div className={styles.starFilterItem}><span value={2} onClick={handleOnClickStars} className={styles.starLabel}>2 Stars</span> <RatingsBar ratingFraction={twoStarFraction} filterValue={2} handleOnClickStars={handleOnClickStars}/></div>

      <div className={styles.starFilterItem}><span value={1} onClick={handleOnClickStars} className={styles.starLabel}>1 Stars</span> <RatingsBar ratingFraction={oneStarFraction} filterValue={1} handleOnClickStars={handleOnClickStars}/></div>

      <div className={styles.removeAllFilters} onClick={() => {
        setStarFilters([])
        setFilteredReviews(reviews);
      }}>Remove All Filters</div>

      <div className={styles.recommendedPercentage}><b>{recommendedPercentage}% </b> Recommend this Product</div>
    </div>
  )
}

export default StarFilter;