
import React from 'react';
import ProductProvider from './ProductContext';
import APIProvider from './APIContext';


export const RootProvider = ({ children }) => {
  return (
    <ProductProvider>
      <APIProvider>
        {children}
      </APIProvider>
    </ProductProvider>
  );
};

export default RootProvider;