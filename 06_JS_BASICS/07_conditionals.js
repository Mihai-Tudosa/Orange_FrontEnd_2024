// //if

// // if(conditie) {
// //     //cod care se executa doar dac aconditia este adevarata
// // }
// // //

// function checkParkingTicket(isExpired) {
//   if (isExpired === true) {
//     console.log("Mergeți să plătiți parcarea");
//   }
// }

// // if else
// if(conditie) {
//     //cod care se executa daca conditia este adevarată
// } else { //cod care se executa daca condiția este falsă}

// function isParkingFree(isElectric) {
//  if(isElectric === true) {
// console.log(`Parcarea este gratis`)
//  } else {
//     console.log(`Aveti de platit 5 lei pe oră`)
//  }
// }

//if else if else if else if ... else

function calculateTax(engineCapacity) {
  if (engineCapacity < 1400) {
    return "Aveți de plătit 100 de lei";
  } else if (engineCapacity >= 1400 && engineCapacity < 2000) {
    return "Aveți de plătit 200 lei";
  } else if (engineCapacity >= 2000 && engineCapacity < 3000) {
    return "Aveți de plătit 300 lei";
  } else {
    return "Aveți de plătit 100 de lei";
  }
}

let engineCapacity = 1560;
console.log(calculateTax(engineCapacity));

//Să se scrie o funcție care primește ca parametru glicemia și întoarce dacă pacientu este sănătos, prediabetic sau diabetic.
//0-99 sănatos
//100-110 prediabetic
//110> diabetic

function checkDiabetesStatus(bloodSugar) {
  if (bloodSugar <= 99) {
    return "Sănătos tun";
  } else if (bloodSugar > 100 && bloodSugar <= 110) {
    return "Prediabetic";
  } else if (bloodSugar > 110) {
    return "Diabetic";
  }
}

const status = checkDiabetesStatus(70);
console.log(status);
