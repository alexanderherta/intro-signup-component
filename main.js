const inputArea = document.querySelector(".input-area");
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
  if(!/\s/.test(firstName) && !firstNameRegex.test(firstName) && !/\d/.test(firstName) && firstName.length < 27 && firstName != "") {
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
  if(!/\s/.test(lastName) && !lastNameRegex.test(lastName) && !/\d/.test(lastName) && lastName.length < 27 && lastName != "") {
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
  if(emailRegex.test(email) && email != "") {
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
  if(!/\s/.test(password) && password.length < 41 && password != "") {
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
  inputArea.innerHTML = "";
  const thankYouArea = document.createElement("div");
  inputArea.appendChild(thankYouArea);
  thankYouArea.style.height = "100%";
  thankYouArea.style.width = "100%";
  thankYouArea.style.border = "2px dashed black";
  thankYouArea.style.borderRadius = "10px";
  thankYouArea.style.padding = "25px";
  thankYouArea.style.display = "flex";
  thankYouArea.style.flexDirection = "column";
  thankYouArea.style.alignItems = "center";
  thankYouArea.innerHTML += `<img class="checkmark" src="./images/checkmark.png"></img>`;
  thankYouArea.innerHTML += `<h4 class="checkmark-heading">Thank You!</h4>`;
  thankYouArea.innerHTML += `<p class="checkmark-text">Your info has been submitted. Look out for our invite email!</p>`;
}