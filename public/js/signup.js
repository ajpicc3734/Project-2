const signupFormHandler = async function (event) {
  event.preventDefault();

  const usernameEl = document.querySelector("#username-input-signup");
  const emailEL = document.querySelector("#email-input-signup");
  const passwordEl = document.querySelector("#password-input-signup");
  fetch("/api/users", {
    method: "post",
    body: JSON.stringify({
      username: usernameEl.value,
      email: emailEL.value,
      password: passwordEl.value
    }),
    headers: { "Content-Type": "application/json" }
  })
    .then(function () {
      document.location.replace("/");
    })
    .catch(err => console.log(err));
};

// const signupFormHandler = async (event) => {
//   event.preventDefault();

//   const username = document.querySelector('#username-input-signup').value.trim();
//   const email = document.querySelector('#email-input-signup').value.trim();
//   const password = document.querySelector('#password-input-signup').value.trim();

//   if (username && email && password) {
//     const response = await fetch('/api/user', {
//       method: 'POST',
//       body: JSON.stringify({ username, email, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert('Failed to sign up.');
//     }
//   }
// };

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);