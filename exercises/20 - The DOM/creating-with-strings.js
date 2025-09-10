console.log('Does this work');
const item = document.querySelector('.item');
const width = 500;
// const src = `https://picsum.photos/200/`;
// const desc = `Cute Pup`;
// const html = `
// <div class="wrapper">
//     <h2>${desc}</h2>
//     <img src="${src}" alt="random pictures" />
// </div> `;

// item.innerHTML = html;

// const itemImage = document.querySelector('.wrapper img');
// itemImage.classList.add('round');

// console.log(item.innerHTML);

// Turn a string into a dom element

const addHTMLButton = document.querySelector('button.button');
function createHTML() {
  console.log('button clicked');
  const src = `https://picsum.photos/200/`;
  const desc = `Cute Pup`;
  const html = `
        <div class="wrapper">
            <h2>${desc}</h2>
            <img src="${src}" alt="random pictures" />
        </div> `;

  const myFragment = document.createRange().createContextualFragment(html);
  return document.body.appendChild(myFragment);
}

addHTMLButton.addEventListener('click', createHTML);

// console.log(addHTMLButton.addEventListener('click', createHTML));
