import React from 'react';
import {expect} from 'chai';
import { shallow, mount, render } from 'enzyme';

import StyleSelector from '../../../ProductOverview/StyleSelector.jsx';

describe('<StyleSelector />', () => {
  const wrapper = mount(<StyleSelector />);

  it('renders', () => {
    expect(wrapper.exists()).to.equal(true);
  })

  it('renders a div', () => {
    expect(wrapper.exists('div')).to.equal(true);
  })

  it ('renders the all the styles', () => {
    expect(wrapper.find('#style-wrap')).to.have.lengthOf(1);
  })



  //TODOS: Refactor using a mock callback function to test click event instead
  // it ('renders four reviews when button the "More Reviews" button is clicked', () => {
  //   const wrapper = shallow(<Reviews reviews={dummyReviews.results}/>);
  //   wrapper.setState({
  //     clickedMoreReviews: true,
  //     reviewsView: 4
  //   });
  //   expect(wrapper.find(ReviewItem)).toHaveLength(4);
  // })
});


