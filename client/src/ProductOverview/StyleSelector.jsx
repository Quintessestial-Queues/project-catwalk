import React, { useContext, useState, useEffect } from 'react';
import styles from './styleSelect.module.css';
import Checkmark from '../../../assets/check.svg';

// context global state
import { ProductContext } from '../state/ProductContext.js';

import AddToCart from './AddToCart.jsx';

function StyleSelector() {
  const {
    productStyles,
    currentStyle,
    currentStyleIndex,
    handleStyleChange,
    currentStyleSkus,
  } = useContext(ProductContext);

  // set the first property of the sku object to current
  const [currentSkuObj, setCurrentSkuObj] = useState( Object.values(currentStyleSkus)[0] );
  const [sizes, setSizes] = useState([]);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    //updates the default sky object when styles or product change
    setCurrentSkuObj(Object.values(currentStyleSkus)[0])
  }, [currentStyle])


  useEffect(() => {
    transformSkuValues();
  }, [currentSkuObj])

  useEffect(() => {
    updateQuantity();
  }, [currentSkuObj])

  const updateQuantity = () => {
    if (currentSkuObj.quantity > 15) {
      setQuantity(15);
    } else if(currentSkuObj < 15) {
      setQuantity(currentSkuObj.quantity)
    }
  }
  // get an array and quatity for the defualt select options
  const transformSkuValues = () => {
    const sizes = Object.values(currentStyleSkus).map(sku => sku.size);
    setSizes(sizes);

    // limit 15 or amount in stock
    if (currentSkuObj && currentSkuObj.quantity <= 15) {
      setQuantity(currentSkuObj.quantity);
    } else {
      setQuantity(15)
    }
  }

  // this should update the current sku object  based on size selected
  const selectSize = () => {

    const selected = event.target.value;
    let skuArray = [];

    // create an array of objects with sizes and quantity
    for (const [key, value] of Object.entries(currentStyleSkus)) {
      const size = value.size;
      const quantity = value.quantity
      let obj = {}
      obj[key] = value;
      obj.quantity = quantity;
      obj.size = size;
      skuArray.push(obj);
    }

    // filter for the right obj by the size
    const sku = skuArray.filter(sku => {
      return sku.size == selected;
    })[0]

    // get the value at the first key
    const skuValues = sku[Object.keys(sku)[0]]

    setCurrentSkuObj(skuValues);

  }

  return (
    <div>
      <p className={styles.styleLabel}> Style >
      <span
          className={styles.styleName}> {currentStyle.name}
        </span>
      </p>

      <div className={styles.stylesWrap} id='style-wrap'>
        {productStyles.length && productStyles.map((style, index) => {
          const firstImg = style.photos[0].thumbnail_url;
          return (
            <div
              className={styles.singleStyle}
              key={index}
              id='style'
              onClick={() => handleStyleChange(index)}>
              {index === currentStyleIndex && <img src={Checkmark} className={styles.checkmark} />}

              <img
                className={styles.singleStyle}
                src={firstImg} />
            </div>)
        })}
      </div>

      <AddToCart sizes={sizes} quantity={quantity} selectSize={selectSize} />
    </div>
  )
};

export default StyleSelector;