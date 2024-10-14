// REDUCE LA O VALOARE

const numere = [1, 2, 5, 6, 7];

// let suma = 0;
// for (let i = 0; i <= numere.length - 1; i++) {
//   suma += numere[i];
// }

const suma = numere.reduce((accumulator, numar) => accumulator + numar, 0);

console.log(suma);

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

const pretTotal = produse.reduce(
  (accumulator, produs) => accumulator + produs.pret,
  0
);

console.log(pretTotal);

const produseInCos = [
  {
    nume: "Mere",
    pret: 3.5,
    categorie: "Fructe",
    cantitate: 10,
  },
  {
    nume: "Pâine",
    pret: 2.0,
    categorie: "Panificație",
    cantitate: 2,
  },
  {
    nume: "Lapte",
    pret: 4.5,
    categorie: "Lactate",
    cantitate: 1,
  },
  {
    nume: "Ouă",
    pret: 6.0,
    categorie: "Lactate",
    cantitate: 12,
  },
  {
    nume: "Ciocolată",
    pret: 5.0,
    categorie: "Dulciuri",
    cantitate: 3,
  },
];

const voucher = 10;

const pretTotal2 = produseInCos.reduce(
  (total, produs) => total + produs.pret * produs.cantitate,
  -voucher
);

console.log(pretTotal2);
