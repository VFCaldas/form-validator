const form = document.querySelector('[data-form]');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

/* Show Error Message */
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add('error');
  const smallMessage = formControl.querySelector('small');
  smallMessage.innerText = message;
}
/* Checking email validation */
function checkEmail(email) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.text(String(email).toLocaleLowerCase());
}
/* Show Success Message */
function showSuccess(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add('success');
}

function submit(event) {
  event.preventDefault();
  if (username.value === '') {
    showError(username, 'Username Required')
  } else {
    showSuccess(username)
  }
  if (email.value === '') {
    showError(email, 'Email Required')
  } else if (checkEmail(!email.value)) {
    showError(email, 'Email is not valid');
  }
  else {
    showSuccess(email)
  }
  if (password.value === '') {
    showError(password, 'Password Required')
  } else {
    showSuccess(password)
  }
  if (password2.value === password) {
    showError(password2, 'Password not match')
  } else {
    showSuccess(password2)
  }
}



/* Event Listeners */
form.addEventListener('submit', submit);