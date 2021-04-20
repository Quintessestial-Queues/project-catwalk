import React from 'react';
import ReviewItem from './ReviewItem.jsx';

//Styling
import styles from './Reviews.module.css';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews.slice(0, 5) || [],
      loading : false,
      hasMore : false,
      clickedMoreReviews: false
    }
    this.handleScroll = this.handleScroll.bind(this);
  }



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



  render() {
    let reviews = this.props.reviews;

    if (reviews === 0) {
      return (<div>Currently, there are no reviews for this product.</div>)
    }
    let reviewsList = reviews.map((review, index) => {
      return <ReviewItem key={index} review={review}/>
    })
    if (!this.clickedMoreReviews) {
      return <div className={styles.reviewsContainer}>{reviewsList.slice(0, 2)}</div>;
    }
    if (reviews.length > 1)
    return <div className={styles.reviewsContainer} onScroll={this.handleScroll}>{reviewsList}</div>;
  }
}

export default Reviews;