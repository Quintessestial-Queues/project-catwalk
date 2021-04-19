import React from 'react';
import './relatedItems.module.css';
import RelatedProductCards from './RelatedProductCards.jsx'
import sampleData from './sampleData.js'

function RelatedItems () {
  return (
    <div> Related Items and Comparisons
      <RelatedProductCards />
    </div>
  )
};

export default RelatedItems;