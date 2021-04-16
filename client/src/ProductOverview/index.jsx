import React, { useState } from 'react';
import StarRating from '../SharedComponents/StarRating.jsx';
import './product.module.css';

function ProductOverview() {


  return (
    <div>
      <StarRating
        starRating={1} // star rating from api will be integer
      />
    </div>
  )
};

export default ProductOverview;