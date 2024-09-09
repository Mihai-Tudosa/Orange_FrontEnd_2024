var persoana = {
  nume: "Maria",
  varsta: 30,
  arePermisDeConducere: false,
};

// console.log("🚀 ~ persoana:", persoana.nume);

var masina = {
  motor: "1.4 TDI",
  greutateKg: 3500,
  culoare: "galben",
};

var laptop = {
  digonala: "15 inch",
  cpu: "ryzen 5600x",
  gpu: "nvidia geforce rtx 3080",
};

console.log(laptop.digonala, laptop.cpu, laptop.gpu);

// input type="text" id = "number"

var input = {
  type: "text",
  id: "numar",
  value: 20,
};

//Array-uri -

var numere = [3, 5, 6, 2, 1, 10];

console.log("Lungimea array-ului este", numere.length);
console.log("Ultimul element al array-ului este: ", numere[numere.length - 1]);

// construiti un array de fructe sau un array de marci de masini sau un array de zile ale saptamanii

var masini = ["BMW", "HONDA", "VOLVO"];
console.log(masini);

var fructe = [
  "mar",
  "portocala",
  "rodie",
  "banana",
  "piersica",
  "strugure",
  "nectarina",
];
console.log(fructe);

// Metode manipulare array-uri

//1. push - adaugam un element la sf unui array

fructe.push("cireașă");
console.log(fructe[fructe.length - 1]);

//2. pop - elimina ultimul element din lista si il returneaza
var ultimaMasinaDinLista = masini.pop();
console.log(masini);

//3. unshift - adauga un element la inceputul unui array
fructe.unshift("Capșună");
console.log("primul element este acum", fructe[0]);

//4. shift - elimina primul element din lista si il returneaza

var primaMasinaDinLista = masini.shift();
console.log(primaMasinaDinLista);
console.log(masini);

//5. join - combina elementele dintr-un array intr-un stirng folosind ca un separator

var stringFructe = fructe.join(" și ");
console.log("🚀 ~ stringFructe:", stringFructe);

// String-uri - siruri de caractere
var nume = "Ana";
var fructeleAnei = "mere";
var text = `${nume} are ${fructeleAnei}`;

console.log("🚀 ~ text:", text);

console.log(text[0]); //A
console.log(text[text.length - 1]); //e

// CharAt
console.log(text.charAt(0)); //a

//includes - verifica daca un string contine o secv de caractere

console.log(text.includes("mere"));
console.log(text.includes("pere"));

//startsWith
console.log(text.startsWith("A"));

//endsWith
console.log(text.endsWith("mere"));

//substring
console.log(`substring`);
var numeExtras = text.substring(0, 3);
console.log("🚀 ~ numeExtras:", numeExtras);
