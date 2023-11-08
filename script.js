

let idCounter = 0;
let taskForm = document.getElementById("form");
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  idCounter++;
  const taskId = `div${idCounter}`;
  const taskNameValue = document.getElementById("taskName").value;
  const taskDescValue = document.getElementById("taskDescription").value;
  newTaskElement(taskId, taskNameValue, taskDescValue);
})

// new task element function -> Se encarga de Crear la task e insertarla en el elemento correspondiente
function newTaskElement(taskId, taskName, taskDescription) {
  const pItem = document.createElement("div");
  pItem.id = taskId;
  pItem.classList.add("task_style");
  pItem.draggable = true;

  const parraphItem = document.createElement("p");
  const node = document.createTextNode(`${taskName}`);
  parraphItem.appendChild(node);
  pItem.appendChild(parraphItem);
  const parraphItem2 = document.createElement("p");
  const node2 = document.createTextNode(`${taskDescription}`);
  parraphItem2.appendChild(node2);
  pItem.appendChild(parraphItem2);

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



