const container = document.getElementById("container");
const url = "https://634c3a82acb391d34a818933.mockapi.io";

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

  window.location = "/page/sign-in.html";
});

const detail = function (e, id) {
  if (user_id_localStorage) {
    return window.location = `detail.html?id=${id}`;
  }
  return alert("Login Terlebih Dahulu")
}

getMockApi(`${url}/artikel`).then(function (result) {
  container.innerHTML = "";
  result.forEach(function (artikel) {
    container.innerHTML += `
    <div class="card-group">
        <div class="card">
          <div class="card-body">
            <img src="${artikel.images}" alt="" />
            <div class="card-content">
              <h4 class="card-text">${artikel.title}</h4>
              <button class="btn-read" id="btn-read">
              <a onclick="detail(this,${artikel.id})" id="text-read">Baca Artikel</a>
            </button>
            </div>
          </div>
        </div>
      </div>`;
  });
});
