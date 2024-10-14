//split - imparte un string pe baza unui spearator

const s = `Ana are mere`;
const cuvinte = s.split(` `);

console.log(cuvinte);

//join - concatenează toate elementele dintr-un array într-un string utilizând un separator

console.log(cuvinte.join(` `));

///EXEMPLU

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

///////////////////////////
