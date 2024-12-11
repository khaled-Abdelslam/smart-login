document.querySelector('button').addEventListener('click' , function(){location = '../index.html'})



if (sessionStorage.getItem("sessionName") !== null) {
    username = sessionStorage.getItem("sessionName");
  }

document.querySelector("h1").innerHTML += username