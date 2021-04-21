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



  const [sizes, setSizes] = useState([]);
  const [quantity, setQuantity] = useState(15)
  const [selectedSku, setSelectedSku] = useState({});


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
      let currentStyle = res.data.results[0];
      let skus = currentStyle.skus && Object.values(currentStyle.skus);
      let sizes = skus.map(sku => sku.size);
      setSizes(sizes)
      console.log(skus)
    })

    .catch(err => {
      console.log('error fetching product styles')
    })
  }, [])

  const handleStyleChange = () => {
    console.log('change the state of currentStyle')
  }

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
        setDefaultImg,
        handleStyleChange,
        sizes,
        quantity
      }}
      >
        {children}
      </ProductContext.Provider>
  )
}

export default ProductProvider;