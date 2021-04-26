import React, { createContext, Component } from 'react'
import  { APIContext }  from '../state/APIContext.js';
import { dummyProduct, dummyProductStyles } from '../dummyData';

// create the context
export const RelatedProductsContext = createContext();


// create a provider
export class RelatedProductsProvider extends Component {
  setRelatedProductIds = (ids) => {
    this.setState({relatedProductIds: ids})
  }
  setRelatedProducts = (products) => {
    this.setState({relatedProducts: products})
  }
  setProductStyles = (styles) => {
    this.setState({relatedProductStyles: styles})
  }
  handleRelatedProducts = (id) => {
    var products = this.state.relatedProductIds.map(id => {

    })
  };

  state = {
    relatedProductIds: [],
    relatedProducts: [],
    relatedProductStyles: [],
    handleRelatedProducts: this.handleRelatedProducts,
    setRelatedProductIds: this.setRelatedProductIds,
    setRelatedProducts: this.setRelatedProducts,
    setProductStyles: this.setProductStyles
  };

  render() {
    return (
    <RelatedProductsContext.Provider value={this.state} >
      {this.props.children}
    </RelatedProductsContext.Provider>
    )
  }
};

export default RelatedProductsProvider;