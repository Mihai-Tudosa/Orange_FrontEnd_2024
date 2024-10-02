function bucla() {
  let result = ``;
  for (let i = 1; i <= 10; i++) {
    if (i == 1) {
      console.log("1");
    } else {
      result += " -> " + i;
    }
  }
  return result;
}

console.log(bucla());
