const emailInput = document.querySelector(".email--input");
const passwordInput = document.querySelector(".pw--input");

const loginButton = document.querySelector(".login--button");

const emailLabel = document.querySelector(".label--email");
const passwordLabel = document.querySelector(".label--password");

const body = document.getElementsByTagName("body");

const EmailClick = () => {
  if (emailInput.value == "") {
    if (emailLabel.classList.contains("label--on--finished")) {
      emailLabel.classList.remove("label--on--finished");
    }

    if (emailInput.placeholder == "") {
      emailLabel.classList.remove("label--on");
    }
    emailLabel.classList.add("label--on");
    emailInput.placeholder = "";
  }
};

const PasswordClick = () => {
  if (passwordInput.value == "") {
    if (passwordLabel.classList.contains("label--on--finished")) {
      passwordLabel.classList.remove("label--on--finished");
    }
    passwordLabel.classList.add("label--on");
    passwordInput.placeholder = "";
  }
};

emailInput.addEventListener("click", EmailClick);
passwordInput.addEventListener("click", PasswordClick);

const checkForm = () => {
  if (emailInput.value != "" && passwordInput.value != "") {
    loginButton.classList.add("login--button--on");
  }

  if (emailInput.value != "") {
    emailLabel.classList.replace("label--on", "label--on--finished");
  }

  if (passwordInput.value != "") {
    passwordLabel.classList.replace("label--on", "label--on--finished");
  }

  if (emailInput.value == "") {
    emailLabel.classList.remove("label--on--finished");
    emailInput.placeholder = "이메일";
    loginButton.classList.remove("login--button--on");
  }

  if (passwordInput.value == "") {
    passwordLabel.classList.remove("label--on--finished");
    passwordInput.placeholder = "비밀번호";
    loginButton.classList.remove("login--button--on");
  }
};

emailInput.addEventListener("change", checkForm);
passwordInput.addEventListener("change", checkForm);
