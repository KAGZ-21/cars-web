document.addEventListener('DOMContentLoaded', () => {
  const stars = document.querySelectorAll('#starRating span');
  const ratingValue = document.getElementById('ratingValue');
  const reviewList = document.querySelector('#reviewList ul');

  // Load saved reviews from localStorage
  const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
  savedReviews.forEach(addReviewToDOM);

  stars.forEach((star, index) => {
    star.addEventListener('mouseover', () => {
      highlightStars(index);
    });

    star.addEventListener('mouseout', () => {
      resetStars();
    });

    star.addEventListener('click', () => {
      ratingValue.value = index + 1;
      lockStars(index);
    });
  });

  function highlightStars(index) {
    stars.forEach((star, i) => {
      star.style.color = i <= index ? 'gold' : '#ddd';
    });
  }

  function resetStars() {
    stars.forEach((star, i) => {
      star.style.color = i < ratingValue.value ? 'gold' : '#ddd';
    });
  }

  function lockStars(index) {
    stars.forEach((star, i) => {
      star.classList.toggle('active', i <= index);
    });
  }

  document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const userName = document.getElementById('userName').value;
    const userReview = document.getElementById('userReview').value;
    const userRating = ratingValue.value;

    const reviewData = {
      name: userName,
      review: userReview,
      rating: userRating
    };

    savedReviews.push(reviewData);
    localStorage.setItem('reviews', JSON.stringify(savedReviews));

    addReviewToDOM(reviewData);

    document.getElementById('reviewForm').reset();
    resetStars();
    ratingValue.value = 0;
  });

  function addReviewToDOM(review) {
    const reviewItem = document.createElement('li');
    reviewItem.innerHTML = `
      <strong>${review.name}:</strong> ${review.review}
      <div class="review-rating">${'&#9733;'.repeat(review.rating)}${'&#9734;'.repeat(5 - review.rating)}</div>
    `;
    reviewList.appendChild(reviewItem);
  }
});
