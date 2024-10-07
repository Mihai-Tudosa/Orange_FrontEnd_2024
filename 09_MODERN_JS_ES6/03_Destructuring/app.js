const fructe = [
  `mar`,
  `para`,
  `lamaie`,
  `capsuna`,
  `cireasa`,
  `visina`,
  `caisa`,
];
// const primulFruct = fructe[0];
// const alDoileaFruct = fructe[1];

// const [primulFruct, alDoileaFruct] = fructe;

// console.log(primulFruct, alDoileaFruct);

//ft important cele doua virgule pentru sarit al doilea
// const [primulFruct, , alTreileaFruct] = fructe;
// console.log(primulFruct, alTreileaFruct);

// const [primulFruct, alDoileaFruct, ...restulDeFructe] = fructe;
// console.log("🚀 ~ primulFruct:", primulFruct);
// console.log("🚀 ~ alDoileaFruct:", alDoileaFruct);
// console.log("🚀 ~ restulDeFructe:", restulDeFructe);
// console.log("🚀 ~ fructe:", fructe);

//Destructuring Objects

const produs = {
  nume: `Bere Ursus`,
  pret: 5,
  urlImagine: `https://auchan.vtexassets.com/arquivos/ids/252747/bere-blonda-fara-alcool-ursus-0-33l-sgr.jpg?v=638404773161730000`,
};

// const nume = produs.nume;
// const pret = produs.pret;
// const urlImagine = produs.urlImagine;

// const creareCardProdus = (produs) => {
//   const { nume, pret, urlImagine } = produs;
//   return `
//   <div class="card">
//   <h1>${nume}</h1>
//   <img src=${urlImagine} />
//   <p>${pret}</p>
//   </div>`;
// };

const creareCardProdus = ({ nume, pret, urlImagine }) =>
  `
  <div class="card">
  <h1>${nume}</h1>
  <img src=${urlImagine} />
  <p>${pret}</p>
  </div>
  `;

document.getElementById("container").innerHTML = creareCardProdus(produs);
