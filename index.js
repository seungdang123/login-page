const emailInput = document.querySelector(".email--input");
const emailLabel = document.querySelector(".email--label");
const passwordInput = document.querySelector(".password--input");
const passwordLabel = document.querySelector(".password--label");
const loginButton = document.querySelector(".login--button");

let email = "";
let password = "";

const ButtonOn = () => {
  if (email != "" && password != "") {
    loginButton.classList.add("login--button--on");
  } else {
    loginButton.classList.remove("login--button--on");
  }
};

emailInput.onfocus = () => {
  console.log("Focus");
  emailLabel.classList.remove("label--on--finished");
  emailLabel.classList.add("label--on");
  emailInput.placeholder = "";
};

emailInput.onblur = () => {
  if (emailInput.value == "") {
    emailLabel.classList.remove("label--on");
    emailInput.placeholder = "이메일";
  } else if (emailInput.value != "") {
    emailLabel.classList.replace("label--on", "label--on--finished");
  }
};

passwordInput.onfocus = () => {
  console.log("Focus");
  passwordLabel.classList.remove("label--on--finished");
  passwordLabel.classList.add("label--on");
  passwordInput.placeholder = "";
};

passwordInput.onblur = () => {
  if (passwordInput.value == "") {
    passwordLabel.classList.remove("label--on");
    passwordInput.placeholder = "비밀번호";
  } else if (passwordInput.value != "") {
    passwordLabel.classList.replace("label--on", "label--on--finished");
  }
};

emailInput.onkeyup = () => {
  email = emailInput.value;
  ButtonOn();
};

passwordInput.onkeyup = () => {
  password = passwordInput.value;
  ButtonOn();
};
