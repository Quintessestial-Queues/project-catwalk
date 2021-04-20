import React, { useState, useEffect } from 'react';
import styles from './product.module.css';

//icons
import leftArrow from '../../../assets/left-arrow.svg';
import rightArrow from '../../../assets/right-arrow.svg';

// this will be a context file in future release
import { dummyProduct, dummyProductStyles } from '../dummyData.js'

function Gallery({productStyles}) {
  const [currentStyle, setCurrentSyle] = useState({});
  const [images, setImages] = useState([]);
  const [defaultImg, setDefaultImg] = useState('')
  const [currentImage, setCurrentImage] = useState(0);

   useEffect(()=> {
    const defaultStyle = dummyProductStyles.results[0];
    const defaultImage = defaultStyle.photos[0].url;
    setCurrentSyle(defaultStyle);
    setImages(defaultStyle.photos);

    setDefaultImg(defaultImage)
  }, [])

  const next = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1)
  }

  const prev = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1: currentImage - 1)
  }

  return (
    <div className={`${styles.item} ${styles.galleryWrapper}`}>
      <img
        src={rightArrow}
        alt='right arrow'
        className={styles.rightArrow}
        onClick={next} />
      <img
        src={leftArrow}
        alt='left arrow'
        style={{ position: 'absolute', bottom: '50%', left: '70px', cursor: 'pointer', zIndex: 1, background: 'aliceblue'}}
        onClick={prev} />
      <div className={styles.thumbnailGallery} >
       { images.map((image, index) => {
         return (<img src={image.thumbnail_url} key={index} className={styles.thumbnail} />)
       })}
      </div>
      <div className={styles.gallery}>
      {images.map((slide, index) => {
        return (
          <div
            className={index === currentImage ? styles.slideActive : styles.slide}
            key={index}
          >
            {index === currentImage && (
              <img src={slide.url} alt='travel image' className={styles.slide} />
            )}
          </div>
        );
      })}
      </div>
    </div>
  )
}

export default Gallery;