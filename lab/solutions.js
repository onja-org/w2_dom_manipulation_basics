// lab/exercise-solution.js

const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const clearDoneBtn = document.getElementById("clear-done-btn");

// 1️⃣ Add new task
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") return; // stop if input is empty

  const li = document.createElement("li");
  li.textContent = taskText;

  // 2️⃣ Toggle "completed" when clicked
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  taskList.appendChild(li);

  taskInput.value = ""; // clear input after adding
});

// 3️⃣ Clear completed tasks
clearDoneBtn.addEventListener("click", () => {
  const completedTasks = document.querySelectorAll(".completed");
  completedTasks.forEach(task => task.remove());
});