import React, { useState, useEffect } from 'react';
import EmptyStar from "../../../assets/empty-star.svg";
import FilledStar from "../../../assets/filled-star.svg";
import ThreeQuarterStar from "../../../assets/three-quarter-star.svg";
import QuarterStar from "../../../assets/quarter-star.svg";
import HalfStar from "../../../assets/half-star.svg";
import styles from './starRating.module.css';

const StarRating = ({
  starRating
}) => {

  const [starState, setStarState] = useState([]);

  useEffect(() => {
    // Update star rating upon first intitial render
    setRating(starRating)
  }, [starRating]);



  const setRating = () => {
    let wholeStars = 5;

    var rating = starRating;

    var partialStar;

    // if the rating is not a whole number
    if (rating % 1 != 0) {
      // subtract the number of whole stars - 1 partial star
      wholeStars = 4;

      // split the rating at the decimal point
      const splitRating = starRating.toString().split('.');

      // update rating to the whole number
      rating = parseInt(splitRating[0]);

      const decimal = parseInt(splitRating[1]);

      // get partial star based on decimal
      partialStar = getPartialStar(decimal);

    }

    const emptyStars = wholeStars - rating;

    // make an array of length of empty stars
    const emptyArray = new Array(emptyStars);
    emptyArray.fill("empty"); // fill the array with empty values

    // make new array with filled stars
    const filledArray = [];
    for (let i = 0; i < rating; i++) {
      filledArray.push("filled");
    }

    // if there is partial filled star add it to the filledArray
    partialStar && filledArray.push(partialStar);

    // set state with all filled, partial, and empty stars
    setStarState(filledArray.concat(emptyArray));
  }

  const getPartialStar = (decimal) => {
    var partialStar;

    if (decimal <= 3) {
      partialStar = 'quarter'
    } else if (decimal <= 6) {
      partialStar = 'half'
    } else {
      partialStar = 'threeQuarters'
    }

    return partialStar;
  }

  return (
    <div className={styles.starRatingWrapper}>
      {starState.map((star, index) => {
        switch (star) {
          case 'empty':
            return <img
              className={styles.star}
              src={EmptyStar}
              alt="empty star"
              key={index}
            />
            break;
          case 'filled':
            return <img
              className={styles.star}
              src={FilledStar}
              alt="empty star"
              key={index}
            />
          case 'half':
            return <img
              className={styles.star}
              src={HalfStar}
              alt="half star"
              key={index}
            />
            break;
          case 'quarter':
            return <img
              className={styles.star}
              src={QuarterStar}
              alt="half star"
              key={index}
            />
            break;
          case 'threeQuarters':
            return <img
              className={styles.star}
              src={ThreeQuarterStar}
              alt="half star"
              key={index}
            />
            break;
        }

      })}

    </div>
  );
};


export default StarRating;