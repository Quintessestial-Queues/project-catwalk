import React, { useContext, useState } from 'react';
import styles from './styleSelect.module.css';

// context global state
import { ProductContext } from '../state/ProductContext.js';

import AddToCart from './AddToCart.jsx';

function StyleSelector() {
  const {
    productStyles,
    currentStyle,
    handleStyleChange
  } = useContext(ProductContext);

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
            <div className={styles.singleStyle} key={index}>
              <img
                onClick={handleStyleChange}
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