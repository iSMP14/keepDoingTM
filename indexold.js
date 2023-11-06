let taskCounter = 1;
const tasks = [];

function generateTaskId() {
  return taskCounter++;
}

function Task(id, name, state, date) {
  this.id = id;
  this.name = name;
  this.state = state;
  this.date = date;

  if (this.state === false) {
    this.state = "Incomplete";
  } else {
    this.state = "Completed";
  }
}

function createTask() {
  const taskName = prompt("Ingresa el nombre de la tarea:");
  if (taskName) {
    const newTask = new Task(generateTaskId(), taskName, false, new Date());
    tasks.push(newTask);
    console.log("Ingresaste una Tarea", newTask);
  } else {
    alert("No ingresaste una tarea");
  }
}

function displayTasks() {
  console.log("Lista de tareas:");
  tasks.forEach((task) => {
    console.log(
      `Tarea ${task.id}: Nombre: ${task.name} (Completa: ${task.state})`
    );
  });
}

createTask();

let continueAdding = confirm("¿Desea seguir añadiendo tareas?");

while (continueAdding) {
  createTask();
  continueAdding = confirm("¿Desea seguir añadiendo tareas?");
}

displayTasks();
