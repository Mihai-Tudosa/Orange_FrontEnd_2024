//slice returnează o porțiune dintr-un array fără a modifica array-ul orgiinal

const fructe = ["mere", "pere", "struguri", "prune", "piersici"];
const sliced = fructe.slice(1, 3);
console.log(`sliced:`, sliced);

const sliced2 = fructe.slice(2);
console.log(sliced2);

const CNP = `1990115161616`;
const year = CNP.substring(1, 3);
console.log(year);

//splice - modifica arrayuyl original prin adaugarea sau eliminarea unor elemente

const persoane = ["Costel", "Daniel", "Mihaela", "Tudor", "Andreea"];

const copie = [...persoane];

//incepand cu indexul 2 se sterg 2 elemente
persoane.splice(2, 2);

// incepand cu indexul 2 nu se sterge nimic si se adauga `Cristi` și `Marian`
persoane.splice(2, 0, `Cristi`, `Marian`);

// incepand cu indexul 2, se sterg 2 elemente si se adauga cristi si marian

persoane.splice(2, 2, `Bogdan`, `Vasile`);

console.log(persoane);

console.log(copie);

const s = "Ana are mere";
