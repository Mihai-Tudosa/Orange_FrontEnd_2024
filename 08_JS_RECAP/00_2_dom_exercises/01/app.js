let paragraf = document.getElementById(`paragraf`);

function schimbaText() {
  paragraf.textContent = `
  Textul a fost schimbat
  `;
}

paragraf.addEventListener(`click`, schimbaText);
