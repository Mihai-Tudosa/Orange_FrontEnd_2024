//putem sa extinedm un array sau un obiect in locuri in care sunt asteptate mai multe valori sau elemente din obiect

const numere = [1, 3, 4, 5];

//nu se face copie/clona, se face doar un alias
//const copie = numere;
//copie[0] = 18;
//console.log(numere);

const copie = [...numere];
copie[0] = 18;
console.log(numere, copie);

const fructe = ["mere", "pere", "struguri"];
const legume = ["morcovi", "cartofi", "ardei"];
const verdeturi = ["spanac", "salată", "pătrunjel"];

const cumparaturi = [...fructe, ...legume, ...verdeturi];
console.log(cumparaturi);

const produs = {
  nume: `Bere Ursus`,
  pret: 5,
  urlImagine: `https://auchan.vtexassets.com/arquivos/ids/252747/bere-blonda-fara-alcool-ursus-0-33l-sgr.jpg?v=638404773161730000`,
};

const copieProdus = { ...produs };
const produsCuStoc = { stoc: 50, ...produs, nume: `Bere Ursus 0.5L` };

console.log(produsCuStoc);

const persoana = { nume: `Ion`, varsta: 25 };
const job = { profesie: `Sofer`, salariu: 2500 };
const persoanaCuJob = { ...persoana, ...job };
console.log(persoanaCuJob);
