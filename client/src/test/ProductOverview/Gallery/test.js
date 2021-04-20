
import React from 'react';
import chai from 'chai'

import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Gallery from '../../../ProductOverview/Gallery.jsx';

describe('<Gallery />', () => {
  const wrapper = shallow(<Gallery />);

  it('renders', () => {
    expect(wrapper.exists());
  })

  it('renders a div', () => {
    expect(wrapper.exists('div')).to.equal(true);
  })

});

