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
  const [currentSkuObj, setCurrentSkuObj] = useState( currentStyleSkus[Object.keys(currentStyleSkus)[0]] );
  const [sizes, setSizes] = useState([]);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    transformSkuValues();
  }, [currentSkuObj])

  const transformSkuValues = () => {
    const sizes = Object.values(currentStyleSkus).map(sku => sku.size);
    setSizes(sizes);

    // limit 15 or amount in stock
    if (currentSkuObj && currentSkuObj.quantity < 15) {
      setQuantity(currentSkuObj.quantity);
    } else {
      setQuantity(15)
    }
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

      <AddToCart sizes={sizes} quantity={quantity} />
    </div>
  )
};

export default StyleSelector;