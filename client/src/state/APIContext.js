import React, { useContext }from 'react';
import axios from 'axios';
import { API_KEY, API_URL } from '../config.js';
import { RatingsAndReviewsContext } from './RatingsAndReviewsContext.js';

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

  // interaction
  const postInteraction = async (data) => {
    try {
      await axios.post(`${API_URL}/interactions`, data, options);
    } catch(err) {
      console.log(err)
    }
  }


  //Routes for RatingsAndReviews

  //get requests
  const getReviews = (id, sort = 'relevant') => {
    let body = {
      headers: {'Authorization': API_KEY},
      params: {
        sort,
        product_id: id,
        count: 100,
      }
    }
    return axios.get(`${API_URL}/reviews/`, body);
  }

  const getReviewMetadata = (id) => {
    let body = {
      headers:{
        'Authorization': API_KEY
      },
      params: {
        product_id: id
      }
    }
    return axios.get(`${API_URL}/reviews/meta`, body);
  }

  //post requests
  //this is not done!
  const postReview = (review) => {
    return axios.post(`${API_URL}/reviews/`)
  }


  return (
    <APIContext.Provider
      value={{
        getProductById,
        getProductStylesById,
        postInteraction,
        getReviews,
        getReviewMetadata

      }}>
        {children}
      </APIContext.Provider>
  )
}

export default APIProvider;