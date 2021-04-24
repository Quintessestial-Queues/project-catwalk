import React from 'react';
import ReviewItem from './ReviewItem.jsx';
import CreateReview from './CreateReview.jsx';
import { sort } from 'fast-sort';
import { RatingsAndReviewsContext } from '../../state/RatingsAndReviewsContext.js';

import styles from './Reviews.module.css';


class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews || [],
      loading : false,
      hasMore : false,
      clickedMoreReviews: false,
      reviewsView: 2,
      sortDropdown: 'relevance'
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.handleClickMoreReviews = this.handleClickMoreReviews.bind(this);
    this.handleOnChangeSort = this.handleOnChangeSort.bind(this);
  }


  componentDidMount() {
    let reviews = this.state.reviews;
    console.log(reviews);
    let sortedReview = sort(reviews).desc([
      r => r.date,
      r => r.helpfulness
    ])
    this.setState({
      reviews: sortedReview
    })
  }

  handleOnChangeSort (event) {
    let reviews = this.state.reviews;
    this.setState({
      sortDropdown: event.target.value
    }, () => {
      //if the sort is by newest
      if (this.state.sortDropdown === 'newest') {
        let sortedByNewestReviews = sort(reviews).desc(r => r.date);
        this.setState({
          reviews: sortedByNewestReviews
        })
      }
      //if the sort is by helpfulness
      if (this.state.sortDropdown === 'helpful') {
        let sortedByHelpfulnessReviews = sort(reviews).desc(
          r => r.helpfulness
        )
        this.setState({
          reviews: sortedByHelpfulnessReviews
        })
      }
      //if the sort is by relevance
      if (this.state.sortDropdown === 'relevance') {
        let sortedReview = sort(reviews).desc([
          r => r.date,
          r => r.helpfulness
        ])
        this.setState({
          reviews: sortedReview
        })
      }
    })
  }

  //TODO: Test this!
  handleScroll (event) {
    console.log('Review List got Scrolled!');
    let element = event.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      this.setState((prevState) => ({
        loading: true,
        reviews: [...prevState.reviews, ...this.props.reviews]
      }));
      this.setState({
        hasMore: this.props.reviews > 0
      })
      this.setState({
        loading: false
      })
    }
  }

  handleClickMoreReviews (event) {
    console.log('More Reviews Got Clicked!')
    this.setState({
      clickedMoreReviews: !this.state.clickedMoreReviews,
      reviewsView: this.state.reviewsView + 2
    })
  }

  render() {
    let reviews = this.state.reviews;

    if (reviews === 0) {
      return (<div>Currently, there are no reviews for this product.</div>)
    }

    let reviewsList = reviews.map((review, index) => {
      debugger;
      return <ReviewItem key={index} review={review}/>
    })

    let reviewsListRender = (
      <div className={styles.reviewsContainer} onScroll={this.handleScroll}>
        <div className='reviewSorter'>
          <p>
            {`${reviews.length} reviews, sorted by `}
            <select onChange={this.handleOnChangeSort}>
              <option value='relevance'>Relevance</option>
              <option value='helpful'>Helpful</option>
              <option value='newest'>Newest</option>
            </select>
          </p>
        </div>
        <div className={styles.reviewsList}>
          {reviewsList.slice(0, this.state.reviewsView)}
        </div>
        <div className='buttons'>
          {this.state.reviewsView < this.props.reviews.length ? <button className={styles.moreReviewsButton} onClick={this.handleClickMoreReviews}>More Reviews</button> : null}
          <CreateReview showCreateReviewModal={this.state.showCreateReviewModal} />
        </div>
      </div>
      );

    if (!this.state.clickedMoreReviews) {
      return reviewsListRender
    }
    return reviewsListRender
  }
}

export default Reviews;