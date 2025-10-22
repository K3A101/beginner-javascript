// function scrollToAccept() {
//   const terms = document.querySelector('.terms-and-conditions');
//   if (!terms) {
//     return; // Quit this there isnt' that item on the page
//   }
//   terms.addEventListener('scroll', (event) => {
//     console.log(event);
//     console.log('It is scrolling');
//   });
// }

// scrollToAccept();

const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

// function obCallback(payload) {
//   if (payload[0].intersectionRatio) {
//     button.disabled = false;
//   } else {
//     button.disabled = true;
//   }
// }

function obCallback(payload) {
  if (payload[0].intersectionRatio) {
    button.disabled = false;
    ob.unobserve(terms.lastElementChild);
  }
}

const ob = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 0.1,
}); // second argument where you can specific add conditions when and what to fire

ob.observe(terms.lastElementChild);

// terms.addEventListener('scroll', (e) => {
//   console.log(e.currentTarget.scrollTop);
//   console.log('It is scrolling');
// });
