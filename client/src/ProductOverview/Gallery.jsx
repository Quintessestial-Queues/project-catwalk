import React, { useState, useEffect, useContext } from 'react';
import styles from './product.module.css';

//icons
import leftArrow from '../../../assets/left-arrow.svg';
import rightArrow from '../../../assets/right-arrow.svg';
import downArrow from '../../../assets/down-arrow.svg';
import fullScreen from '../../../assets/full-screen.svg';

// context
import  { ProductContext }  from '../state/ProductContext.js';
import {dummyProductStyles } from '../dummyData.js';

function Gallery({defaultView, setDefaultView}) {
  const {
    productStyles,
    setProductStyles,
    currentStyle,
    setCurrentStyle,
    images,
    setImages,
    defaultImg,
    setDefaultImg
  } = useContext(ProductContext);


  const [currentImage, setCurrentImage] = useState(0);
  const [thumbnailPage, setThumbnailPage] = useState(5);


  useEffect(() => {
    // display thumbnail gallary based on current thumbnail page
    if (currentImage > thumbnailPage) {
      setThumbnailPage(thumbnailPage + 5)
    } else if (currentImage === thumbnailPage && currentImage > thumbnailPage) {
      setThumbnailPage(thumbnailPage - 5)
    } else if (currentImage === thumbnailPage ) {
      setThumbnailPage(currentImage + 5)
    } else if (thumbnailPage > images.length) {
      setThumbnailPage(5)
    }
  }, [currentImage]);

  const next = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1)
  }

  const prev = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1)
  }

  const down = () => {
    setThumbnailPage(thumbnailPage < images.length - 1? thumbnailPage + 5 : 5)
  }

  const selectThumbnail = (index) => {
    setCurrentImage(index)
  }

  const toggleView = () => {
    setDefaultView(!defaultView);
  }

  return (
    <div className={defaultView === true ? `${styles.item} ${styles.galleryWrapper}` : `${styles.expanded} ${styles.galleryWrapper}`}>
      <img
        src={rightArrow}
        alt='right arrow'
        className={styles.rightArrow}
        onClick={next} />
      <img
        src={leftArrow}
        alt='left arrow'
        style={{ position: 'absolute', bottom: '50%', left: '110px', cursor: 'pointer', zIndex: 1, background: 'aliceblue'}}
        onClick={prev} />
      <img
        src={fullScreen}
        alt='toggle expanded view'
        className={styles.fullScreenIcon}
        onClick={toggleView}
      />
      <div className={styles.thumbnailGallery} >
       { images.map((image, index) => {
        //  only display images starting at thumbnail page up to 5
         return index <= thumbnailPage - 1 && index > thumbnailPage - 6 &&
          ( <img onClick={() => selectThumbnail(index)} src={image.thumbnail_url} key={index} className={index === currentImage ? styles.thumbnailActive : styles.thumbnail} /> )
       })}
       <img
        src={downArrow}
        alt='down arrow to scroll through thumbnails'
        className={styles.down}
        onClick={down} />
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