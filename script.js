let tasks = [];
let idCounter = 0;

let taskForm = document.getElementById("form");
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  idCounter++;
  const taskId = `div${idCounter}`;
  const taskNameValue = document.getElementById("taskName").value;
  const taskDescValue = document.getElementById("taskDescription").value;
  const taskStatus = document.querySelector('input[name="taskStatus"]:checked').value;
  const newTask = {
    id: taskId,
    name: taskNameValue,
    description: taskDescValue,
    status: taskStatus,
  };

  tasks.push(newTask);

  console.table("New Task:", newTask); 
  console.table("All Tasks:", tasks);
  newTaskElement(newTask);

  // Puedes realizar otras acciones aquí, como limpiar el formulario o actualizar la interfaz.
});



function newTaskElement(task) {
    const pItem = document.createElement("div");
    pItem.id = task.id;
    pItem.classList.add("task_style");
    pItem.draggable = true;

    const parraphItem = document.createElement("p");
    const node = document.createTextNode(`${task.name}`);
    parraphItem.appendChild(node);
    pItem.appendChild(parraphItem);
  
    const parraphItem2 = document.createElement("p");
    const node2 = document.createTextNode(`${task.description}`);
    parraphItem2.appendChild(node2);
    pItem.appendChild(parraphItem2);
  
    const element = document.getElementById(task.status);
    element.appendChild(pItem);

  }
  

  

// Métodos de búsqueda o filtrado

function findTaskById(id) {
  return tasks.find((task) => task.id === id);
}

function filterTasksByStatus(status) {
  return tasks.filter((task) => task.status === status);
}



// add task button form

document.getElementById("addTaskButton").onclick = addTaskB;

function addTaskB() {
  const addTask = document.getElementById("form");
  addTask.classList.toggle("add_task--active");
}

// drag and drop

let dragged = null;

const elements = document.querySelectorAll("#pending, #inProgress, #done");

elements.forEach((element) => {
  element.addEventListener("dragstart", (event) => {

    dragged = event.target;
  });

  element.addEventListener("dragover", (event) => {

    event.preventDefault();

     
    if (event.target.id === "pending") {
      const taskId = dragged.id; 
      const task = tasks.find(task => task.id === taskId); 
      if (task) {
        task.status = "pending"; 
      }
    } else if (event.target.id === "inProgress") {
      const taskId = dragged.id; 
      const task = tasks.find(task => task.id === taskId); 
      if (task) {
        task.status = "inProgress"; 
      }

    } else if (event.target.id === "done") {
      const taskId = dragged.id; 
      const task = tasks.find(task => task.id === taskId); 
      if (task) {
        task.status = "done"; 
      }
    }
    
  });

  element.addEventListener("drop", (event) => {

    event.preventDefault();

    if (event.target.className === "task_element") {
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
    }
  });

});



 