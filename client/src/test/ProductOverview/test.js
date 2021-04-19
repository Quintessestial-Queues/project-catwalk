
import React from 'react';
import chai from 'chai'

import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import ProductOverview from '../../ProductOverview/index.jsx';
import StarRating from '../../SharedComponents/StarRating.jsx';

import RatingsAndReviews from '../RatingsAndReviews/RatingsAndReviews.jsx';

describe('<ProductOverview />', () => {
  it ('renders a div', () => {
    const wrapper = shallow(<ProductOverview />);
    expect(wrapper.exists('div')).to.equal(true);
  })

  it ('renders the <StarRating /> component', () => {
    const wrapper = shallow(<ProductOverview />);
    expect(wrapper.find(StarRating)).to.have.lengthOf(1)
  })
})

describe('<RatingsAndReviews />', () => {
  it ('renders a div', () => {
    const wrapper = shallow(<RatingsAndReviews />);
    expect(wrapper.exists('div')).to.equal(true);
  })

  //should render divs for <Ratings /> and <Reviews />
  // it ('renders a div for both the Ratings and Reviews component')
  //<Reviews/ > should render two <ReviewItem /> divs


})