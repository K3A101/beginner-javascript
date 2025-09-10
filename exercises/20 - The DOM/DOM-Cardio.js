// Make a div
const div = document.createElement('div');

// add a class of wrapper to it
div.classList.add('wrapper');

// put it into the body
document.body.appendChild(div);

// make an unordered list
const ul = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'one';
const li2 = li.cloneNode();
li2.textContent = 'two';
const li3 = li.cloneNode();
li3.textContent = 'three';

// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
ul.insertAdjacentElement('afterbegin', li);
li.insertAdjacentElement('afterend', li2);
li2.insertAdjacentElement('afterend', li3);

div.appendChild(ul);

// create an image
const image = document.createElement('img');

// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper
image.src = 'https://picsum.photos/200/';
image.width = 250;
image.classList.add('cute');
image.alt = 'Cute Puppy';

div.insertAdjacentElement('beforeend', image);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const html = `
<div>
    <p>This is the first sentence</p>
    <p>This is the second sentence</p>
</div>
`;

div.insertAdjacentHTML('afterbegin', html);

// add a class to the second paragraph called warning
// remove the first paragraph
const firstP = document.querySelector('.wrapper div').firstElementChild;
firstP.classList.add('warning');

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const card = `
   <div class="playerCard">
  <h2>${name} — ${age}</h2>
   <p>They are ${height}cm and ${age} years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
   <button>DELETE ME</button>
 </div>
`;
  const cardHtml = document.createRange().createContextualFragment(card);
  return cardHtml;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cardContainer = document.createElement('div');
cardContainer.classList.add('cards');

// make 4 player cards using generatePlayerCard
const playerOne = generatePlayerCard('Keisha', 24, 159);
const playerTwo = generatePlayerCard('Alexandra', 35, 178);
const playerThree = generatePlayerCard('Ani', 17, 155);

// append those cards to the div
cardContainer.appendChild(playerOne);
cardContainer.appendChild(playerTwo);
cardContainer.appendChild(playerThree);

// put the div into the DOM just before the wrapper element

div.insertAdjacentElement('afterbegin', cardContainer);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
