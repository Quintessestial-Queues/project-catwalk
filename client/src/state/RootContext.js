
import React from 'react';
import ProductProvider from './ProductContext';
import RelatedProductsProvider from './RelatedProductsContext';
import APIProvider from './APIContext';


export const RootProvider = ({ children }) => {
  return (
    <ProductProvider>
      <RelatedProductsProvider>
        <APIProvider>
          {children}
        </APIProvider>
      </RelatedProductsProvider>
    </ProductProvider>
  );
};

export default RootProvider;