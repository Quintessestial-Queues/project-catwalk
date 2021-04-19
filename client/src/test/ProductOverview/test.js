
import React from 'react';
import chai from 'chai'

import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import ProductOverview from '../../ProductOverview/index.jsx';
import StarRating from '../../SharedComponents/StarRating.jsx';
import { dummyProduct, dummyProductStyles } from '../../dummyData';


describe('<ProductOverview />', () => {
  // gloval variables set up before each tests
  let props;
  let wrapper;
  let useEffect;

  // mocks the useEffect
  const mockUseEffect = () => {
    useEffect.mockImplementation(func => func());
  };

  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect");

    props = {
      setProduct: jest.fn().mockResolvedValue(dummyProduct),
      setProductStyles: jest.fn().mockResolvedValue(dummyProductStyles)
    };

    mockUseEffect();
    wrapper = shallow(<ProductOverview {...props} />)
  })


  it('renders a div', () => {
    expect(wrapper.exists('div')).to.equal(true);
  })

  it('renders the <StarRating /> component', () => {
    expect(wrapper.find(StarRating)).to.have.lengthOf(1)
  })

  describe('it loads correct state', () =>{
    it('loads a product', () => {
      expect(props.setProduct);
    });

    it('sets product styles to state', () => {
      expect(props.setProductStyles);
    })
  })

});

describe('<StarRating />', () => {
  let starRating = 5;

  it('renders a div', () => {
    const wrapper = shallow(<StarRating starRating={starRating} />);
    expect(wrapper.exists('div')).to.equal(true);
  })

  describe('it renders the correct amount of stars based on props', () => {

    it('renders 5 stars', () => {
      // MOUNT DOES NOT WORK WITH REACT 17. Not sure what to do about this.
      // the problem is shallow rendering only goes one level deep and I need to test 2 levels StarRating > div > star svgs
      const wrapper = render(<StarRating starRating={starRating} />);
      console.log(wrapper.find('div').children);
    })
  })
})