const url = "https://634c3a82acb391d34a818933.mockapi.io";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

async function getMockApi(url) {
  const response = await fetch(url);
  const result = response.json();

  return result;
}

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

getMockApi(`${url}/artikel/${id}`).then(function (result) {
  const judul = document.getElementById("title");
  const content = document.getElementById("content");
  const images = document.getElementById("img");

  judul.innerHTML = `${result.title}`;
  content.innerHTML = `${result.content}`;
  images.src = result.images;
});
