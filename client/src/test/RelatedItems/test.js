import React from 'react';
import chai from 'chai'

import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import RelatedItems from '../../RelatedItems/index.jsx';
import ProductCard from '../../RelatedItems/ProductCard.jsx';
import ProductInfo from '../../RelatedItems/ProductInfo.jsx';
import StarRating from '../../SharedComponents/StarRating.jsx';
import { dummyProducts, dummyProductStyles } from '../../dummyData';

describe('Related Items', () => {
  it('should render Related Items', () => {
    const wrapper = shallow(<RelatedItems/>);
  });
  it('renders Product Cards', () => {
    const wrapper = shallow(<ProductCard product={dummyProducts[0]} />);
  });
  it('renders Product Info', () => {
    const wrapper = render(<ProductCard product ={dummyProducts[0]}/>)
    expect(wrapper.find(ProductInfo)).to.exist;
  })
});
