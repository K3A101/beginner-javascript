const p = document.querySelector('p');
const button = document.querySelector('.go-to-top-button');

button.addEventListener('click', goToTop);
button.addEventListener('keydown', goToTop);
button.addEventListener('mouseenter', goToTop);
// window.addEventListener('scroll', goToTop);

function goToTop() {
  const startPosition = { top: 0, left: 0, behavior: 'smooth' }; // add a starting point

  if (startPosition.top > 0) {
    window.scrollTo({ top: 500, left: 0, behavior: 'smooth' });
  } else {
    window.scrollTo(startPosition);
  }
}
