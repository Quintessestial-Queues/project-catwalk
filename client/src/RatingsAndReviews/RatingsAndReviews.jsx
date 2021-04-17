import React from 'react';
import Ratings from './Ratings/Ratings.jsx'
import Reviews from './Reviews/Reviews.jsx';

import styles from './RatingsAndReviews.module.css';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className={styles.ratingsAndReviews}>
        <div><Ratings /></div>
        <div><Reviews /></div>
      </div>
    )
  }
} 



export default RatingsAndReviews;

