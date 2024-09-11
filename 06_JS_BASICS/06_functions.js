//functie = co pe care vreau să îl refolosesc

// funcție fără parametri

function prajitorDePaine() {
  console.log("Pâinea se va prăji...");
}

prajitorDePaine();

function sayHello() {
  console.log(`Hello World!`);
}

sayHello();

//funcție cu parametrii

function sayHelloTo(name) {
  console.log(`Hello, ${name}!`);
}

sayHelloTo(`Cornel`);
sayHelloTo(`Daniel`);
sayHelloTo(`Maria`);

//functie care returnează o valuoare

function add(a, b) {
  return a + b;
}

const sum1 = add(2, 5);
const sum2 = add(3, 8);

console.log(sum1, sum2);

//scrieti o functie care primeste un numar ca parametru si intoarce true daca este par si false daca este impar

function isEven(number) {
  return number % 2 === 0;
}

isEven(4);

function isOdd(number) {
  return number % 2 === 1;
}

console.log(isEven(2), isOdd(2));
