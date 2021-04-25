import React, { useState, useEffect, useContext } from 'react';
import StarRating from '../../SharedComponents/StarRating.jsx';
import { RatingsAndReviewsContext } from '../../state/RatingsAndReviewsContext.js';
import { APIContext } from '../../state/APIContext.js';
import { ProductContext } from '../../state/ProductContext.js';
const Characteristics = (props) => {

  const { reviews } = useContext(RatingsAndReviewsContext);
  const { getReviewMetadata } = useContext(APIContext);
  const { productId } = useContext(ProductContext);

  useEffect(() => {

    getReviewMetadata(productId)
      .then(({data}) => {
        console.log(data);
        let characteristics = data.characteristics;
        console.log(characteristics);
      })
      .catch((err) => {
        console.log()
      })
  }, [productId] )

  return (
    <div>Characteristics</div>
  )
}

export default Characteristics;