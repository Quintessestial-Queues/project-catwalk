
import React from 'react';
import ProductProvider from './ProductContext';
import RatingsAndReviewsProvider from './RatingsAndReviewsContext';
import APIProvider from './APIContext';


export const RootProvider = ({ children }) => {
  return (
    <ProductProvider>
      <RatingsAndReviewsProvider>
        <APIProvider>
          {children}
        </APIProvider>
      </RatingsAndReviewsProvider>
    </ProductProvider>
  );
};

export default RootProvider;