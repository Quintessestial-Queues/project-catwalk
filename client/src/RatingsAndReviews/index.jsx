import React from 'react';
import dummyReviews from '../dummyReviews.jsx';
import Review from './Review.jsx';
import SortFilter from './SortFilter.jsx';

import styles from './ReviewsList.module.css';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    //map over reviews from props
    let reviewItems = dummyReviews.map((review) => {
    return <Review reviewItem={review}/>
  })
  return (
    <div className='reviews-list'>
      <SortFilter />
      {reviewItems}
    </div>
  )
  }
}



export default ReviewsList;

