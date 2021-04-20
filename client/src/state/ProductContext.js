import React, { useState } from 'react'

// first create the context
export const ProductContext = React.createContext();

// then create a provider
const ProductProvider = ({ children }) => {
  // initialize state with some values, which you can share via value prop our provider component.
  const [product, setProduct] = useState({});
  const [productStyles, setProductStyles] = useState({});

  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
        productStyles,
        setProductStyles,
      }}
      >
        {children}
      </ProductContext.Provider>
  )
}

export default ProductProvider;