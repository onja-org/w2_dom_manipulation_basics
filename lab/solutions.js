// Select DOM elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const clearDoneBtn = document.getElementById("clear-done-btn");
const taskTemplate = document.getElementById("task-template");

// Function to add a task
function addTask(text) {
  const clone = taskTemplate.content.cloneNode(true);
  const li = clone.querySelector(".task-item");
  li.querySelector(".task-text").textContent = text;
  li.dataset.id = Date.now(); // store timestamp as ID

  taskList.appendChild(clone);
}

// Add task button
addTaskBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (!text) return;

  addTask(text);
  taskInput.value = "";
});

// Event delegation for task actions
taskList.addEventListener("click", (e) => {
  const li = e.target.closest(".task-item");
  if (!li) return;

  // Delete task
  if (e.target.classList.contains("delete-btn")) {
    li.remove();
    return;
  }

  // Toggle done
  li.classList.toggle("done");
});

// Clear all completed tasks
clearDoneBtn.addEventListener("click", () => {
  const doneTasks = taskList.querySelectorAll(".done");
  doneTasks.forEach(task => task.remove());
});
