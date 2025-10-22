// Select DOM elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const clearDoneBtn = document.getElementById("clear-done-btn");
const taskTemplate = document.getElementById("task-template");

// Event listener for adding a task
addTaskBtn.addEventListener("click", () => {
  // TODO: Clone the template and append the new task
});

// Event delegation for marking tasks completed or deleting
taskList.addEventListener("click", (e) => {
  // TODO: Toggle done class when task is clicked
  // TODO: Delete task if delete button is clicked
});

// Event listener for clearing all completed tasks
clearDoneBtn.addEventListener("click", () => {
  // TODO: Remove all tasks marked as completed
});
