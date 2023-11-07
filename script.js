document.getElementById("myButton").onclick = myFunction;

let idCounter = 0;
function myFunction(event) {
  event.preventDefault();
  idCounter++;
  const taskId = `div${idCounter}`;
  const taskNameValue = document.getElementById("taskName").value;
  const taskDescValue = document.getElementById("taskDescription").value;
  newTaskElement(taskId, taskNameValue, taskDescValue);
}

function newTaskElement(taskId, taskName, taskDescription) {
  const pItem = document.createElement("div");
  pItem.id = taskId;
  pItem.classList.add("task_style");
  pItem.draggable = true;
  const node = document.createTextNode(`${taskName}\n${taskDescription}`);
  pItem.appendChild(node);
  const element = document.getElementById("pending");
  const child = document.getElementById("id");
  element.insertBefore(pItem, child);
}

document.getElementById("addTaskButton").onclick = addTaskB;

function addTaskB() {
  const addTask = document.getElementById("form");
  addTask.classList.toggle("add_task--active");
}

let dragged = null;

const elements = document.querySelectorAll("#pending, #inProgress, #done");

elements.forEach((element) => {
  element.addEventListener("dragstart", (event) => {
    // store a ref. on the dragged elem
    dragged = event.target;
  });

  element.addEventListener("dragover", (event) => {
    // prevent default to allow drop
    event.preventDefault();
  });

  element.addEventListener("drop", (event) => {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged element to the selected drop target
    if (event.target.className === "task_element") {
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
    }
  });
});
