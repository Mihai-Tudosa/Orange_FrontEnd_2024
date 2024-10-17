// const produse = [
//   { nume: "Pâine integrală", pret: 5 },
//   { nume: "Lapte", pret: 6 },
//   { nume: "Ouă (carton 10 buc)", pret: 10 },
//   { nume: "Mere", pret: 4 },
//   { nume: "Carne de pui (500g)", pret: 15 },
//   { nume: "Paste integrale", pret: 7 },
//   { nume: "Orez integral", pret: 6 },
//   { nume: "Iaurt natural", pret: 4 },
//   { nume: "Cartofi (kg)", pret: 3 },
//   { nume: "Brânză telemea", pret: 12 },
// ];

// console.log(
//   produse
//     .map(
//       (produs) => `
//    <div class="card">
//       <h1>${produs.nume}</h1>
//       <p>${produs.pret}</p>
//    </div>
//    `
//     )
//     .join("")
// );

// document.getElementById("container").innerHTML = produse
//   .map(
//     (produs) => `
//    <div class="card">
//       <h1>${produs.nume}</h1>
//       <p>${produs.pret}</p>
//    </div>
//    `
//   )
//   .join("");

// const fructe = ["mere", "pere", "struguri", "prune", "piersici"];

// fructe.sort();
// console.log(fructe);

// const numere = [1, 12, 15, 2, 8, 9];
// numere.sort((a, b) => a - b);
// console.log(numere);

// const text = `JavaScript is a high-level programming language that follows the ECMAScript standard. It was originally designed as a scripting language for websites but became widely adopted as a general-purpose programming language, and is currently the most popular programming language in use.[1] JavaScript is usually found running in a web browser as interactive or automated content, ranging from popup messages and live clocks to large web applications. JavaScript is also commonly used in server-side programming through platforms like Node.js,[2] or "embedded" in non-JavaScript applications where the base programming language lacks the high-level functionality that JavaScript offers.`;

// const cuvinte = text.split(` `);

// console.log(cuvinte);
// cuvinte.sort((a, b) => a.length - b.length);

// console.log(cuvinte);

// const numere2 = [2, 3, 8, 9, 7, 1, 4, 6, 5];
// numere2.sort((a, b) => a - b);

// console.log(numere2);

// numere2.sort((a, b) => Math.random() - Math.random());
// console.log(numere2);

const produse = [
  {
    nume: "Pâine integrală",
    pret: 5,
    dataAdaugarii: new Date(`2024-02-15T14:20:00`),
  },
  {
    nume: "Lapte (2L)",
    pret: 6,
    dataAdaugarii: new Date(`2024-03-10T09:45:00`),
  },
  {
    nume: "Ouă (carton 10 buc)",
    pret: 10,
    dataAdaugarii: new Date(`2024-01-25T11:30:00`),
  },
  {
    nume: "Mere (6kg)",
    pret: 4,
    dataAdaugarii: new Date(`2024-04-05T08:15:00`),
  },
  {
    nume: "Carne de pui (500g)",
    pret: 15,
    dataAdaugarii: new Date(`2024-02-20T16:00:00`),
  },
  {
    nume: "Paste integrale",
    pret: 7,
    dataAdaugarii: new Date(`2024-03-30T13:10:00`),
  },
  {
    nume: "Orez integral",
    pret: 6,
    dataAdaugarii: new Date(`2024-01-10T10:00:00`),
  },
  {
    nume: "Iaurt natural",
    pret: 6,
    dataAdaugarii: new Date(`2024-02-05T12:25:00`),
  },
  {
    nume: "Cartofi (kg)",
    pret: 3,
    dataAdaugarii: new Date(`2024-04-15T07:50:00`),
  },
  {
    nume: "Brânză telemea",
    pret: 12,
    dataAdaugarii: new Date(`2024-03-05T15:35:00`),
  },
];

// produse.sort((produs1, produs2) => produs1.pret - produs2.pret);
// console.log(produse);

// produse.sort((produs1, produs2) => produs1.nume.localeCompare(produs2.nume));

console.log(
  produse
    .map(
      (produs) => `
   <div class="card">
      <h1>${produs.nume}</h1>
      <p>${produs.pret}</p>
   </div>
   `
    )
    .join("")
);

document.getElementById("container").innerHTML = produse
  .map(
    (produs) => `
   <div class="card">
      <h1>${produs.nume}</h1>
      <p>${produs.pret}</p>
   </div>
   `
  )
  .join("");

const sortOptionsDropDown = document.getElementById(`sort-options`);
sortOptionsDropDown.addEventListener(`change`, sortProducts);

function sortProducts(e) {
  const sortOption = e.target.value;
  let sortedProducts = [...produse];
  if (sortOption === "noi") {
    sortedProducts.sort(
      (produs1, produs2) => produs2.dataAdaugarii - produs1.dataAdaugarii
    );
  }

  if (sortOption === `priceAsc`) {
    sortedProducts.sort((product1, product2) =>
      product1.pret === product2.pret
        ? product1.nume.localeCompare(product2.nume)
        : product1.pret - product2.pret
    );
  } else if (sortOption === `priceDesc`) {
    sortedProducts.sort((product1, product2) =>
      product1.pret === product2.pret
        ? product1.nume.localeCompare(product2.nume)
        : product2.pret - product1.pret
    );
  } else if (sortOption === `nameAsc`) {
    sortedProducts.sort((product1, product2) =>
      product1.nume.localeCompare(product2.nume)
    );
  } else if (sortOption === `nameDesc`) {
    sortedProducts.sort((product1, product2) =>
      product2.nume.localeCompare(product1.nume)
    );
  }

  document.getElementById("container").innerHTML = sortedProducts
    .map(
      (produs) => `
   <div class="card">
      <h1>${produs.nume}</h1>
      <p>${produs.pret}</p>
   </div>
   `
    )
    .join("");
}

//nume pret detalii si imagine
