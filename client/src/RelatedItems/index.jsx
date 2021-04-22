import React, { useState, useEffect, useContext } from 'react';
//context
// import { ProductContext } from '../state/ProductContext.js';

import styles from './relatedItems.module.css';
import RelatedProductCards from './RelatedProductCards.jsx'
import YourOutfit from './YourOutfit.jsx';
import { dummyProducts, dummyProductStyles } from '../dummyData.js'

function RelatedItems () {
  const [data, setData] = useState(dummyProducts)
  const [outfitList, setOutfit] = useState([])
  //context
  // const {
  //   product, setProduct, productStyles, setProductStyles, currentStyle
  // } = useContext(ProductContext);


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
      <YourOutfit outfits={outfitList} handleAddOutfit={productListClick}/>
    </div>
  )
};

export default RelatedItems;