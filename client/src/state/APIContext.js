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
  const getProductById = async () => {
    try {
      const product = await axios.get(`${API_URL}/products/${id}`, options);
      console.log(product)
    } catch (err) {
      console.log(err);
    }
  };


  // get the current product info
  const getProductStylesById = (id) => {
    // return a chainable promise
    return axios.get(`${API_URL}/products/${id}/styles`, options)
  };

  // interaction
  const postInteraction = async (data) => {
    try {
      await axios.post(`${API_URL}/interactions`, data, options);
      console.log(product)
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <APIContext.Provider
      value={{
        getProductById,
        getProductStylesById,
        postInteraction
      }}>
        {children}
      </APIContext.Provider>
  )
}

export default APIProvider;