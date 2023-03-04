// Get the elements from the HTML
const taskInput = document.getElementById("task");
const taskList = document.getElementById("taskList");
const addTaskButton = document.getElementsByTagName("button")[0];
const clearTasksButton = document.getElementsByTagName("button")[1];



// Load the saved task list from localStorage
if(localStorage.getItem("tasks")){
  taskList.value = localStorage.getItem("tasks");
}

// Add task to the task list
addTaskButton.addEventListener("click", function(event){
  event.preventDefault();
  if(taskInput.value.trim() === ""){ // Check if the input is empty or just spaces
    alert("Please enter a task.");
    return;
  }
  taskList.value += taskInput.value + "\n"; // Append the task to the task list
  taskInput.value = ""; // Clear the input
  saveTasks(); // Save the task list to localStorage
});

// Clear the task list
clearTasksButton.addEventListener("click", function(event){
  event.preventDefault();
  taskList.value = "";
  localStorage.removeItem("tasks"); // Remove the task list from localStorage
});

// Save the task list to localStorage
function saveTasks(){
  localStorage.setItem("tasks", taskList.value);
}
