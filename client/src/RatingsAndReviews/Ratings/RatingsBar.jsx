import React, { useState, useEffect } from 'react';
import styles from './RatingsBar.module.css';

const RatingsBar = ({ratingFraction, handleOnClickStars, filterValue}) => {
  const [hovered, setHovered] = useState(false);

  const fillerStyles ={
    height: '100%',
    width: `${ratingFraction}%`,
    backgroundColor: '	#808080',
    borderRadius: 'inherit',
  }

  const containerStyles = {
    height: 7,
    width: '60%',
    backgroundColor: "#e0e0de",
    margin: 'auto',
    display: 'inline-block'
  }

  const hoveredContainerStyles = {
    height: 7,
    width: '60%',
    backgroundColor: "#b1b1af",
    margin: 'auto',
    display: 'inline-block',
    cursor: 'pointer'
  }

  const hoveredFillerStyles ={
    height: '100%',
    width: `${ratingFraction}%`,
    backgroundColor: '#5f5f5f',
    borderRadius: 'inherit',
    cursor: 'pointer'
  }

  return (
    <div value={filterValue} style={hovered ? hoveredContainerStyles : containerStyles} className={styles.ratingsBar} onMouseEnter={() => {
      setHovered(true);
    }} onMouseLeave={() => {
      setHovered(false);
    }} onClick={handleOnClickStars}>
      <div style={hovered ? hoveredFillerStyles : fillerStyles}>
        <span></span>
      </div>
    </div>
  )
}

export default RatingsBar;
