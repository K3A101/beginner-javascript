// const pElement = document.querySelector('p');

// const heading = document.querySelector('h2');
// heading.textContent = 'Yikes on Bikes';
// heading.innerText = 'Yikes on Bikes';
// // console.dir(heading);

// const pizzaList = document.querySelector('.pizza');
// pizzaList.insertAdjacentText('beforeend', '🍕');

// console.log(heading);

// classes
const pic = document.querySelector('.nice');
pic.classList.add('cool');
console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

// Attributes
pic.alt = 'Car in to the snow';
pic.width = 200;

const custom = document.querySelector('.custom');
console.log(custom.dataset);
