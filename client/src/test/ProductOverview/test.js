
import React from 'react';
import chai from 'chai'

import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import ProductOverview from '../../ProductOverview/index.jsx';
import StarRating from '../../SharedComponents/StarRating.jsx';

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