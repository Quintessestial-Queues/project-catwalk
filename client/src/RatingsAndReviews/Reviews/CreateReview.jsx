import React, { useState, useEffect, useRef, useContext } from 'react';
import StarRating from '../../SharedComponents/StarRating.jsx';
import styles from './CreateReview.module.css';
import { APIContext } from '../../state/APIContext';
import { RatingsAndReviewsContext } from '../../state/RatingsAndReviewsContext.js';
import { ProductContext } from '../../state/ProductContext.js';
import ReviewRating from './ReviewRating.jsx';
import axios from 'axios';

const CreateReview = (props) => {
  const { reviews, filteredReviews, setReviews,reviewsMetadata, setReviewsMetadata} = useContext(RatingsAndReviewsContext);
  const { getReviews, postReview, getReviewMetadata } = useContext(APIContext);
  const { productId } = useContext(ProductContext);

  const [clickedAddReview, setForm] = useState(false);
  const [headline, setHeadline] = useState("");
  const [reviewSummary, setReviewSummary] = useState("");
  const [reviewBody, setReviewBody] = useState("");
  const [recommended, setRecommended] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [characteristics, setCharacteristics] = useState({});
  const [charIds, setCharIds] = useState([]);
  const [rating, setRating] = useState(null);
  const [size, setSize] = useState(null);
  const [width, setWidth] = useState(null);
  const [comfort, setComfort] = useState(null);
  const [quality, setQuality] = useState(null);

  //Form validation
  const [emailError, setEmailError] = useState("");
  const [ratingError, setRatingError] = useState("");
  const [reviewBodyError, setReviewBodyError] = useState("");
  const [userError, setUserError] = useState("");

  useEffect(() => {
    getReviewMetadata(productId)
      .then(({data}) => {
        let metadata = data;
        setReviewsMetadata(metadata);
        let characteristicsId = [];
        for (let key in metadata.characteristics) {
          let currentChar = metadata.characteristics[key];
          let charId = currentChar.id;
          characteristicsId.push(charId);
        }
        setCharIds(characteristicsId)
      })
  }, [])

  useEffect(() => {
    let characteristicsIdandValue = {};
        size ? characteristicsIdandValue[charIds[0]] = Number(size) : null;
        width ? characteristicsIdandValue[charIds[1]] = Number(width) : null;
        comfort ? characteristicsIdandValue[charIds[2]] = Number(comfort) : null;
        quality ? characteristicsIdandValue[charIds[3]] = Number(quality) : null;
        setCharacteristics(characteristicsIdandValue);
  }, [size, width, comfort, quality])


  //TODO: When you click OUT of the form modal, go back to the default modal-less state
  const showForm = () => {

    let possibleCharacteristics = ['size', 'width', 'comfort', 'quality'];
    let sizeFit = ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too big'];
    let widthFit = ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'];
    let comfortFit = ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'];
    let qualityFit = ['Poor', 'Below Average', 'What I expected', 'Pretty great', 'Perfect'];

    let characteristicsKeys = Object.keys(reviewsMetadata.characteristics);
    return (
      <div className={styles.modal}>
        <div className={styles.modalMain}>
          <h3 className={styles.createReviewHeadline}>Create Review</h3>
          <form className={styles.reviewFormContainer} onSubmit={handleSubmit}>

          <div className='reviewRating'>
            <h3 className={styles.overAllRating}>Overall rating</h3>
            <ReviewRating rating={rating} setRating={setRating}/>
            <span className={styles.errorMessage}>{ratingError}</span>
          </div>

          <div className='recommendedRadio'>
            <span>Would you recommend this product?
              <input name='recommended'type="radio" value="Yes" onClick={ () => {
                setRecommended(true);
              }}/> Yes
              <input name='recommended' type="radio" value="No" onClick={ () => {
                setRecommended(false);
              }}/> No
            </span>
          </div>

          <div className='characteristicsRadio'>
            {characteristicsKeys.map((key, i) => {
              return (<div key={i} value={key}>{key}
                <span ><input type='radio' name={key} onClick={() => {
                  key === 'Size' ? setSize(event.target.value) :
                  key === 'Width' ? setWidth(event.target.value) :
                  key === 'Comfort' ? setComfort(event.target.value) :
                  key === 'Quality' ? setQuality(event.target.value) :
                  null
                }} value={1}/>1</span>
                <span ><input type='radio'name={key} onClick={() => {
                  key === 'Size' ? setSize(event.target.value) :
                  key === 'Width' ? setWidth(event.target.value) :
                  key === 'Comfort' ? setComfort(event.target.value) :
                  key === 'Quality' ? setQuality(event.target.value) :
                  null
                }} value={2}/>2</span>
                <span ><input type='radio' name={key} onClick={() => {
                  key === 'Size' ? setSize(event.target.value) :
                  key === 'Width' ? setWidth(event.target.value) :
                  key === 'Comfort' ? setComfort(event.target.value) :
                  key === 'Quality' ? setQuality(event.target.value) :
                  null
                }} value={3}/>3</span>
                <span ><input type='radio' name={key} onClick={() => {
                  key === 'Size' ? setSize(event.target.value) :
                  key === 'Width' ? setWidth(event.target.value) :
                  key === 'Comfort' ? setComfort(event.target.value) :
                  key === 'Quality' ? setQuality(event.target.value) :
                  null
                }} value={4}/>4</span>
                <span ><input type='radio' name={key} onClick={() => {
                  key === 'Size' ? setSize(event.target.value) :
                  key === 'Width' ? setWidth(event.target.value) :
                  key === 'Comfort' ? setComfort(event.target.value) :
                  key === 'Quality' ? setQuality(event.target.value) :
                  null
                }} value={5}/>5</span> <span>{
                    size && key === 'Size' ? sizeFit[size - 1] :
                    width && key === 'Width' ? widthFit[width - 1] :
                    comfort && key === 'Comfort' ? comfortFit[comfort - 1] :
                    quality && key === 'Quality' ? qualityFit[quality - 1] :
                    null
                  }</span>
              </div>)
            })}
          </div>

          <div className={styles.imageUploader}>
            <h4 className={styles.photos}>Add photos</h4>
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
            <input className={styles.inputText} type='text' value={headline} onChange={e => setHeadline(e.target.value)} placeholder={'Example: Best purchase ever!'}></input>
          </div>

          <div className={styles.username}>
            <h4>Username</h4>
            <input className={styles.inputText} type='text' value={userName} onChange={e => setUserName(e.target.value)} placeholder={'Example: CoolDude420'}></input>
            <div className={styles.note}>
              For privacy reasons, do not use your full name or email address
            </div>
            <div className={styles.errorMessage}>
              {userError}
            </div>
          </div>

          <div className={styles.email}>
            <h4>Email</h4>
            <input className={styles.inputText}type='text' value={email} onChange={e => setEmail(e.target.value)} placeholder={'Example: awesomebuyer@gmail.com'}/>
            <div className={styles.note}>
              For authentication reasons, you will not be emailed
            </div>
            <div className={styles.errorMessage}>
              {`  ${emailError}`}
            </div>
          </div>

          <div className={styles.reviewBody}>
            <h4>Write your review</h4>
            <textarea placeholder={`Example: I gave these to my kids and they love it! What a great product! Would recommend!`} className={styles.reviewBodyText} value={reviewBody} onChange={e => setReviewBody(e.target.value)}></textarea><div className={styles.errorMessage}>{reviewBodyError}</div>
            <span>{reviewBody.length < 50 ? `Minimum required characters left: ${50 - reviewBody.length}` : `Minimum reached`} </span>
            <button className={styles.formButton}>Submit</button>
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

  const clearErrors = () => {
    setEmailError("");
    setReviewBodyError("");
    setRatingError("");
    setUserError("");
  }

  const resetForm = () => {
    setHeadline('');
    setReviewBody('');
    setReviewSummary('');
    setRecommended(false);
    setUserName('');
    setEmail('');
    setSelectedFile(null);
    setSelectedFiles([]);
    setCharacteristics({});
    setCharacteristics([]);
    setRating(null);
    setSize(null);
    setWidth(null);
    setComfort(null);
    setQuality(null);
  }

  const validate = () => {
    let reviewBodyError = "";
    let emailError = "";
    let ratingError = "";
    let userError = "";
    if (!rating) {
      ratingError = 'Please enter a rating';
    }

    if (reviewBody.length < 50 || reviewBody.length > 1000) {
      reviewBodyError = 'Review should be between 50 and 1000 characters long';
    }

    if (!email.includes('@')) {
      emailError = 'Please enter a valid email address';
    }

    if (!userName) {
      userError = 'Please enter a valid username';
    }

    if (emailError || reviewBodyError || ratingError || userError) {
      setRatingError(ratingError);
      setReviewBodyError(reviewBodyError);
      setEmailError(emailError);
      setUserError(userError);
      return false;
    }
    return true;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      clearErrors();
      let defaultArr = [];
      if (selectedFile !== null) {
        defaultArr = [selectedFile, ...selectedFiles]
      }

      let reviewPost = {
        "product_id": Number(productId),
        "rating": Number(rating),
        "summary": headline,
        "body": reviewBody,
        "recommend": recommended,
        "name": userName,
        "email": email,
        "photos": defaultArr,
        "characteristics": characteristics,
      }
      console.log(reviewPost);
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
      resetForm();
      console.log('Valid review')
    } else {
      console.log('Invalid review')
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