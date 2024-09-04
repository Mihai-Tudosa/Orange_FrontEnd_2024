// var, let, const //

var nume = "Mihai";
var x = 500;

var a;
var b = 10;
console.log("🚀 ~ b:", b);

console.log(2 + 2 * x);
console.log(a + b);
console.log(a, "a");

console.log("a=", a);
console.log("b=", b);
console.log("x=", x);

// cCaractere permise - a-z, A-Z, _, $, 0-9

// camelCase:

var userName;
var numeUtilizator;
var numberOfLikes;
var postTitle;
var password;
var emailAddress;

// WILL NOT WORK//
// var 5buttons;
//
// var 1nume;
// var nume-Utilizator;
// var function;
// var if;
// var for;

// Variabile bune
var cantitateInventarProdus;
var distanțăPânăLaDestinație;

// Variabile greșite
// var 5Buttons;
// var cantitate-cumpărată;

// primitive

//sting

var nume = "Mihai";
var varsta = 25;
var mesaj = "Salut";
var text = `Numele meu este ${nume}`; //templateString
var text2 = "Numele meu este " + nume + " și am " + varsta + " de ani";

console.log(text);
console.log(text2);

//number

var intreg = 44;
var zecimal = 3.14;
var notatieExponentiala = 2e4;

console.log(intreg, zecimal, notatieExponentiala);

//valori speciale
//infinity, -infinity
console.log(1 / 0);
console.log(-1 / 0);

//NaN
var a = Number("x");
console.log(a);
console.log(0 / 0);
console.log(isNaN(12));
console.log(isNaN("abc"));

//boolean

var esteaCeata = true;
console.log("🚀 ~ esteaCeata:", esteaCeata);
var amBani = false;
console.log("🚀 ~ amBani:", amBani);
var comparație = 3 > 2;
console.log("🚀 ~ comparație:", comparație);

//Undefined

var ceva;
console.log("🚀 ~ ceva:", ceva);

//funcitile care nu au un rerturn explicit returnează undefined

function f() {}
var rezultat = f();
console.log("🚀 ~ rezultat:", rezultat);

//Null - lipsa intenționată a unei valori
var altceva = null;

//operatori

var suma = 2 + 8;
console.log("🚀 ~ suma:", suma);
console.log("10" + 2);
console.log(2 + 2 + "10" + 3 + 3);

//scadere

var diferenta = 10 - 2;
console.log("🚀 ~ diferenta:", diferenta);

//inmultire

var produs = 4 * 5;
console.log("🚀 ~ produs:", produs);

//impartire

var cat = 20 / 6;
console.log("🚀 ~ cat:", cat);

//modulo
var rest = 20 % 6;
console.log("🚀 ~ rest:", rest);

var numar = 21;
console.log("🚀 ~ numar:", numar);
var estePar = numar % 2 === 0;
console.log("🚀 ~ estePar:", estePar);

//incrementare

var i = 7;
i++; // i=i+1;
console.log("🚀 ~ i:", i);
console.log(`i = ${j}`);

//decrementare

var j = 8;
j--; // i=i-1;
console.log("🚀 ~ j:", j);

//operatori de atribuire

var numar3 = 10;
console.log("🚀 ~ numar3:", numar3);
var total = 10;
console.log("🚀 ~ total:", total);
total += 5;
console.log("🚀 ~ total:", total);

console.log(`Total e egal cu ${(total *= 4)}`);
