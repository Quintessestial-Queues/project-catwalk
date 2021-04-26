import React, { useState, useEffect, useContext } from 'react';
// import StarRating from '../../SharedComponents/StarRating.jsx';
// import { RatingsAndReviewsContext } from '../../state/RatingsAndReviewsContext.js';
// import { APIContext } from '../../state/APIContext.js';
// import { ProductContext } from '../../state/ProductContext.js';

const CharacteristicsBar = ({characteristicData}) => {


  // const fillerStyles ={
  //   height: '100%',
  //   width: `${ratingFraction}%`,
  //   backgroundColor: 'grey',
  //   borderRadius: 'inherit',
  // }

  const containerStyles = {
    height: 7,
    width: '80%',
    backgroundColor: "#e0e0de",
    margin: 'auto',
    display: 'inline-block'
  }

  let pointer = (<span className="characteristic-pointer" style={{
    left: `${(Number(characteristicData) - 1) * 100 / 4}%`,
    position: 'relative',
    top: '-7px'
  }}>&#x25BE;</span>);

  // debugger;
  return (
    <div>
      <span></span>
      <div style={containerStyles}>
        {pointer}
      </div>
    </div>
  )

}

export default CharacteristicsBar;