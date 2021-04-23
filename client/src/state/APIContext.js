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
  const getProductById = (id) => {
    // return a chainable promise
    return axios.get(`${API_URL}/products/${id}`, options)
  };



  // get the current product info
  const getProductStylesById = (id) => {
    // return a chainable promise
    return axios.get(`${API_URL}/products/${id}/styles`, options)
  };

<<<<<<< HEAD
  // get related product id's
  const getRelatedProducts = (id) => {
    // return a chainable promise
    return axios.get(`${API_URL}/products/${id}/related`, options)
=======
  // interaction
  const postInteraction = async (data) => {
    try {
      await axios.post(`${API_URL}/interactions`, data, options);
    } catch(err) {
      console.log(err)
    }
>>>>>>> 32d885df88cc3f7b18449047e8212ca69b4018e8
  }

  return (
    <APIContext.Provider
      value={{
        getProductById,
        getProductStylesById,
<<<<<<< HEAD
        getRelatedProducts
=======
        postInteraction
>>>>>>> 32d885df88cc3f7b18449047e8212ca69b4018e8
      }}>
        {children}
      </APIContext.Provider>
  )
}

export default APIProvider;