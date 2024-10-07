// const salut = (nume) => {
//   if (nume === undefined) {
//     console.log("Hello, Guest!");
//   } else {
//     console.log(`Hello, ${nume}!`);
//   }
// };

// salut();
// salut("Costel");

const salut = (nume = "Guest") => console.log(`Hello, ${nume}!`);

salut();
salut("Costel");
