console.log('It works');

const wes = document.querySelector('.wes');
wes.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('You clicked a Link');
  const shouldChangePage = confirm(
    'This website might be delicious! Do you wish to proceed',
  );
  if (shouldChangePage) {
    window.location = event.currentTarget.href;
  }
  console.log(shouldChangePage);
});

const signupForm = document.querySelector('[name="signup"');
signupForm.addEventListener('submit', (event) => {
  const name = event.currentTarget.name.value;

  if (name.includes('chad')) {
    alert('sorry bro');
    event.preventDefault();
  }
});
function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}
// - keyup
// - keydown
// - focus
// - blur
signupForm.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent); // focus into a input
signupForm.name.addEventListener('blur', logEvent); // focus outside of an input

function handlePhotoClick(event) {
  if (event.type === 'click' || event.key === 'Enter') {
    console.log('photo has been clicked');
  }
}

const photo = document.querySelector('.photo');
photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keypress', handlePhotoClick);
