
import React from 'react';
import ProductProvider from './ProductContext';
import RelatedProductsProvider from './RelatedProductsContext';
import { RatingsAndReviewsProvider } from './RatingsAndReviewsContext';
import APIProvider from './APIContext';


export const RootProvider = ({ children }) => {
  return (
    <ProductProvider>
      < RatingsAndReviewsProvider>
        <RelatedProductsProvider>
          <APIProvider>
            {children}
          </APIProvider>
        </RelatedProductsProvider>
      </RatingsAndReviewsProvider>
    </ProductProvider>
  );
};

export default RootProvider;