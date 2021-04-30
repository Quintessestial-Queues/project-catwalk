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
    relatedProducts, relatedProductIds, relatedProductStyles, loadRelated, setLoadRelated
  } = useContext(RelatedProductsContext);
  const {
    product, setProduct, productStyles, setProductStyles, currentStyle, handleProductChange
  } = useContext(ProductContext);
  const {
    getProducts, getStyles, getRelatedProductIds
  } = useContext(APIContext);

  // Event handlers -----------------------------------------------------------
  var handleAddOutfit = (product, style) => {
    var productId = product.id
    product.style = style.photos[0].thumbnail_url

    if (!outfitList.some(obj => obj.id === productId)) {
      setOutfit([...outfitList, product])
    }
  }
  var handleRemove = (item) => {
    var productId = item.id
    setOutfit(outfitList.filter(item => item.id !== productId))
  }
  var handleProductClick = (product, productStyle) => {
    handleProductChange(product, productStyle)
    // setLoadRelated()
  }

  // Lifecycle Methods --------------------------------------------------------
  var productList = []
  useEffect(() => {
    getProducts(product.id)
  }, [product])

  return (
    <div id={styles.relatedItemsGrid}>
      <RelatedProductCards products={relatedProducts} images={relatedProductStyles} handleClick={handleProductClick} load={loadRelated}/>
      <YourOutfit outfits={outfitList} images={relatedProductStyles} handleAddOutfit={handleAddOutfit} handleRemove={handleRemove}/>
    </div>
  )
};

export default RelatedItems;