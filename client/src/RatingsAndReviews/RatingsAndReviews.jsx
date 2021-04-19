import React from 'react';
import Ratings from './Ratings/Ratings.jsx'
import Reviews from './Reviews/Reviews.jsx';
import {dummyReviews} from '../dummyData.jsx';

import styles from './RatingsAndReviews.module.css';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moreReviews: false
    }

  }

  render() {
    debugger;
    return (
      <div className={styles.ratingsAndReviews}>
        <div><Ratings /></div>
        <div><Reviews reviews={dummyReviews.results} moreReviews={this.moreReviews}/></div>
      </div>
    )
  }
}



export default RatingsAndReviews;

