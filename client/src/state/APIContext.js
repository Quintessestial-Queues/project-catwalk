import React, { useContext } from 'react';
import axios from 'axios';
import { API_KEY, API_URL } from '../config.js';
import { RelatedProductsContext } from './RelatedProductsContext.js'
// first create the context
export const APIContext = React.createContext();

// then create a provider
const APIProvider = ({ children }) => {
  // this will be where our API calls live
  const {
    setRelatedProductIds, setRelatedProducts, setProductStyles
  } = useContext(RelatedProductsContext);

  const options = {
    headers: {'Authorization': API_KEY}
  };

  // get the current product info
  const getProductById = async (id) => {
    // return a single product obj
    try {
      const product = await axios.get(`${API_URL}/products/${id}`, options)
      return product.data
    } catch (err) {
      console.log(err)
    }
  };


  // get the current product info
  const getProductStylesById = async (id) => {
    // return a single styles obj
    try {
      const productStyle = await axios.get(`${API_URL}/products/${id}/styles`, options)
      return productStyle.data
    } catch (err) {
      console.log(err)
    }
  };

  //get related product id's
  const getRelatedProductIds = async (id) => {
    //returns array of id's
    try {
      const ids = await axios.get(`${API_URL}/products/${id}/related`, options);
      setRelatedProductIds([...new Set(ids.data)])
    } catch (err) {
      console.log(err);
    }
  };

  // get products
  const getProducts = async (idArray) => {
    // returns array of product obj's
    const promises = idArray.map(async (id) => {
      const product = await getProductById(id)
      return product
      })
    setRelatedProducts(await Promise.all(promises))
  }

  // get styles
  const getStyles = async (idArray) => {
    // returns array of style obj's
    const promises = idArray.map(async (id) => {
      const style = await getProductStylesById(id)
      return style
      })
    setProductStyles(await Promise.all(promises))
  }

  // interaction
  const postInteraction = async (data) => {
    try {
      await axios.post(`${API_URL}/interactions`, data, options);
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <APIContext.Provider
      value={{
        getProductById,
        getProductStylesById,
        getRelatedProductIds,
        getProducts,
        getStyles,
        postInteraction
      }}>
        {children}
      </APIContext.Provider>
  )
}

export default APIProvider;