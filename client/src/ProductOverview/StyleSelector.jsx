import React, { useContext } from 'react';
import styles from './styleSelect.module.css';

// context global state
import { ProductContext }  from '../state/ProductContext.js';

function StyleSelector () {
  const {
   productStyles, setProductStyles, currentStyle
  } = useContext(ProductContext);

  return (
    <div>
      {console.log(productStyles)}
    <p className={styles.styleLabel}> Style > </p> <span> Selected style from context </span>
    <div className={styles.stylesWrap}>
      {productStyles.length && productStyles.map((style, index) => {
        const firstImg = style.photos[0].thumbnail_url;
        return (<div className={styles.singleStyle} key={index}> <img className={styles.singleStyle} src={firstImg} /></div>)
      })}
    </div>
    <form className={styles.btnWrap}>

      <select>
        {['xs', 'sm', 'md'].map((size, index) => {
          return (<option value={size} key={index}>{size}</option>)
        })}
      </select>
      <select>
        {[1, 2, 3].map((quantity, index) => {
          return (<option value={quantity} key={index}>{quantity}</option>)
        })}
      </select>
      <button>Add To Bag</button>
      <button>Star</button>
    </form>
    </div>
  )
};

export default StyleSelector;