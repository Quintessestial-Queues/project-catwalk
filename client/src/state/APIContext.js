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


//ROUTES FOR RatingsAndReviews

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
  const postReview = (review) => {
    return axios.post(`${API_URL}/reviews/`, review, options)
  }

  //put requests
  const updateHelpfulReview = (id) => {
    let body = {
      params: {
        review_id: id
      }
    }
    return axios.put(`${API_URL}/reviews/${id}/helpful`, body, options);
  }

  const reportReview = (id) => {
    let body = {
      params: {
        review_id: id
      }
    }
    return axios.put(`${API_URL}/reviews/${id}/report`, body, options);
  }

  return (
    <APIContext.Provider
      value={{
        getProductById,
        getProductStylesById,
        postInteraction,
        getReviews,
        getReviewMetadata,
        updateHelpfulReview,
        reportReview,
        postReview
      }}>
        {children}
      </APIContext.Provider>
  )
}

export default APIProvider;