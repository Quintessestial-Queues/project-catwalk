import React, { useState, useEffect } from 'react';
import styles from './RatingsBar.module.css';

const RatingsBar = ({ratingFraction}) => {

  const fillerStyles ={
    height: '100%',
    width: `${ratingFraction}%`,
    backgroundColor: 'grey',
    borderRadius: 'inherit',
  }

  const containerStyles = {
    height: 10,
    width: '60%',
    backgroundColor: "#e0e0de",
    margin: 'auto',
    display: 'inline-block'
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span></span>
      </div>
    </div>
  )
}

export default RatingsBar;
