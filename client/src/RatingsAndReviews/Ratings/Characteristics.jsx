import React, { useState, useEffect, useContext } from 'react';
import StarRating from '../../SharedComponents/StarRating.jsx';
import { RatingsAndReviewsContext } from '../../state/RatingsAndReviewsContext.js';
import { APIContext } from '../../state/APIContext.js';
import { ProductContext } from '../../state/ProductContext.js';
import CharacteristicsBar from './CharacteristicsBar.jsx';
import styles from './Characteristics.module.css';

const Characteristics = (props) => {

  const [characteristicsData, setCharacteristicsData] = useState(null);

  const { reviews } = useContext(RatingsAndReviewsContext);
  const { getReviewMetadata } = useContext(APIContext);
  const { productId } = useContext(ProductContext);

  useEffect(() => {

    getReviewMetadata(productId)
      .then(({data}) => {
        let characteristics = data.characteristics;
        setCharacteristicsData(characteristics);
      })
      .catch((err) => {
        console.log('Error getting Metadata', err)
      })
  }, [productId] )

  let characteristicsDataArr = characteristicsData ? Object.values(characteristicsData): [];

  let valuesArr = [];

  characteristicsDataArr.forEach((characteristic) => {
    valuesArr.push(characteristic.value);
  })


  return (
    <div className={styles.characteristicsContainer}>

      <div className='grid'><div>Size</div><CharacteristicsBar characteristicData={valuesArr.length > 0 ? valuesArr[0] : null}/><div className={styles.characteristicsBarContainer}><span>Runs Small</span>  <span >Just Right</span> <span>Runs Big</span></div></div>

      <div><span>Width</span><CharacteristicsBar characteristicData={valuesArr.length > 0 ? valuesArr[1] : null}/><div className={styles.characteristicsBarContainer}><span>Runs Tight</span>  <span >Just Right</span> <span>Runs Wide</span></div></div>

      <div><span>Comfort</span><CharacteristicsBar characteristicData={valuesArr.length > 0 ?  valuesArr[2]  : null}/><div className={styles.characteristicsBarContainer}><span>Uncomfortable</span>  <span ></span> <span>Comfortable</span></div></div>

      <div><span>Quality</span><CharacteristicsBar characteristicData={valuesArr.length > 0 ?  valuesArr[3]  : null}/><div className={styles.characteristicsBarContainer}><span>Poor</span>  <span ></span> <span style={{
        position: 'relative',
        right: '-40px'
      }}>Perfect</span></div></div>
    </div>
  )
}

export default Characteristics;