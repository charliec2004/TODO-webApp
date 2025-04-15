import { addTask } from './task-list.js';

const openNewTask = document.getElementById('open-modal');
const closeNewTask = document.getElementById('close-modal');
const taskModal = document.getElementById('new-task-modal');
const cancelTask = document.getElementById('cancel-task');
const saveButton = document.getElementById("save-task");
const inputName = document.getElementById('task-name');
const inputDueDate = document.getElementById('due-date');



// Open the taskModal
openNewTask.addEventListener('click', () => {
    taskModal.classList.add("open");
});

// Click the X button
closeNewTask.addEventListener('click', () => {
    taskModal.classList.remove("open");
});

// Click outside the taskModal
window.addEventListener('click', (e) => {
    if (e.target === taskModal) {
        taskModal.classList.remove('open'); // 'taskModal' is the background .. 'taskModal-content' is the stuff
    }
});

// Click Cancel
cancelTask.addEventListener('click', () => {
    taskModal.classList.remove('open');
});


// Click Save
saveButton.addEventListener("click", () => {
    const name = inputName.value.trim();
    const dueDate = inputDueDate.value;
  
    if (!name || !dueDate) return;
  
    addTask(name, dueDate);
    taskModal.classList.remove("open");
    inputName.value = ""; //reset taskModal input values
    inputDueDate.value = "";
  });





