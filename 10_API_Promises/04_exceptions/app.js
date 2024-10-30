const container = document.querySelector(`.container`);

fetch("https://api.github.com/userss")
  .then((response) => response.json())
  .then((users) => {
    container.innerHTML = users
      .map(
        (user) => `
          <div class="card">
            <h3>${user.login}</h3>
            <img src="${user.avatar_url}" alt="${user.login}'s avatar" />
          </div>
        `
      )
      .join("");
  })
  .catch((error) => {
    console.error("Error fetching users:", error);
  });

function platestePizza(aibani) {
  if (aibani) {
    console.log("Pizza a fost platita");
  } else {
    throw new Error(`Fonduri Insuficiente`);
  }
}

try {
  const aiBani = Math.random() < 0.5;
  platestePizza(aiBani);
} catch (error) {
  console.log(error);
}
