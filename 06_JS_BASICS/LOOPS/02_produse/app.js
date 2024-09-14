// function afiseazaProdus() {
//   const produsNou = document.createElement("div");
//   produsNou.className = "product-card";
//   produsNou.innerText = "Produs nou wow";
//   document.getElementById("container").appendChild(produsNou);
// }

//    <div class="product-card">
//      <img src="img/legume_supa.jpg" alt="LegumeSupa600" />
//      <h3>Legume supă 600g</h3>
//      <p>6.64 Lei</p>
//    </div>;

const produs = {
  poza: "images/castraveti_cornichon.jpg",
  nume: "Castraveți Cornichon",
  pret: 9.98,
};

console.log(produs);

const container = document.getElementById("container");

function adaugaProdusInContainer(produs) {
  container.innerHTML += `
    <div class="product-card">
        <img src=${produs.poza} />
        <h3>
            ${produs.nume}
        </h3>
        <p>
            ${produs.pret}
        </p>
    </div>
    `;
}

const produse = [
  {
    poza: "images/legume_supa.jpg",
    nume: "Leguem supă 600g",
    pret: 6.64,
  },
  {
    poza: "images/castraveti_cornichon.jpg",
    nume: "Castraveți Cornichon",
    pret: 9.98,
  },
  {
    poza: "images/morcovi.jpg",
    nume: "Morcovi România 1kg",
    pret: 3.99,
  },
  {
    poza: "images/ardei_rosu.jpg",
    nume: "Ardei California Roșu 1 buc",
    pret: 2.89,
  },
];

function afiseazaToateProdusele(produse) {
  for (let i = 0; i <= produse.length - 1; i++) {
    adaugaProdusInContainer(produse[i]);
  }
}

// afiseazaToateProdusele(produse);
