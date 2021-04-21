
import React from 'react';
import chai from 'chai'

import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import ProductOverview from '../../ProductOverview/index.jsx';
import RelatedItems from '../../RelatedItems/index.jsx';
import StarRating from '../../SharedComponents/StarRating.jsx';
import { dummyProduct, dummyProductStyles, dummyReviews } from '../../dummyData';

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
})



describe('it loads correct state', () =>{
  it('loads a product', () => {
    // Todo: get this to work with toHaveBeenCalled()
    expect(props.setProduct);
  });

  it('sets product styles to state', () => {
      // Todo: get this to work with toHaveBeenCalled()
    expect(props.setProductStyles);
  })
});



describe('<StarRating />', () => {
  let starRating = 5;

  it('renders a div', () => {
    const wrapper = shallow(<StarRating starRating={starRating} />);
    expect(wrapper.exists('div')).to.equal(true);
  })

  describe('it renders the correct amount of stars based on props', () => {
    const wrapper = mount(<StarRating starRating={starRating} />);

    it('starRating props should be 5', () => {
      expect(wrapper.prop('starRating')).to.equal(5);
    })


    it('should render 5 stars', () => {
      expect(wrapper.find('img')).to.have.lengthOf(5);
    })
  })
})





