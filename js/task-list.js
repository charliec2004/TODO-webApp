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


/*
Could / should make multiple taskLists!!! and then add and render each item into the task bar when the right tab is selected!!!
need to index each tab though becuase who knows how many are created... could index each tab and each task list together and always work with the same indexs
*/
function renderTask(task) {
  const taskBar = document.querySelector(".task-bar");

  const li = document.createElement("li"); // creates new list html element in the js code
  li.classList.add("task"); // adds the css class .task styling to the list

  // sets the inner html of the list -- to be appended to the task bar
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
            <img src="assets/settings.svg">
        </div>
    </div>
  `;

  taskBar.appendChild(li); // appends to new coded list element to the taskBar
  console.log(taskList); // logs the taskList for some reason
}