import React from 'react';
import StarRating from '../../SharedComponents/StarRating.jsx';
import moment from 'moment';
import { useState, useEffect, useRef } from 'react';


const CreateReview = () => {
  const [clickedAddReview, setForm] = useState(false);
  const [headline, setHeadline] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const uploadedImage = useRef(null);
  const imageUploader= useRef(null);

  const showForm = () => {
    return (
      <div>
        <h3>Create Review</h3>
        <form onSubmit={handleSubmit}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
          <h4>Add photos</h4>
          <input type='file' accept='image/*' multiple onChange={handleImageUpload} ref={imageUploader}>
          </input>
          <div style={{
            height: '60px',
            width: '60px',
            border: '1px dashed black'
            }}
            onClick={() => {
              imageUploader.current.click()
            }}
          >
            <img
              ref = {uploadedImage}
              style ={{
                width: '60px',
                height: '60px',
                position: 'absolute'
              }}
            />
            
            </div>
          </div>
          <h4>Add a headline</h4>
          <input type='text' value={headline} onChange={e => setHeadline(e.target.value)}></input>

          <h4>Write your reivew</h4>
          <textarea value={reviewBody} onChange={e => setReviewBody(e.target.value)}></textarea>
          <button>Submit</button>
        </form>
      </div>
    )
  }

  const handleImageUpload = (event) => {
    const [file] = event.target.files;
    if (file) {
      console.log(file);
      const reader = new FileReader();
      const {current} = uploadedImage;
      current.file = file;
      reader.onload = (event) => {
        current.src = event.target.result;
      }
      reader.readAsDataURL(file);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
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