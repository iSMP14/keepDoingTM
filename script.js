document.getElementById("myButton").onclick = myFunction;

let idCounter = 0;

function myFunction(event) {
  event.preventDefault();
  idCounter++;
  const taskId = `div${idCounter}`;
  const taskNameValue = document.getElementById("taskName").value;
  const taskDescValue = document.getElementById("taskDescription").value;
  console.log(taskNameValue, taskDescValue);
  newTaskElement(taskId, taskNameValue, taskDescValue);
}

function newTaskElement(taskId, taskName, taskDescription) {
  const pItem = document.createElement("div");
  pItem.id = taskId;
  pItem.classList.add("task_style");
  const node = document.createTextNode(`${taskName} : ${taskDescription}`);
  pItem.appendChild(node);

  const element = document.getElementById("pending");
  const child = document.getElementById("div1");
  element.insertBefore(pItem, child);
}

document.getElementById("addTaskButton").onclick = addTaskB;

function addTaskB() {
  const addTask = document.getElementById("form");
  addTask.classList.toggle("add_task--active");
}
