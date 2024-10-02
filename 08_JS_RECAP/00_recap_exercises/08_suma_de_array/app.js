let exemplu = [1, 2, 3, 4, 5, 6, 7, 8];

function sumaArray(arr) {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma = suma + arr[i];
  }
  console.log(suma);
}

sumaArray(exemplu);
