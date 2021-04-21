import React, { useState, useEffect, useContext } from 'react'
import  { APIContext }  from '../state/APIContext.js';


// create the context
export const ProductContext = React.createContext();
// create a provider
const ProductProvider = ({ children }) => {
  // initialize state with some values, which you can share via value prop our provider component.

  const [productId, setProductId] = useState(17071);
  const [product, setProduct] = useState({});
  const [productStyles, setProductStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({});
  const [images, setImages] = useState([]);
  const [defaultImg, setDefaultImg] = useState('');

  const { getProductById, getProductStylesById } = useContext(APIContext)

  useEffect(() => {
    //calls the api and sets the product
    getProductById(productId)
    .then(res => {
      setProduct(res.data);
    })
    .catch(err => {
      console.log('error fetching product with id')
    })

    getProductStylesById(productId)
    .then(res => {
      setProductStyles(res.data.results);
      setCurrentStyle(res.data.results[0]);
      setImages(res.data.results[0].photos);
      setDefaultImg(res.data.results[0].photos[0].url)
    })
    .catch(err => {
      console.log('error fetching product styles')
    })
  }, [])


  return (
    <ProductContext.Provider
      value={{
        productId,
        setProductId,
        product,
        setProduct,
        productStyles,
        setProductStyles,
        currentStyle,
        setCurrentStyle,
        images,
        setImages,
        defaultImg,
        setDefaultImg
      }}
      >
        {children}
      </ProductContext.Provider>
  )
}

export default ProductProvider;