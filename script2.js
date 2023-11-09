let tasks = [];

let idCounter = 0;

let taskForm = document.getElementById("form");
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  idCounter++;
  const taskId = `div${idCounter}`;
  const taskNameValue = document.getElementById("taskName").value;
  const taskDescValue = document.getElementById("taskDescription").value;

  const newTask = {
    id: taskId,
    name: taskNameValue,
    description: taskDescValue,
    status: "pending",
  };

  tasks.push(newTask);


  console.table(tasks)
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
  
    const element = document.getElementById("pending");
    element.appendChild(pItem);
  
    // Actualizar el estado de la tarea en la interfaz gráfica
    pItem.addEventListener("dragstart", (event) => {
      dragged = event.target;
    });
  
    pItem.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
  
    pItem.addEventListener("drop", (event) => {
      event.preventDefault();
      // Verificar si el target tiene la clase "task_style"
      if (event.target.classList.contains("task_element")) {
        const updatedTask = tasks.find((t) => t.id === dragged.id);
        updatedTask.status = event.target.parentElement.id; // Actualizar el estado de la tarea en el array
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
      }
    });
  }
  

  

// Métodos de búsqueda o filtrado

function findTaskById(id) {
  return tasks.find((task) => task.id === id);
}

function filterTasksByStatus(status) {
  return tasks.filter((task) => task.status === status);
}

// Puedes usar findTaskById y filterTasksByStatus según tus necesidades

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

 document.getElementById("task_status--icon").onclick = addTaskStatus;

function addTaskStatus() {
  const addTaskState = document.getElementById("task_status--select");
  addTaskState.classList.toggle("task_status--active");
}
 
