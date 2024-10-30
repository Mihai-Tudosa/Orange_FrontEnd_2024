const roRadioButton = document.getElementById("ro");
const enRadioButton = document.getElementById("en");

enRadioButton.addEventListener(`change`, saveEnToCookies);
roRadioButton.addEventListener(`change`, saveRoToCookies);

function saveRoToCookies() {
  document.cookie = "language=ro";
}

function saveEnToCookies() {
  document.cookie = "language=en";
}

window.addEventListener(`DOMContentLoaded`, useLanguageFromCookies);

function useLanguageFromCookies() {
  const cookies = document.cookie.split("; ");
  let language = "";
  for (let i = 0; i <= cookies.length - 1; i++) {
    const key = cookies[i].split("=")[0];
    const value = cookies[i].split("=")[1];

    if (key === "language") {
      language = value;
    }
  }
  const languageRadioButton = document.getElementById(language);
  if (languageRadioButton !== null) {
    languageRadioButton.checked = true;
  }
}
