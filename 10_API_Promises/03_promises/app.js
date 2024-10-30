// let aFostPizzaLivrata = Math.random() < 0.5 ? true : false;

// function comandaPizza() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (aFostPizzaLivrata) {
//         resolve("Pizza a fost livrata");
//       } else {
//         reject("Pizza nu a fost livrata");
//       }
//     }, 2000); // moved this parenthesis
//   });
// }

// comandaPizza().then((result) => console.log(result));

const container = document.querySelector(`.container`);
fetch("https://api.github.com/users").then((response) =>
  response.json().then(
    (users) =>
      (container.innerHTML = users.map(
        (user) =>
          `
        <div class = "card">
        <h3> ${user.login} </h3>
        <img src=${user.avatar_url} />
        </div>        `
      ))
  )
);
