let jucatorulCurent = "X"; // stabilim jucătorul care începe

// folosim un array ca să facem o listă cu tabla de joc și fiecare pătrat - un array cu 9 poziții goale unde pe măsură ce jucăm se umple cu x sau 0

let tabla = ["", "", "", "", "", "", "", "", ""];
//variabila in care stocam daca jocul s-a terminat sau nu

let esteJoculInDesfasurare = true;

// selectăm toate celulele din tabla de joc

const celule = document.querySelectorAll(`.cell`);

//selectam elementul care va afisa starea jocului

const afisajStatus = document.querySelector(`#status`);

//selectam elementul care arata al cui e randul

const randulCui = document.querySelector(`#randul`);

//selectam butonul de resetare a jocului

const butonReset = document.querySelector(`#reset`);

//numerele norocoase la 6/49 (combinații câștigătoare)
const combinatiiCastigatoare = [
  [0, 1, 2], //1
  [3, 4, 5], //2
  [6, 7, 8], //3
  [0, 3, 6], //4
  [1, 4, 7], //5
  [2, 5, 8], //6
  [0, 4, 8], //7
  [2, 4, 6], //8
];

//adaugam eventlistener pe fiecare celula
celule.forEach((celula) =>
  celula.addEventListener("click", gestioneazaClickPeCelula)
);

function gestioneazaClickPeCelula(e) {
  const celulaApasata = e.target;
  const indexCelula = celulaApasata.getAttribute("data-index");

  //verificam daca e gol si iesim inapoi in funcite daca e gol
  if (tabla[indexCelula] !== "" || esteJoculInDesfasurare === false) {
    return;
  }

  tabla[indexCelula] = jucatorulCurent;
  celulaApasata.innerHTML = jucatorulCurent;
  celulaApasata.classList.add(`${jucatorulCurent}`);
  verificaCastigator();

  //schimbam jucatorul curent: daca e x devine 0 si invers
  if (esteJoculInDesfasurare) {
    if (jucatorulCurent === `X`) {
      jucatorulCurent = `O`;
      randulCui.innerHTML = `Randul lui O`;
    } else if (jucatorulCurent === `O`) {
      jucatorulCurent = `X`;
      randulCui.innerHTML = `Randul lui X`;
    }
  }
}

function verificaCastigator() {
  //variabila care va stabili dacă exista castigator sau e remiza
  let existaCastigator = false;

  //parcurgem combinatiile castigatoare

  for (let i = 0; i <= combinatiiCastigatoare.length - 1; i++) {
    let combinatieCastigatoare = combinatiiCastigatoare[i];
    const celula1 = tabla[combinatieCastigatoare[0]];
    const celula2 = tabla[combinatieCastigatoare[1]];
    const celula3 = tabla[combinatieCastigatoare[2]];

    //daca una din celule e goala continua cu urmatoarele combinatii

    if (celula1 === "" || celula2 === "" || celula3 === "") {
      continue;
    }

    //daca toate celulele sunt identice avem un castigator

    if (celula1 === celula2 && celula2 === celula3) {
      existaCastigator = true;
      break; //oprim bucla pentru ca avem winner
    }
  }
  if (existaCastigator === true) {
    randulCui.innerHTML = "";
    afisajStatus.innerHTML = `Jucatorul ${jucatorulCurent} a castigat`;
    esteJoculInDesfasurare = false;
    return;
  }

  //daca toate celulele sunt completate dar nu avem castigator este remiza

  if (tabla.includes("") === false) {
    afisajStatus.innerHTML = `Remiză!!`;
    esteJoculInDesfasurare = false;
  }
}

butonReset.addEventListener("click", reseteazaJoc);

function reseteazaJoc() {
  tabla = ["", "", "", "", "", "", "", "", ""];
  esteJoculInDesfasurare = true;
  jucatorulCurent = "X";
  afisajStatus.innerHTML = "";
  randulCui.innerHTML = ``;
  celule.forEach((celula) => {
    celula.innerHTML = "";
    celula.classList.remove("X", "O");
  });
}
