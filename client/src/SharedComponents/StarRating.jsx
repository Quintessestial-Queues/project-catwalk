import React, { useState, useEffect } from 'react';
import EmptyStar from "../../../assets/empty-star.svg";
import FilledStar from "../../../assets/filled-star.svg";


const StarRating = ({
  starRating
}) => {

  const [starState, setStarState] = useState([ ]);

  useEffect(() => {
    // Update  star rating from passed in props
    setRating(starRating)
  }, []);


  const setRating = () => {
    const rating = starRating;

    const emptyStars = 5 - rating;
    const emptyArray = new Array(emptyStars); // will make an array of empty stars
    emptyArray.fill("empty"); // fill the array with empty values

    // build new array with filled stars
    const newState = [];
    for (let i = 0; i < rating; i++) {
      // add a filled star to new array
      newState.unshift("filled");
    }

    setStarState(newState.concat(emptyArray)); // joins both newly created empty and filled arrays
  };


  return (
    <div>
      <h1>5 star rating system</h1>
      {starState.map((star, index) => {
        return star === "empty" ? (
          <img
            // adds a clasName to get html
            className="star"
            src={EmptyStar}
            alt="empty star"
            key={index}
          />
        ) : (
          <img
            src={FilledStar}
            alt="empty star"
            key={index}
          />
        );
      })}

    </div>
  );
};


export default StarRating;