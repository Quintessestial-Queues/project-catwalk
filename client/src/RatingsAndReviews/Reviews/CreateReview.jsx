import React, { useState, useEffect, useRef, useContext } from 'react';
import StarRating from '../../SharedComponents/StarRating.jsx';
import moment from 'moment';
import styles from './CreateReview.module.css';
import { APIContext } from '../../state/APIContext';
import { RatingsAndReviewsContext } from '../../state/RatingsAndReviewsContext.js';
import { ProductContext } from '../../state/ProductContext.js';
import axios from 'axios';

const CreateReview = (ref) => {
  const { reviews, filteredReviews, setReviews } = useContext(RatingsAndReviewsContext);
  const { getReviews, postReview, getReviewMetadata } = useContext(APIContext);
  const { productId } = useContext(ProductContext);

  const [clickedAddReview, setForm] = useState(false);
  const [headline, setHeadline] = useState('');
  const [reviewSummary, setReviewSummary] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const [recommended, setRecommended] = useState(false);
  const [userName, setUserName] = useState('Anonymous');
  const [email, setEmail] = useState('anonymous.gmail.com');
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [characteristics, setCharacteristics] = useState({});


  //TODO: When you click OUT of the form modal, go back to the default modal-less state
  const showForm = () => {
    return (
      <div className={styles.modal}>
        <div className={styles.modalMain}>
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
            <input className={styles.headlineText} type='text' value={headline} onChange={e => setHeadline(e.target.value)}></input>
          </div>

          <div className={styles.reviewBody}>
            <h4>Write your review</h4>
            <textarea className={styles.reviewBodyText} value={reviewBody} onChange={e => setReviewBody(e.target.value)}></textarea>
            <button>Submit</button>
          </div>
        </form>
        </div>
      </div>
    )
  }

  const handleImageSelect = (event) => {
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
    } else {
      let reviewPost = {
        product_id: Number(productId),
        rating: 4,
        summary: headline,
        body: reviewBody,
        recommend: recommended,
        name: userName,
        email: email,
        photos: selectedFiles,
        characteristics: {},
      }
      postReview(reviewPost)
        .then(() => {
          console.log('Successfully posted review')
          getReviews(productId)
            .then(({data}) => {
              setReviews(data.results)
            })
        })
        .catch((err) => {
          console.log('Error posting review', err);
        })
      setForm(false);
    }
  }

  return (
    <span>
      <button className={styles.addAReviewButton} onClick={() => {setForm(true)}}>Add A Review</button>
      {clickedAddReview ? showForm() : null}
    </span>
  )
}


export default CreateReview;