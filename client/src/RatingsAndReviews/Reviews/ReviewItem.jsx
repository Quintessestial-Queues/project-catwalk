import React from 'react';

//Styling
import styles from './ReviewItem.module.css'

let ReviewItem = (props) => {
  //should have:
    //star rating
    //summary (max char 60)
    //body
  return (
    <div className={styles.reviewContainer}>
      Review
    </div>
  )
}

export default ReviewItem;