import React from 'react';
import ReviewItem from './ReviewItem.jsx';
import CreateReview from './CreateReview.jsx';
import { sort } from 'fast-sort';
import { RatingsAndReviewsContext } from '../../state/RatingsAndReviewsContext.js';
import  { APIContext }  from '../../state/APIContext.js';

import styles from './Reviews.module.css';


class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews || [],
      filteredReviews: this.props.filteredReviews,
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

  // static contextType = RatingsAndReviewsContext;
  componentDidMount() {
    let filteredReviews = this.state.filteredReviews;
    let sortedReview = sort(filteredReviews).desc([
      r => r.date,
      r => r.helpfulness
    ])
    this.setState({
      filteredReviews: sortedReview
    })
  }

  // component did update
  // -> this.props change
  //   set state {reviews : this.props.reviews}
  componentDidUpdate(prevProps) {
    if (prevProps.filteredReviews !== this.props.filteredReviews) {
      console.log('Prevprops changed!');
      this.setState({
        filteredReviews: this.props.filteredReviews
      })
    }
  }

  //This might need to go on the context
  handleOnChangeSort (event) {
    let filteredReviews = this.state.filteredReviews;
    this.setState({
      sortDropdown: event.target.value
    }, () => {
      //if the sort is by newest
      if (this.state.sortDropdown === 'newest') {
        //send a get request with the sort on newest
        let sortedByNewestReviews = sort(filteredReviews).desc(r => r.date);
        this.setState({
          filteredReviews: sortedByNewestReviews
        })
      }
      //if the sort is by helpfulness
      if (this.state.sortDropdown === 'helpful') {
        let sortedByHelpfulnessReviews = sort(filteredReviews).desc(
          r => r.helpfulness
        )
        this.setState({
          filteredReviews: sortedByHelpfulnessReviews
        })
      }
      //if the sort is by relevance
      if (this.state.sortDropdown === 'relevance') {
        let sortedReview = sort(filteredReviews).desc([
          r => r.date,
          r => r.helpfulness
        ])
        this.setState({
          filteredReviews: sortedReview
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
    this.setState({
      clickedMoreReviews: !this.state.clickedMoreReviews,
      reviewsView: this.state.reviewsView + 2
    })
  }

  render() {
    // console.log(this.context.reviews);
    let filteredReviews = this.state.filteredReviews;

    if (filteredReviews === 0) {
      return (<div>Currently, there are no reviews for this product.</div>)
    }

    let reviewsList = filteredReviews.map((review, index) => {
      debugger;
      return <ReviewItem key={index} review={review}/>
    })

    let reviewsListRender = (
      <div className={styles.reviewsContainer} onScroll={this.handleScroll}>
        <div className='reviewSorter'>
          <p>
            {`${filteredReviews.length} reviews, sorted by `}
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
          {this.state.reviewsView < this.props.filteredReviews.length ? <button className={styles.moreReviewsButton} onClick={this.handleClickMoreReviews}>More Reviews</button> : null}
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