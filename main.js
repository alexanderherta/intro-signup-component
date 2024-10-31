const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const firstNameError = document.querySelector("#first-name-error");
const lastNameError = document.querySelector("#last-name-error");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");

let isFirstNameValid = false;
let isLastNameValid = false;
let isEmailValid = false;
let isPasswordValid = false;

function checkInput() {
  const firstName = firstNameInput.value;
  const firstNameRegex = /[^A-Za-z0-9]/;
  if(!/\s/.test(firstName) && !firstNameRegex.test(firstName) && !/\d/.test(firstName) && firstName.length < 27) {
    isFirstNameValid = true;
    firstNameError.innerText = "";
    firstNameInput.style.borderColor = "rgba(0, 0, 0, 0.25)";
    document.documentElement.style.setProperty("--error-icon-first", "none");
  } else {
    firstNameError.innerText = "First name cannot be empty, contain spaces, or contain numbers.";
    firstNameInput.style.borderColor = "red";
    document.documentElement.style.setProperty("--error-icon-first", "block");
  }

  const lastName = lastNameInput.value;
  const lastNameRegex = /[^A-Za-z0-9]/;
  if(!/\s/.test(lastName) && !lastNameRegex.test(lastName) && !/\d/.test(lastName) && lastName.length < 27) {
    isLastNameValid = true;
    lastNameError.innerText = "";
    lastNameInput.style.borderColor = "rgba(0, 0, 0, 0.25)";
    document.documentElement.style.setProperty("--error-icon-last", "none");
  } else {
    lastNameError.innerText = "Last name cannot be empty, contain spaces, or contain numbers.";
    lastNameInput.style.borderColor = "red";
    document.documentElement.style.setProperty("--error-icon-last", "block");
  }

  const email = emailInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(emailRegex.test(email)) {
    isEmailValid = true;
    emailError.innerText = "";
    emailInput.style.borderColor = "rgba(0, 0, 0, 0.25)";
    document.documentElement.style.setProperty("--error-icon-email", "none");
  } else {
    emailError.innerText = "Looks like this is not an email.";
    emailInput.style.borderColor = "red";
    document.documentElement.style.setProperty("--error-icon-email", "block");
  }

  const password = passwordInput.value;
  if(!/\s/.test(password) && password.length < 41) {
    isPasswordValid = true;
    passwordError.innerText = "";
    passwordInput.style.borderColor = "rgba(0, 0, 0, 0.25)";
    document.documentElement.style.setProperty("--error-icon-password", "none");
  } else {
    passwordError.innerText = "Password cannot be too long or contain spaces.";
    passwordInput.style.borderColor = "red";
    document.documentElement.style.setProperty("--error-icon-password", "block");
  }

  if(isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid) {
    displayThankYou();
  }
}

function displayThankYou() {
  alert("vaild input!");
}