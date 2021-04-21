import React from 'react';
import axios from 'axios';
import { API_KEY, API_URL } from '../config.js';

// first create the context
export const APIContext = React.createContext();

// then create a provider
const APIProvider = ({ children }) => {
  // this will be where our API calls live

  const options = {
    headers: {'Authorization': API_KEY}
  };

  // get the current product info
  const getProductById = async (id) => {
    try {
      const product = await axios.get(`${baseURL}/products/${id}`, {
        headers: { Authorization: REACT_APP_API_KEY },
      });
      setSelectedProduct(product.data);
    } catch (err) {
      console.log(err);
    }
  };
  // get the current product info
  const getProductStylesById = (id) => {
    // return a chainable promise
    return axios.get(`${API_URL}/products/${id}/styles`, options)
  };

  return (
    <APIContext.Provider
      value={{
        getProductById,
        getProductStylesById
      }}>
        {children}
      </APIContext.Provider>
  )
}

export default APIProvider;