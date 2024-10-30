const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
let isFirstNameValid = false;
let isLastNameValid = false;
let isEmailValid = false;
let isPasswordValid = false;

function checkInput() {
  const firstName = firstNameInput.value;
  const firstNameRegex = /[^A-Za-z0-9]/;
  if(!/\s/.test(firstName) && !firstNameRegex.test(firstName) && !/\d/.test(firstName) && firstName.length < 27) {
    //input good
  } else {
    //first name error
  }

  const lastName = lastNameInput.value;
  const lastNameRegex = /[^A-Za-z0-9]/;
  if(!/\s/.test(lastName) && !lastNameRegex.test(lastName) && !/\d/.test(lastName) && lastName.length < 27) {
    //input good
  } else {
    // last name error
  }

  const email = emailInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(emailRegex.test(email)) {
    //input good
    alert("good email");
  } else {
    // email error
    alert("not email");
  }

  const password = passwordInput.value;
  if(password.length < 41) {
    //input good
  } else {
    //pass error
  }

}