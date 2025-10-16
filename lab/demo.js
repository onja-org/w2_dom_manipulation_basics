// --- DOM Selection ---
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const clearDoneBtn = document.getElementById("clear-done-btn");
const logo = document.getElementById("logo");
const changeLogoBtn = document.getElementById("change-logo-btn");
const changeColorBtn = document.getElementById("change-color-btn");

// --- Creating & Adding New Tasks (content manipulation + element creation) ---
addTaskBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (!text) return;

  const li = document.createElement("li");       // creating element
  li.textContent = text;                        // reading/updating content
  li.dataset.id = Date.now();                   // working with attributes
  li.classList.add("task-item");                // changing class

  // Add a "Delete" button to each task (creating/removing elements)
  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.classList.add("delete-btn");
  li.appendChild(delBtn);

  taskList.appendChild(li);                     // adding to DOM
  taskInput.value = "";
});

// --- Toggle Completed & Change Style ---
taskList.addEventListener("click", e => {
  const li = e.target.closest("li");  // DOM traversal
  if (!li) return;

  if (e.target.classList.contains("delete-btn")) {
    li.remove();                        // removing element
  } else {
    li.classList.toggle("completed");   // changing style/class
  }
});

// --- Clear All Completed Tasks ---
clearDoneBtn.addEventListener("click", () => {
  const completedTasks = document.querySelectorAll(".completed"); // DOM traversal
  completedTasks.forEach(li => li.remove());
});

// --- Change Logo Dynamically (attribute manipulation) ---
changeLogoBtn.addEventListener("click", () => {
  logo.setAttribute("src", "../assets/to-do-list-new.png"); // attribute change
  logo.setAttribute("alt", "Updated Logo");
});

// --- Change Background Color (style manipulation) ---
changeColorBtn.addEventListener("click", () => {
  const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`;
  document.body.style.backgroundColor = randomColor;
});

// --- Reading & Updating Content Demo ---
const paragraph = document.getElementById("demo-paragraph");

document.getElementById("btn-textcontent").addEventListener("click", () => {
  paragraph.textContent = "Updated with textContent!";
});

document.getElementById("btn-innertext").addEventListener("click", () => {
  paragraph.innerText = "Updated with innerText!";
});

document.getElementById("btn-innerhtml").addEventListener("click", () => {
  paragraph.innerHTML = 'Updated with <strong>innerHTML</strong>!';
});
