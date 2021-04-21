
import React from 'react';
import ProductProvider from './ProductContext';
import APIProvider from './APIContext';


export const RootProvider = ({ children }) => {
  return (
    <APIProvider>
      <ProductProvider>
        {children}
      </ProductProvider>
    </APIProvider>
  );
};

export default RootProvider;