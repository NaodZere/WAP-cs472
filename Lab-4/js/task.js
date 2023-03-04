const addTaskButton = document.getElementById("add-task");
const clearTaskButton = document.getElementById("clear-task");
const taskListTextarea = document.getElementById("task-list");
const taskInput = document.getElementById("task");

addTaskButton.addEventListener("click", function() {
  const newTask = taskInput.value;
  if (newTask.trim() !== "") {
    taskListTextarea.value += "- " + newTask + "\n";
    taskInput.value = "";
  }
});

clearTaskButton.addEventListener("click", function() {
  taskListTextarea.value = "";
  taskInput.value = "";
});