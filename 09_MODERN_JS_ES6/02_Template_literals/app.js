const nume = "Cosmin";
const varsta = 25;

const mesaj = nume + " are " + varsta + " ani!";
console.log(mesaj);

const mesajCuTemplateLiterals = `${nume} are ${varsta} ani!`;

console.log("🚀 ~ mesajCuTemplateLiterals:", mesajCuTemplateLiterals);

const mesajPeMaiMulteLinii = `Acesta este
un text lung
pe mai multe
linii`;

console.log("🚀 ~ mesajPeMaiMulteLinii:", mesajPeMaiMulteLinii);

const mesajPeMaiMulteLiniiFaraTemplateLiterals =
  "Acesta este" +
  "\n" +
  "un text lung" +
  "\n" +
  "pe mai multe" +
  "\n" +
  "linii" +
  "\n";

console.log(
  "🚀 ~ mesajPeMaiMulteLiniiFaraTemplateLiterals:",
  mesajPeMaiMulteLiniiFaraTemplateLiterals
);
