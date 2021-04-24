import React, { createContext, Component } from 'react'
import  { APIContext }  from '../state/APIContext.js';
import { dummyReviews } from '../dummyData.js';



export const RatingsAndReviewsContext = createContext();

export class RatingsAndReviewsProvider extends Component {

  state = {
    reviews: dummyReviews.results,
    starFilterValue: null,
    handleOnClickStars: this.handleOnClickStars
  };

  handleOnClickStars (event) {
    let reviews = this.state.reviews;
    this.setState({
      starFilterValue: event.target.value
    }, () => {
      let starFiltered = reviews.filter((review, i) => {
        return review.rating === this.state.starFilterValue
      })
      this.setState({
        reviews: starFiltered
      })
    })
  }


  render() {
    return (
      <RatingsAndReviewsContext.Provider value={this.state} >
          {this.props.children}
        </RatingsAndReviewsContext.Provider>
    )
  }
}

export default RatingsAndReviewsProvider;