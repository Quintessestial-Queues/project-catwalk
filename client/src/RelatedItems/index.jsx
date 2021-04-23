import React, { useState, useEffect, useContext } from 'react';
//context
import { ProductContext } from '../state/ProductContext.js';
import { APIContext } from '../state/APIContext.js'

import styles from './relatedItems.module.css';
import RelatedProductCards from './RelatedProductCards.jsx'
import YourOutfit from './YourOutfit.jsx';
import { dummyProducts, dummyProductStyles } from '../dummyData.js'

function RelatedItems () {
  // State --------------------------------------------------------------------
  const [relatedProducts, setRelatedProducts] = useState([])
  const [outfitList, setOutfit] = useState([])

  // Context ------------------------------------------------------------------
  const {
    product, setProduct, productStyles, setProductStyles, currentStyle
  } = useContext(ProductContext);
  const {
    getProductStylesById, getProductById, getRelatedProducts
  } = useContext(APIContext)

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
    // handleCompare = () => {

  // }

  // Lifecycle Methods --------------------------------------------------------
  var productList = []
  useEffect(() => {
    getRelatedProducts(product.id)
      .then(products => {
        products = [...new Set(products.data)]
        products.forEach(id => {
          getProductById(id)
            .then(obj => {
              productList.push(obj.data)
              productList.forEach(obj => {
                getProductStylesById(obj.id)
                  .then(result => {
                    obj.thumbnail = result.data.results[0].photos[0].thumbnail_url
                  })
              })
            })
        })
      })
      .catch(err => {
        console.log(err)
      })
  }, [relatedProducts])
  setRelatedProducts(productList)

  return (
    <div id={styles.relatedItemsGrid}>
      <RelatedProductCards products={relatedProducts} handleClick={productListClick}/>
      <YourOutfit outfits={outfitList} handleAddOutfit={productListClick} handleRemove={handleRemove}/>
    </div>
  )
};

export default RelatedItems;