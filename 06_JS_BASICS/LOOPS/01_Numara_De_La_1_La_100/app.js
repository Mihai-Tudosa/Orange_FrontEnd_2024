const nbContainer = document.getElementById("container");

// function afiseazaCerculeteDeLa1La100() {
//   let i = 1;
//   container.innerHTML = "";
//   while (i <= 100) {
//     const cercNou = document.createElement("div");
//     cercNou.className = "circle";
//     cercNou.innerText = i;
//     document.getElementById("container").appendChild(cercNou);
//     i++;
//   }
// }

function afiseazaCerculeteDeLa1La100() {
  let i = 1;
  container.innerHTML = "";
  while (i <= 100) {
    container.innerHTML += '<div class ="circle">' + i + "</div>";
    i++;
  }
}

// adaugaCerc();

// function adaugaCerc() {
//   let cercNou = document.createElement("div");
//   cercNou.className = "circle";
//   let numarNouCerc = document.createTextNode();
//   cercNou.appendChild(numarNouCerc);
//   let divCurent = document.getElementById("container");
//   document.body.insertBefore(cercNou, divCurent);
// }

// adaugaCerc();
// afiseazaCerculeteDeLa1La100();

// document.getElementById.('numere').innerHTML=numaraDeLa50La0();
