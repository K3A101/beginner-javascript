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
console.log(buyButtons);

function buyItem() {
  console.log('Buying item');
}

buyButtons.forEach((buyButton) => {
  // console.log(buyButton);
  console.log('Binding the buy button!');
  buyButton.addEventListener('click', buyItem);
});

buyButtons.forEach((buyButton) => {
  console.log('Binding the buy button two!');
  buyButton.addEventListener('click', () => {
    console.log('It got clicked');
  });
});
