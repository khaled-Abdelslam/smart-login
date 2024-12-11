var loginEmailInput = document.getElementById("loginEmail");
var loginPasswordInput = document.getElementById("loginPassword");

document.querySelector("button").addEventListener("click", function () {
  login();
});

if (localStorage.getItem("localusers") !== null) {
  users = JSON.parse(localStorage.getItem("localusers"));
}

var userName = "";

function login() {
  function member() {
    for (var i = 0; i < users.length; i++) {
      if (
        users[i].email === loginEmailInput.value &&
        users[i].password === loginPasswordInput.value
      ) {
        userName = users[i].name;
        return true;
      }
    }
  }

  if (member()) {
    document.getElementById("user").classList.add("d-none");
    location = "../home.html";
    sessionStorage.setItem("sessionName", userName);
  } else {
    document.getElementById("user").classList.remove("d-none");
  }
}

document.querySelector("a").addEventListener("click", function () {
  window.location = "../signup.html";
});
