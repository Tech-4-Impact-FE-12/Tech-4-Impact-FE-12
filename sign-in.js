const url = "https://634c3a82acb391d34a818933.mockapi.io";

async function getMockApi(url) {
  const response = await fetch(url);

  const result = response.json();

  return result;
}

async function postMockApi(url, payload) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(payload),
  });

  const result = response.json();

  return result;
}

document.getElementById("FormSignIn").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    getMockApi(`${url}/user`).then(function (users) {
      const loggingUser = users.find(function (user) {
        return user.username === username;
      });

      if (loggingUser) {
        console.log("melakukan proses login.....");
        if (loggingUser.password === password) {
          console.log("login berhasil....");
          localStorage.setItem("user_id", loggingUser.id);
          window.location = "home.html";
        } else {
          alert("password salah!!!");
        }
      } else {
        alert("user tidak ditemukan.....");
      }
    });
  }
});
