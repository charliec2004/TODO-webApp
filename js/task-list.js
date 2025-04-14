// Managing, adding, deleteing, updating, rendering the task list

let taskList = [];
let taskIdCounter = 0;

export function addTask(name, dueDate) {
  const task = {
    id: ++taskIdCounter,
    name,
    dueDate,
    completed: false
  };

  taskList.push(task);
  renderTask(task);
}

function renderTask(task) {
  const taskBar = document.querySelector(".task-bar");

  const li = document.createElement("li");
  li.classList.add("task");

  li.innerHTML = `
    <div class="task-left">
        <input type="checkbox" id="checkbox-${task.id}" class="checkbox">
        <label for="checkbox-${task.id}" class="task-name">${task.name}</label>
    </div>
    <div class="task-middle"><p></p></div>
    <div class="task-right">
        <div class="due-date-wrapper">
            <p class="due-date">${new Date(task.dueDate).toLocaleString(undefined, {
              weekday: 'short',
              hour: '2-digit',
              minute: '2-digit',
              hour12: true
            })}</p>
        </div>
        <div class="settings-wrapper">
            <img src="settings.svg">
        </div>
    </div>
  `;

  taskBar.appendChild(li);
}