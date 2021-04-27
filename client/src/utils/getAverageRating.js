

export const getAverageRating = (reviews) => {
  if (reviews.length === 0) {
    return 0;
  }

  let sumOfRatings = reviews.reduce((accumulator, review, i) => {
    return accumulator + review.rating;
  }, 0);
  let averageOfRatings = sumOfRatings / reviews.length;
  return averageOfRatings;
}