// //var
// //scop global si scop de global

// var a = 10; //scop global

// function test( {
//     var b = 15; //scop functie
//     console.log(a);
// })

// //console.log (b);
// // console.log (b);
// // test();
// var a =20; //cu var putem să redeclarăm

// //let
// //scop global, scop functie, scop block

// console.log(x);
// let x = 10;

function testLet() {
  let y = 20;
  if (y == 20) {
    let z = 15; //scop block
  }
  // console.log(z); -error
}

//const - functionează identic cu let la nivel de scop doar că nu se poate schimba valoarea

const a = 10;
a = 15; //nu este permisa atribuirea multipla
