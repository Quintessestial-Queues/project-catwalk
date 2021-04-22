import React from 'react';
import StarRating from '../../SharedComponents/StarRating.jsx';
import moment from 'moment';
import { useState, useEffect, useRef } from 'react';
import styles from './CreateReview.module.css';
import axios from 'axios';

const CreateReview = () => {
  const [clickedAddReview, setForm] = useState(false);
  const [headline, setHeadline] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const showForm = () => {

    return (
      <div>
          <h3>Create Review</h3>
          <form className={styles.reviewFormContainer} onSubmit={handleSubmit}>

          <div className={styles.imageUploader}>
            <h4>Add photos</h4>
            <input type='file' accept='image/*' multiple onChange={handleImageSelect}>
            </input>
            <div>
              <img src={selectedFile} className={styles.selectedImage}/>
              <img src={selectedFiles[0]} className={styles.selectedImage}/>
              <img src={selectedFiles[1]} className={styles.selectedImage}/>
              <img src={selectedFiles[2]} className={styles.selectedImage}/>
              <img src={selectedFiles[3]} className={styles.selectedImage}/>
            </div>
          </div>

          <div className={styles.headline}>
            <h4>Add a headline</h4>
            <input type='text' value={headline} onChange={e => setHeadline(e.target.value)}></input>
          </div>

          <div className={styles.reviewBody}>
            <h4>Write your reivew</h4>
            <textarea value={reviewBody} onChange={e => setReviewBody(e.target.value)}></textarea>
            <button>Submit</button>
          </div>
        </form>
      </div>
    )
  }

  const handleImageSelect = (event) => {
    console.log(event.target.files[0])
    if (selectedFile) {
      selectedFiles.push(selectedFile)
    }

    selectedFiles.length < 5 ? setSelectedFile(URL.createObjectURL(event.target.files[0])) : alert('Only five images can be uploaded at a time');
  }

  const handleImageUpload = (event) => {

    //TODO: Refactor to accomodate post requests to API
    const [file] = event.target.files;
    const fd = new FormData();
    console.log('Successfully Uploaded Images')

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (reviewBody.length < 50 || reviewBody.length > 1000) {
      alert('Review should be between 50 and 1000 characters long');
    }
    alert(`Submitting Review with headline ${headline}`);
  }

  return (
    <div>
      <button className='createReview' onClick={() => {setForm(true)}}>Add A Review</button>
      {clickedAddReview ? showForm() : null}
    </div>
  )
}


export default CreateReview;