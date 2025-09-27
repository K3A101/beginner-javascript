const button = document.querySelector('.button');
const otherButton = document.querySelector('.cool');
function handleClick() {
  console.log('It got clicked');
}
button.addEventListener('click', handleClick);
// otherButton.addEventListener('click', handleClick);

// button.removeEventListener('click', handleClick);

const hooray = () => console.log('HOORAY');
otherButton.addEventListener('click', hooray);

// Listen on multiple items
// select all of them
const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) {
  // console.log('You are buying it!');
  // console.log(parseFloat(event.target.dataset.price));
  console.log('You clicked a button!');
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
  // stop this event from bubbling up
  // event.stopPropagation();
}

buyButtons.forEach((buyButton) => {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
  'click',
  (event) => {
    console.log('You clicked the window!');
    console.log(event.target);
    console.log(event.type);
    console.log(event.bubbles);
  },
  { capture: true },
);

const photoEl = document.querySelector('.photo');
// photoEl.addEventListener('mousemove', (e) => {
//   console.log(e.currentTarget);
// });

photoEl.addEventListener('mouseenter', (e) => {
  console.log(e.currentTarget);
  console.log(this);
});
