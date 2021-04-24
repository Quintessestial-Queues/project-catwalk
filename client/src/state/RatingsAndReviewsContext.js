import React, { createContext, Component } from 'react'
import  { APIContext }  from '../state/APIContext.js';
import { dummyReviews } from '../dummyData.js';


//REFACTOR INTO A FUNCTIONAL COMPONENT
export const RatingsAndReviewsContext = createContext();

export class RatingsAndReviewsProvider extends Component {

  //Filters based on which RatingsBar was clicked in the StarFilter Component in Ratings
  handleOnClickStars = () => {
    let reviews = this.state.reviews;
    let rating = event.target.getAttribute('value');
    this.setState({
      starFilterValue: rating
    }, () => {
      let starFiltered = reviews.filter((review, i) => {
        return review.rating == this.state.starFilterValue
      })
      this.setState({
        filteredReviews: starFiltered
      })
    })
  }

  state = {
    reviews: dummyReviews.results,
    filteredReviews: dummyReviews.results || [],
    starFilterValue: null,
    handleOnClickStars: this.handleOnClickStars,
  };

  render() {
    return (
      <RatingsAndReviewsContext.Provider value={this.state} >
          {this.props.children}
        </RatingsAndReviewsContext.Provider>
    )
  }
}

export default RatingsAndReviewsProvider;