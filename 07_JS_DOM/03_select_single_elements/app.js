const addTaskBtn = document.getElementById("add-task");
console.log(addTaskBtn.type);
console.log(addTaskBtn.innerHTML);
console.log(addTaskBtn.className);
addTaskBtn.style.backgroundColor = "green";

const newTaskInput = document.getElementById("task");
newTaskInput.value = "Plimba Cainele";

//querySelector - dacă există de mai multe ori va lua doar primul element

const deleteAllTasksBtn = document.querySelector(".card-action a.clear-tasks");
console.log("🚀 ~ deleteAllTasksBtn:", deleteAllTasksBtn);
deleteAllTasksBtn.classList.remove("black");
deleteAllTasksBtn.style.backgroundColor = "red";
const firstBtn = document.getElementById(".btn");
console.log("🚀 ~ firstBtn:", firstBtn);

//titlu selectat

const title = document.querySelector(".card-content .card-title");
title.style.backgroundColor = "lightpink";

//new task small
const newTaskSmall = document.querySelector(".card-content .row label");
newTaskSmall.style.fontStyle = "italic";

//tot containeru

const totContaineru = document.querySelector("#main");
totContaineru.style.boxShadow =
  "rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px";

const testSelector = document.querySelector(
  "#main .collection li:nth-child(2)"
);
testSelector.childNodes[0].textContent = "Alearga";
