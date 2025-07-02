console.log('it works');

// function doctorize(name) {
//   return `Dr. ${name}`;
// }

// Anonymous function
// function (name) {
//   return `Dr. ${name}`;
// }

// function expression

// const doctorize = function (name) {
//   return `Dr. ${name}`;
// };

// ARROW FUNCTION
// const inchToCM = function (inches) {
//   const cm = inches * 2.54;
//   return cm;
// };

// const inchToCM = (inches) => {
//   const cm = inches * 2.54;
//   return cm;
// };

// const inchToCM = (inches) => inches * 2.54;

// const add = (a, b = 3) => a + b;

// Returning an object
// function makeBaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }

// const makeABaby = (first, last) => ({
//   name: `${first} ${last}`,
//   age: 0,
// });

// IIFE
// Immediately Invoked function expression
// (function () {
//   console.log('Running the anon function');
//   return 'you are cool';
// })();

// Methods
const kea = {
  name: 'Kea Alexander',
  sayHi() {
    console.log('Hey Kea');
    return 'Hey Wes';
  },

  // shorthand
  yellHi() {
    console.log('HEY KEAAAA');
  },

  // Arrow function
  whisperHi: () => {
    console.log('hiii im whisperimg');
  },
};

// callback functions
const button = document.querySelector('.click');
button.addEventListener('click', kea.yellHi);

// timer callback
setTimeout(kea.yellHi, 3333);
