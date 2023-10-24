/* App de tareas
 Donde el usuario agregue una tarea mediante el prompt y esta sea añadida a una variable para que la muestre por consola
 Ingresar varias tareas y que todas las muestre en consola */

let taskCounter = 1;
let tasks = [];

function generateTaskId() {
  return taskCounter++;
}

let newTask = confirm("¿Deseas crear una nueva tarea?");

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

const tarea1 = new Task(
  generateTaskId(),
  "Hacer la compra",
  newTask,
  new Date()
);

console.log(newTask);
console.log(tarea1);
