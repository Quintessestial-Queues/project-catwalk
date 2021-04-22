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

  const [currentSkuObj, setCurrentSkuObj] = useState( currentStyleSkus[Object.keys(currentStyleSkus)[0]] );

  useEffect(() => {
    transformSkuValues();
  }, [])

  const transformSkuValues = () => {
    const sizes = Object.values(currentStyleSkus)
    console.log(sizes)
  }
  return (
    <div>
      <p className={styles.styleLabel}> Style >
      <span
          className={styles.styleName}> {currentStyle.name}
        </span>
      </p>

      <div className={styles.stylesWrap}>
        {productStyles.length && productStyles.map((style, index) => {
          const firstImg = style.photos[0].thumbnail_url;
          return (
            <div
              className={styles.singleStyle}
              key={index}
              onClick={() => handleStyleChange(index)}>
              {index === currentStyleIndex && <img src={Checkmark} className={styles.checkmark} />}

              <img
                className={styles.singleStyle}
                src={firstImg} />
            </div>)
        })}
      </div>

      <AddToCart />
    </div>
  )
};

export default StyleSelector;