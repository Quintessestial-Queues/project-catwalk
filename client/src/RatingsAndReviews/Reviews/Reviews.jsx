import React from 'react';
import ReviewItem from './ReviewItem.jsx';
import CreateReview from './CreateReview.jsx';
//Styling
import styles from './Reviews.module.css';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews.slice(0, 5) || [],
      loading : false,
      hasMore : false,
      clickedMoreReviews: false,
      reviewsView: 2,
      showCreateReviewModal: false
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.handleClickMoreReviews = this.handleClickMoreReviews.bind(this);
  }

  //const [showReviewFormModal, toggleReviewFormModal] = useState(false);

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
    let reviews = this.props.reviews;

    if (reviews === 0) {
      return (<div>Currently, there are no reviews for this product.</div>)
    }

    let reviewsList = reviews.map((review, index) => {
      return <ReviewItem key={index} review={review}/>
    })

    let reviewsListRender = (
      <div className={styles.reviewsContainer} onScroll={this.handleScroll}>
        <div className='reviewSorter'>
          <p>
            {`${reviews.length} reviews, sorted by `} <select>
              <option>Relevance</option>
              <option>Helpful</option>
              <option>Newest</option>
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