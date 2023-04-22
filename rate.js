const stars = document.querySelectorAll('.star');
const rating = document.getElementById('rating');

stars.forEach(star => star.addEventListener('click', () => {
  const selectedStar = parseInt(star.getAttribute('data-star'));
  rating.textContent = selectedStar;
  stars.forEach(star => {
    const starNum = parseInt(star.getAttribute('data-star'));
    if (starNum <= selectedStar) {
      star.classList.add('selected');
    } else {
      star.classList.remove('selected');
    }
  });
}));



