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
  if (regex.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not Valid');
  }
}
/* Show Success Message */
function showSuccess(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add('success');
}
/* Requirement Checking */
function checkRequirement(inputArray) {
  inputArray.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}
/* Checking MatchPasswords */
function checkPassword(input1, input2) {
  if (input1.value !== input.value) {
    showError(input2, 'password do not match');
  }
}
/* Get FieldName */
function getFieldName(input) {
  /* Making the field captalized */
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
/* Check Input Lenght */
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }

}

/* Event Listeners */
function submit(event) {
  event.preventDefault();
  checkRequirement([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPassword(password, password2);
}
form.addEventListener('submit', submit);