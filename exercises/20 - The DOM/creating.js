console.log('It works');

const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.setAttribute(
  'src',
  'https://plus.unsplash.com/premium_photo-1754781493808-e575e4474ee9?q=80&w=1705&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
);
myImage.alt = 'Nice photo';
const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

const heading = document.createElement('h2');
heading.textContent = 'Cool things';

myDiv.insertAdjacentElement('afterbegin', heading);

// create an ul with 5 list item
// const ulEl = document.createElement('ul');
// ulEl.classList.add('onordered-list');

// const firstLi = document.createElement('li');
// firstLi.textContent = 'One';

// const secondLi = document.createElement('li');
// secondLi.textContent = 'Two';

// const thirdLi = document.createElement('li');
// thirdLi.textContent = 'Three';

// const forthLi = document.createElement('li');
// forthLi.textContent = 'Four';

// const fifthLi = document.createElement('li');
// fifthLi.textContent = 'Five';

// ulEl.insertAdjacentElement('afterbegin', firstLi);
// firstLi.insertAdjacentElement('afterend', secondLi);
// secondLi.insertAdjacentElement('afterend', thirdLi);
// thirdLi.insertAdjacentElement('afterend', forthLi);
// forthLi.insertAdjacentElement('afterend', fifthLi);

const ulEl = document.createElement('ul');
ulEl.classList.add('onordered-list');

const li = document.createElement('li');

const firstLi = li.cloneNode();
firstLi.textContent = 'One';

const secondLi = li.cloneNode();
secondLi.textContent = 'Two';

const thirdLi = li.cloneNode();
thirdLi.textContent = 'Three';

const forthLi = li.cloneNode();
forthLi.textContent = 'Four';

const fifthLi = li.cloneNode();
fifthLi.textContent = 'Five';

ulEl.insertAdjacentElement('afterbegin', firstLi);
firstLi.insertAdjacentElement('afterend', secondLi);
secondLi.insertAdjacentElement('afterend', thirdLi);
thirdLi.insertAdjacentElement('afterend', forthLi);
forthLi.insertAdjacentElement('afterend', fifthLi);

myDiv.appendChild(ulEl);
