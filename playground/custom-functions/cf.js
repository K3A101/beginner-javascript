function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

const myTotal = calculateBill(334, 0.21);
const myTotal2 = calculateBill(334 + 45 + 5, 0.21);
// console.log(`Your total is $${Math.round(myTotal2)},00`);

function sayHiTo(firstName) {
  return `Hello to ${firstName}`;
}

const person = sayHiTo('Keisha');
// console.log(person);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = 'THIS IS CRAZY') {
  return `HEY ${name.toUpperCase()}`;
}
