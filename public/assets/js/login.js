const loginFormHandler = async function (event) {
    event.preventDefault();

    const usernameEl = document.querySelector("#username-input-login");
    const passwordEl = document.querySelector("#password-input-login");
    fetch("/api/users/login", {
        method: "post",
        body: JSON.stringify({
            username: usernameEl.value,
            password: passwordEl.value
        }),
        headers: { "Content-Type": "application/json" }
    })
        .then(function () {
            document.location.replace("/");
        })
        .catch(err => console.log(err));
};

// async function loginFormHandler(event) {
//   event.preventDefault();

//   const email = document.querySelector("#email-li").value.trim();
//   const password = document.querySelector("#password-li").value.trim();

//   if (email && password) {
//     const response = await fetch("/api/users/login", {
//       method: "post",
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       document.location.replace("/dashboard/");
//     } else {
//       alert(response.statusText);
//     }
//   }
// }

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
