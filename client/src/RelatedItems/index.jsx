import React, { useState, useEffect } from 'react';
import styles from './relatedItems.module.css';
import RelatedProductCards from './RelatedProductCards.jsx'
import YourOutfit from './YourOutfit.jsx';
import { dummyProducts, dummyProductStyles } from '../dummyData.js'

function RelatedItems () {
  const [data, setData] = useState(dummyProducts)
  const [outfitList, setOutfit] = useState([])

  var productListClick = (product) => {
    var productId = product.id
    if (!outfitList.some(obj => obj.id === productId)) {
      setOutfit([...outfitList, product])
    }
  }

  useEffect(() => {
    console.log('Outfit added!')
  })

  return (
    <div id={styles.relatedItemsGrid}>
      <RelatedProductCards products={data} handleClick={productListClick}/>
      <YourOutfit outfits={outfitList}/>
    </div>
  )
};

export default RelatedItems;