import React, { useState, useEffect, useContext } from 'react';


const CharacteristicsBar = ({characteristicData}) => {

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