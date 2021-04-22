import React, { useState, useContext, useEffect} from 'react';
import styles from './styleSelect.module.css';

// context
// import { ProductContext } from '../state/ProductContext.js';

const AddToCart = ({sizes, quantity}) => {
  const quantities = [...Array(quantity + 1).keys()]
  return (
    <form className={styles.btnWrap}>
    <select className={styles.selectSize} name='size' id='size-select'>
        <option value='default'>--Please choose an option--</option>
        {sizes && sizes.length && sizes.map((size, index)=> {
          return (
            <option key={index} value={size}>{size}</option>
          )
        })}}
    </select>


    <select className={styles.selectQuantity} name='quantity' id='quantity-select'>
      <option value='default'>--Please choose an option--</option>
      {quantities && quantities.length && quantities.map((q, i) => {
        return (
          <option key={i} value={q}>{q}</option>
        )
      })}
    </select>
    <button className={styles.addToBagBtn}>Add To Bag</button>
    <button className={styles.starBtn}>Star</button>
  </form>


  )
}

export default AddToCart;