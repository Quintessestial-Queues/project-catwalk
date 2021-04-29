import React, { useContext } from 'react';
import axios from 'axios';
import { API_KEY, API_URL } from '../config.js';
import { RelatedProductsContext } from './RelatedProductsContext.js'
import { RatingsAndReviewsContext } from './RatingsAndReviewsContext.js';

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
      var idArray = ([...new Set(ids.data)])
      return idArray
    } catch (err) {
      console.log(err);
    }
  };

  // get products
  const getProducts = async (id) => {
    // returns array of product obj's
    const idArray = await getRelatedProductIds(id)
    const products = idArray.map(async (id) => {
      const product = await getProductById(id)
      return product
      })
    const styles = idArray.map(async (id) => {
      const style = await getProductStylesById(id)
      return style
    })
    setProductStyles(await Promise.all(styles))
    setRelatedProducts(await Promise.all(products))
  }

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
        getRelatedProductIds,
        getProducts,
        // getStyles,
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