let lista = document.getElementById(`myList`);
let buton = document.getElementById(`addElementBtn`);

function adaugaElement() {
  lista.innerHTML =
    lista.innerHTML +
    `
    <li> Elementul adăugat </li
    `;
}

buton.addEventListener(`click`, adaugaElement);
