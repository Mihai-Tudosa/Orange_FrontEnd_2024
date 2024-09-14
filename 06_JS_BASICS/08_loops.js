// //numărat cu while:

// function numaraDeLa1la100() {
//   let i = 1;
//   while (i <= 100) {
//     console.log(i);
//     i++;
//   }
// }

// numaraDeLa1la100();

// function numaraDeLa50La0() {
//   let i = 50;
//   while (i >= 0) {
//     console.log(i);
//     i = i - 2;
//   }
// }

// numaraDeLa50La0();

// //numărat cu for:

// function numaraDeLa1La100CuFor() {
//   for (let i = 1; i <= 100; i++) {
//     console.log(i);
//   }
// }

// numaraDeLa1La100CuFor();

//foruri în array-uri

// console.log(numbers[0]);

function afiseazaElementeDinArray(numbers) {
  const numarElementeArray = numbers.length;
  for (let i = 0; i <= numarElementeArray - 1; i++) {
    console.log(`La poziția ${i} se află valoarea ${numbers[i]}`);
  }
}

const arrayNumere = [2, 8, 10, 3, 5, 1];

afiseazaElementeDinArray([1, 4, 5]);

console.log("-----------------------------------------");

afiseazaElementeDinArray(arrayNumere);

console.log("-----------------------------------------");

function cautaElementulCelMaiMic(numbers) {
  let min = numbers[0];
  for (let i = 1; i <= numbers.length - 1; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  console.log(`Cel mai mic element este: ` + min);
}

cautaElementulCelMaiMic([2, 4, 1, 0, -55, 8, -100, 12]);

console.log("-----------------------------------------");

function calculeazaSumaElementelor(numbers) {
  let sum = 0;
  for (let i = 0; i <= numbers.length - 1; i++) {
    sum = sum + numbers[i];
  }
  console.log(`suma este ${sum}`);
}

calculeazaSumaElementelor(arrayNumere);
