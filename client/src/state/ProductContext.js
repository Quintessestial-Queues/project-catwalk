import React, { createContext, Component } from 'react'
import  { APIContext }  from '../state/APIContext.js';

import { dummyProduct, dummyProductStyles } from '../dummyData';

// create the context
export const ProductContext = createContext({
  productId: 17071,
  product: { },
  productStyles: [ ],
  currentStyle: { },
  currentStyleIndex: 0,
  images: [ ],
  currentStyleSkus: { },
  handleStyleChange: () => {},
});


// create a provider
export class ProductProvider extends Component {

  handleStyleChange = (i) => {
    this.setState({
      currentStyleIndex : i,
      currentStyle: this.state.productStyles[i],
      images: this.state.productStyles[i].photos,
      currentStyleSkus: this.state.productStyles[i].skus,
    })
  };


  state = {
    productId: '17071',
    product: dummyProduct,
    productStyles: dummyProductStyles.results,
    currentStyle: dummyProductStyles.results[0],
    currentStyleIndex: 0,
    images: dummyProductStyles.results[0].photos,
    currentStyleSkus: dummyProductStyles.results[0].skus,
    handleStyleChange: this.handleStyleChange,
  };

  render() {
    return (
      <ProductContext.Provider value={this.state} >
          {this.props.children}
        </ProductContext.Provider>
    )
  }
}

export default ProductProvider;