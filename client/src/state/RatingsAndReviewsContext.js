import React, { createContext, Component, useState } from 'react'
import { APIContext } from '../state/APIContext.js';
import { dummyReviews } from '../dummyData.js';


export const RatingsAndReviewsContext = createContext();

export const RatingsAndReviewsProvider = (props) => {
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [starFilters, setStarFilters] = useState([]);


  

  return (
    <RatingsAndReviewsContext.Provider value={{
      reviews,
      setReviews,
      filteredReviews,
      setFilteredReviews,
      starFilters,
      setStarFilters
    }} >
      {props.children}
    </RatingsAndReviewsContext.Provider>
  )

}
