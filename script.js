document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("todo-form");
  const taskInput = document.getElementById("new-task");
  const taskList = document.getElementById("todo-list");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      addTask(taskText);
      taskInput.value = "";
    }
  });

  function addTask(text) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = text;

    const actions = document.createElement("div");
    actions.classList.add("actions");

    // Complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✓";
    completeBtn.title = "Mark as complete";
    completeBtn.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    // Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "✎";
    editBtn.title = "Edit task";
    editBtn.addEventListener("click", () => {
      const newText = prompt("Edit your task:", span.textContent);
      if (newText !== null && newText.trim() !== "") {
        span.textContent = newText.trim();
      }
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.title = "Delete task";
    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(li);
    });

    actions.appendChild(completeBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);
    taskList.appendChild(li);
  }
});
