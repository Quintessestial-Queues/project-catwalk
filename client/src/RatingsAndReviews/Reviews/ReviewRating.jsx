import React, { useState } from "react";
import { FaStar } from 'react-icons/fa';
import styles from './ReviewRating.module.css';


const ReviewRating = ({rating, setRating}) => {
  const [hover, setHover] = useState(null);
  const [grade, setGrade] = useState(null);
  const [clickedGrade, setClickedGrade] = useState(null);
  const [clickedRating, setClickedRating] = useState(false);
  let grades = ['Poor', 'Fair', 'Average', 'Good', 'Great'];

  return <div>
    {[...Array(5)].map((star, i) => {
      const ratingValue = i + 1;

      return <label key={i}>
        <input type='radio' className={styles.rating} name='rating' value={ratingValue} key={i} onClick={() => {
          if (!clickedRating) {
            setRating(ratingValue);
            setClickedGrade(grades[ratingValue - 1]);
            setClickedRating(true);
          }
        }}/>
        <FaStar className={styles.star} color={ratingValue <= hover || rating ? '#ffc107' : 'e4e5e9'} size={30} onMouseEnter={() => {
          if (clickedRating === false) {
            setHover(ratingValue)
            setGrade(grades[i])
          }
        }} onMouseLeave={() => {
          if (!clickedRating) {
            setGrade(null)
          } else if (clickedRating) {
            setGrade(grades[i])
          }
          setHover(null);
        }}/>
        </label>
    })}
    <span>{clickedRating ? clickedGrade: grade}</span>
    </div>
}

export default ReviewRating;