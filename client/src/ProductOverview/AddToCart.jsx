import React, { useState, useContext, useEffect} from 'react';
import styles from './styleSelect.module.css';

// context
import { ProductContext } from '../state/ProductContext.js';

const AddToCart = () => {
  const { sizes, quantity, selectedSize, selectedQuantity } = useContext(ProductContext);
  const quantities = [...Array(10).keys()]
  return (
    <form className={styles.btnWrap}>

    <select className={styles.selectSize}>

      {['xs', 'sm', 'md', 'lg'].map(size => {
        return
        (<option value={size} key={index}>
          {size}
        </option>)
      })}
    </select>

    <select className={styles.selectQuantity}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((size, index) => {
        return
        (<option value={size} key={index}>
          {size}
        </option>)
      })}
    </select>
    <button className={styles.addToBagBtn}>Add To Bag</button>
    <button className={styles.starBtn}>Star</button>
  </form>


  )
}

export default AddToCart;