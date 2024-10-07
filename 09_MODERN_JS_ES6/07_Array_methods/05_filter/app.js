const produse = [
  { nume: "Pâine", pret: 5 },
  { nume: "Lapte", pret: 4 },
  { nume: "Brânză", pret: 15 },
  { nume: "Iaurt", pret: 3 },
  { nume: "Ouă", pret: 10 },
  { nume: "Ulei", pret: 8 },
  { nume: "Carne de pui", pret: 20 },
  { nume: "Carne de porc", pret: 25 },
  { nume: "Roșii", pret: 6 },
  { nume: "Mere", pret: 7 },
];

const produseIntre5si8Lei = produse.filter(
  (produs) => produs.pret > 4 && produs.pret < 8
);

console.log("🚀 ~ produseIntre5si8Lei:", produseIntre5si8Lei);

console.log(produse);

document.getElementById(`container`).innerHTML = produse
  .map(
    (produs) => `
    <div class = "card">
        <h1>${produs.nume}</h1>
        <p>${produs.pret}</p>
    </div>
    `
  )
  .join(``);

document.getElementById(`filtru`).addEventListener(`change`, (e) => {
  if (e.target.checked === true) {
    document.getElementById(`container`).innerHTML = produse
      .filter((produs) => produs.pret >= 5 && produs.pret <= 7)
      .map(
        (produs) => `
    <div class = "card">
        <h1>${produs.nume}</h1>
        <p>${produs.pret}</p>
    </div>
    `
      )
      .join(``);
  } else {
    document.getElementById(`container`).innerHTML = produse
      .map(
        (produs) => `
    <div class = "card">
        <h1>${produs.nume}</h1>
        <p>${produs.pret}</p>
    </div>
    `
      )
      .join(``);
  }
});

//filtram intre 5 si 8

docume;
