const LogOut = document.getElementById("LogOut");
const LogIn = document.getElementById("LogIn");
const buttonLogOut = document.getElementById("buttonLogOut");
const buttonLogIn = document.getElementById("buttonLogIn");
const user = document.getElementById("user");

const user_id_localStorage = localStorage.getItem("user_id");

if (user_id_localStorage) {
  LogIn.style.display = "none";
  buttonLogIn.style.display = "none";
} else {
  LogOut.style.display = "none";
  buttonLogOut.style.display = "none";
}

buttonLogOut.addEventListener("click", function (e) {
  e.preventDefault();

  localStorage.removeItem("user_id");

  window.location = "sign-in.html";
});
