let paragraf = document.getElementById(`paragraful`);

function schimbaCuloare() {
  paragraf.classList.toggle("textColorat");
}

paragraf.addEventListener(`mouseover`, schimbaCuloare);
