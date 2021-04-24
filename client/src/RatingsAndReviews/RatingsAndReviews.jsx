import React from 'react';
import Ratings from './Ratings/Ratings.jsx'
import Reviews from './Reviews/Reviews.jsx';
import {dummyReviews} from '../dummyData.js';
import { RatingsAndReviewsContext } from '../state/RatingsAndReviewsContext.js';

import styles from './RatingsAndReviews.module.css';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
  }

  static contextType = RatingsAndReviewsContext;
  // this.context.reviews => reviews
  render() {
    return (
      <div className={styles.ratingsAndReviews}>
        <div><Ratings reviews={this.context.reviews} handleOnClickStars={this.context.handleOnClickStars}/></div>
        <div><Reviews reviews={this.context.reviews} filteredReviews={this.context.filteredReviews}/></div>
      </div>
    )
  }
}

export default RatingsAndReviews;

