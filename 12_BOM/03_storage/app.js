const roRadioButton = document.getElementById("ro");
const enRadioButton = document.getElementById("en");

enRadioButton.addEventListener(`change`, saveEnToLocalStorage);
roRadioButton.addEventListener(`change`, saveRoToLocalStorage);

function saveEnToLocalStorage() {
  localStorage.setItem("language", "en");
}

function saveRoToLocalStorage() {
  localStorage.setItem("language", "ro");
}

window.addEventListener(`DOMContentLoaded`, useLanguageFromLocalStorage);

function useLanguageFromLocalStorage() {
  const language = localStorage.getItem("language");
  const languageRadioButton = document.getElementById("language");

  if (languageRadioButton !== null) {
    langauageRadioButton.checked = true;
  }
}
