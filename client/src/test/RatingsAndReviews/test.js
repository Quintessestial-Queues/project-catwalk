import React from 'react';
import styles from '../../RatingsAndReviews/Reviews/ReviewItem.module.css';
import StarRating from '../../SharedComponents/StarRating.jsx';
import { dummyReviews } from '../../dummyData';
import RatingsAndReviews from '../../RatingsAndReviews/RatingsAndReviews.jsx';
import Reviews from '../../RatingsAndReviews/Reviews/Reviews.jsx';
import ReviewItem from '../../RatingsAndReviews/Reviews/ReviewItem.jsx';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe('RatingsAndReviews', () => {
  it ('renders the RatingsAndReviews component', () => {
    const wrapper = shallow(<RatingsAndReviews />);
    expect(wrapper).toMatchSnapshot();
  })
});

describe('Reviews', () => {
  it ('renders two reviews by default when there are two or more  reviews', () => {
    const wrapper = shallow(<Reviews reviews={dummyReviews.results}/>);
    expect(wrapper.find(ReviewItem)).toHaveLength(2);
  })
  //TODOS: Refactor using a mock callback function to test click event instead
  it ('renders four reviews when button the "More Reviews" button is clicked', () => {
    const wrapper = shallow(<Reviews reviews={dummyReviews.results}/>);
    wrapper.setState({
      clickedMoreReviews: true,
      reviewsView: 4
    });
    expect(wrapper.find(ReviewItem)).toHaveLength(4);
  })
})

describe('ReviewItem', () => {
  let review = dummyReviews.results[0];

  //Rendering
  describe ('rendering components', () => {
    it ('renders ReviewItem Component without crashing', () => {
      shallow(<ReviewItem /> );
    });
    it ('renders ReviewItem Component span with StarRating Component without crashing', () => {
      const reviewItemWrapper = shallow(<ReviewItem review={review}/>);
      const starRatingContainer = <span className={styles.starRating}><StarRating starRating={review.rating}/></span>
    expect(reviewItemWrapper.contains(starRatingContainer)).toEqual(true);
    })
  })


  //Passing props


  //Logic


  //Snapshots

})

