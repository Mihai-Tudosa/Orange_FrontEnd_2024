// const deleteButon = document.querySelector(
//   `.collection > li:nth-child(3) > a > i`
// );

// function deleteTask() {
//   //   console.log("test");
//   deleteButon.parentElement.parentElement.remove();
// }

function deleteTask(element) {
  element.parentElement.parentElement.remove();
}
