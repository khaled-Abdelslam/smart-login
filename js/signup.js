var nameInput = document.getElementById("Name");
var emailInput = document.getElementById("signupEmail");
var passwordInput = document.getElementById("signupPassword");

var signUp = document.querySelector("button");

var users = [];

if (localStorage.getItem("localusers") !== null) {
  users = JSON.parse(localStorage.getItem("localusers"));
}

signUp.addEventListener("click", function () {
  addUser();
});

function addUser() {
  if ((nameInput.value && emailInput.value && passwordInput.value) != "") {
    var user = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };

    function isExist() {
      for (var i = 0; i < users.length; i++) {
        if (users[i].email === emailInput.value) {
          return true;
        }
      }
    }

    if (isExist()) {
      document.getElementById("exist").classList.remove("d-none");
    } else {
      users.push(user);

      localStorage.setItem("localusers", JSON.stringify(users));

      clearInputs();

      document.getElementById("sucess").classList.remove("d-none");
      document.getElementById("exist").classList.add("d-none");
      document.getElementById("alert").classList.add("d-none");
    }
  } else {
    document.getElementById("alert").classList.remove("d-none");
    document.getElementById("sucess").classList.add("d-none");
  }
}

function clearInputs() {
  nameInput.value = null;
  emailInput.value = null;
  passwordInput.value = null;
}

document.querySelector("a").addEventListener("click", function () {
  window.location.href = 'index.html';
});
