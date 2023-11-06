/* const pItem = document.createElement("div"); pItem.id = "div1";
const node = document.createTextNode("Hello World");
pItem.appendChild(node);

const element = document.getElementById("pending");
const child = document.getElementById("div1");
element.insertBefore(pItem, child);
 */

document.getElementById("myButton").onclick = myFunction;

let idCounter = 0;

function myFunction() {
  idCounter++;
  const taskId = `div${idCounter}`;
  const taskNameValue = document.getElementById("taskName").value;
  const taskDescValue = document.getElementById("taskDescription").value;
  console.log(taskNameValue, taskDescValue);
  newTaskElement(taskId, taskNameValue, taskDescValue);
}

function newTaskElement(taskId, taskName, taskDescription) {
  const pItem = document.createElement("div"); pItem.id = taskId; pItem.classList.add("task_style");
  const node = document.createTextNode(`Task: ${taskName} \n Description: ${taskDescription}`);
  pItem.appendChild(node);

  const element = document.getElementById("pending");
  const child = document.getElementById("div1");
  element.insertBefore(pItem, child);
}

document.getElementById("addTaskButton", "addTaskButton-2", "addTaskButton-3").onclick = addTaskB;

function addTaskB() {
  const addTask = document.getElementById("form");
  addTask.classList.toggle("add_task--active");
}
