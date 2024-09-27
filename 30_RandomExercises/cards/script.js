const container = document.getElementById("container");
const spatiuStele = document.getElementsByClassName("spatiuStele");

const produse = [
  {
    poza: "img/shoes.png",
    nume: "Shoes",
    descriere: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    pret: "$100.00",
    stele: 4,
    cumpara: "Buy Now",
    culoare: "blue",
  },
  {
    poza: "img/earphone.webp",
    nume: "Earphone",
    descriere: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    pret: "$40.00",
    stele: 3,
    cumpara: "Buy Now",
    culoare: "purple",
  },
  {
    poza: "img/watch.jpg",
    nume: "Watch",
    descriere: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    pret: "$70.84",
    stele: 4,
    cumpara: "Buy Now",
    culoare: "black",
  },
  {
    poza: "img/iphone.jfif",
    nume: "Mobile",
    descriere: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    pret: "$1000.84",
    stele: 6,
    cumpara: "Buy Now",
    culoare: "yellow",
  },
];

function coloreazaStelute(stele) {
  let steleHtml = "";
  for (let i = 0; i < 5; i++) {
    if (i < stele) {
      steleHtml += `<span class = "steaPlina">⭐</span>`;
    } else {
      steleHtml += `<span class = "steaGoala">⭐</span>`;
    }
  }
  return steleHtml;
}

function adaugaProdusInContainer(produs) {
  container.innerHTML += `
    <div class="product-card">
        <img src=${produs.poza} />
        <h3 class="nume">
            ${produs.nume}
        </h3>
        <p class="descriere">
            ${produs.descriere}
        </p>
        <p class="pret">
            ${produs.pret}
        </p>
        <div class ="spatiuStele">
            ${coloreazaStelute(produs.stele)}
        </div>
        <p class="cumpara ${produs.culoare}">
            ${produs.cumpara}
        </p>
    </div>
    `;
}

function afiseazaProduse(produse) {
  for (let i = 0; i <= produse.length - 1; i++) {
    adaugaProdusInContainer(produse[i]);
  }
}

afiseazaProduse(produse);
