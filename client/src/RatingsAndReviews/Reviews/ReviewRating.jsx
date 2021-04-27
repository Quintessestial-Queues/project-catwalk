import React, { useState } from "react";
import { FaStar } from 'react-icons/fa';
import styles from './ReviewRating.module.css';


const ReviewRating = ({rating, setRating}) => {
  const [hover, setHover] = useState(null);
  const [grade, setGrade] = useState(null);
  let grades = ['Poor', 'Fair', 'Average', 'Good', 'Great'];

  return <div>
    {[...Array(5)].map((star, i) => {
      const ratingValue = i + 1;

      return <label>
        <input type='radio' className={styles.rating} name='rating' value={ratingValue} onClick={() => {
          setRating(ratingValue)
        }}/>
        <FaStar className={styles.star} color={ratingValue <= hover || rating ? '#ffc107' : 'e4e5e9'} size={30} onMouseEnter={() => {
          setHover(ratingValue)
          setGrade(grades[i])
        }} onMouseLeave={() => {
          setHover(null)
          setGrade(null)
        }}/>
        </label>
    })}
    <p>{grade}</p>
    </div>
}

export default ReviewRating;