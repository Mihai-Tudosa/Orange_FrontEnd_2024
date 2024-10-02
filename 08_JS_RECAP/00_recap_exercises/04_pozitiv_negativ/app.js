function pozitivSauNegativ(numar) {
  if (numar == 0) {
    return "Numărul este 0, nu este nici pozitiv, nici negativ";
  } else if (numar < 0) {
    return true;
  } else {
    return false;
  }
}

console.log(pozitivSauNegativ(-5));
