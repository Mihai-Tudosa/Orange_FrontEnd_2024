let a = 0;
let b = 1;
let c;

function fibonnaci() {
  c = a;
  for (let i = 0; i < 100; i++) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
}

fibonnaci();
