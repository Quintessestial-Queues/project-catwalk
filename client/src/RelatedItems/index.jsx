import React, { useState, useEffect, useContext } from 'react';
//context
import { ProductContext } from '../state/ProductContext.js';
import { RelatedProductsContext } from '../state/RelatedProductsContext.js'
import { APIContext } from '../state/APIContext.js'

import styles from './relatedItems.module.css';
import RelatedProductCards from './RelatedProductCards.jsx'
import YourOutfit from './YourOutfit.jsx';
import { dummyProducts, dummyProductStyles } from '../dummyData.js'

function RelatedItems () {
  // State --------------------------------------------------------------------
  const [outfitList, setOutfit] = useState([])

  // Context ------------------------------------------------------------------
  const {
    relatedProducts, relatedProductIds, relatedProductStyles
  } = useContext(RelatedProductsContext);
  const {
    product, setProduct, productStyles, setProductStyles, currentStyle,
  } = useContext(ProductContext);
  const {
    getProducts, getStyles, getRelatedProductIds
  } = useContext(APIContext);

  // Event handlers -----------------------------------------------------------
  var productListClick = (product) => {
    var productId = product.id
    if (!outfitList.some(obj => obj.id === productId)) {
      setOutfit([...outfitList, product])
    }
  }
  var handleRemove = (item) => {
    var productId = item.id
    setOutfit(outfitList.filter(item => item.id !== productId))
  }
    // getProduct = (id) => {

  // }
  //  getProductStyle = (id) => {

  // }

  // Lifecycle Methods --------------------------------------------------------
  var productList = []
  useEffect(() => {
    getRelatedProductIds(product.id)
    getProducts(relatedProductIds)
    getStyles(relatedProductIds)


  }, [])

  return (
    <div id={styles.relatedItemsGrid}>
      <RelatedProductCards products={relatedProducts} handleClick={productListClick}/>
      <YourOutfit outfits={outfitList} handleAddOutfit={productListClick} handleRemove={handleRemove}/>
    </div>
  )
};

export default RelatedItems;