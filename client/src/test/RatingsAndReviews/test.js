import React from 'react';
// import chai from 'chai'
import { dummyProduct, dummyProductStyles, dummyReviews } from '../../dummyData';
import RatingsAndReviews from '../../RatingsAndReviews/RatingsAndReviews.jsx';
import Reviews from '../../RatingsAndReviews/Reviews/Reviews.jsx';
import ReviewItem from '../../RatingsAndReviews/Reviews/ReviewItem.jsx';

// import { should } from 'chai';
import { shallow, mount, render } from 'enzyme';


describe('RatingsAndReviews', () => {

  it ('renders the RatingsAndReviews component', () => {
    const wrapper = shallow(<RatingsAndReviews />);
    expect(wrapper).toMatchSnapshot();
  })


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

    describe('ReviewItem', () => {
      //test
      it ('renders a div with class reviewContainer', () => {
        let review = {
          "review_id": 288940,
          "rating": 5,
          "summary": "Best Review Ever!",
          "recommend": true,
          "response": null,
          "body": "This Review is great, so is the person who made this module!",
          "date": "2021-03-12T00:00:00.000Z",
          "reviewer_name": "Tear-in",
          "helpfulness": 2,
          "photos": []
      };
        const wrapper = mount(<ReviewItem review={review}/>);
        wrapper.find()
      })
    })
  })

});