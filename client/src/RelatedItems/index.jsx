import React, { useState, useEffect } from 'react';
import styles from './relatedItems.module.css';
import RelatedProductCards from './RelatedProductCards.jsx'
import { dummyProducts, dummyProductStyles } from '../dummyData.js'

function RelatedItems () {
  const [data, setData] = useState(dummyProducts)

  // useEffect(() =>{
  //   setData(dummyProducts);
  // })

  return (
    <div>
      <h3 id={styles.relatedItemsTitle}>Related Items and Comparisons</h3>
      <RelatedProductCards products={data}/>
    </div>
  )
};

export default RelatedItems;