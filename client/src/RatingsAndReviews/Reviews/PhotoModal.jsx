import React, { useState } from 'react';
import styles from './PhotoModal.module.css';

const PhotoModal = ({photo}) => {
  const [showPhotoModal, togglePhotoModal] = useState(false);

  const cancelModal = () => {
    togglePhotoModal(!showPhotoModal);
  }

  let modalRender = showPhotoModal ? (
    <div className={showPhotoModal ? styles.modal : null}>
      <section className={showPhotoModal ? styles.modalMain : null}>
        <img src={photo} onClick={cancelModal} className={styles.modalPhoto}/>
      </section>
    </div>
  ) : <img className={styles.photo} src={photo} onClick={togglePhotoModal}/>;

  return modalRender


}

export default PhotoModal;