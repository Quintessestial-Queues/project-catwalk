import React from 'react';
import {expect} from 'chai';
import { shallow, mount, render } from 'enzyme';

import Gallery from '../../../ProductOverview/Gallery.jsx';

describe('<Gallery />', () => {
  const wrapper = mount(<Gallery />);
  const thumbnailGallery = wrapper.find('#thumbnail-gallery');

  it('renders', () => {
    expect(wrapper.exists());
  })

  it('renders a div', () => {
    expect(wrapper.exists('div')).to.equal(true);
  })

  it ('renders the thumbnail gallery', () => {
    expect(thumbnailGallery).to.have.lengthOf(1);
  })
});


