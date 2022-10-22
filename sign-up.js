const url = 'https://634c3a82acb391d34a818933.mockapi.io';

async function getMockApi(url) {
  const response = await fetch(url);

  const result = response.json();

  return result;
}

async function postMockApi(url, payload) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(payload)
  });

  const result = response.json();

  return result;
}

document.getElementById('FormSignUp').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username && password) {
    getMockApi(`${url}/user`).then(function(users) {
      console.log('users', users);
      const isUserExists = users.find(function(user) {
        return user.username === username
      });
      console.log('isUserExists', isUserExists);

      if (isUserExists) {
        alert('username sudah dipakai');
      } else {
        postMockApi(`${url}/user`, {
          email,
          username,
          password,
        })
          .then((result) => {
            document.getElementById('email').value = '';
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
    
            window.location = 'sign-in.html';
          })
      }
    });
  }
});