import React, { useState } from 'react';
import styles from './relatedItems.module.css';
import RelatedProductCards from './RelatedProductCards.jsx'
import YourOutfit from './YourOutfit.jsx';
import { dummyProducts, dummyProductStyles } from '../dummyData.js'

function RelatedItems () {
  const [data, setData] = useState(dummyProducts)
  const [outfitList, setOutfit] = useState(dummyProducts)

  return (
    <div id={styles.relatedItemsGrid}>
      <RelatedProductCards products={data} />
      <YourOutfit outfits={outfitList}/>
    </div>
  )
};

export default RelatedItems;