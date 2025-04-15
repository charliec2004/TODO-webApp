import { addTask } from './task-list.js';

const openNewTask = document.getElementById('open-modal');
const closeNewTask = document.getElementById('close-modal');
const modal = document.getElementById('new-task-modal');
const cancelTask = document.getElementById('cancel-task');
const saveButton = document.getElementById("save-task");
const inputName = document.getElementById('task-name');
const inputDueDate = document.getElementById('due-date');



// Open the modal
openNewTask.addEventListener('click', () => {
    modal.classList.add("open");
});

// Click the X button
closeNewTask.addEventListener('click', () => {
    modal.classList.remove("open");
});

// Click outside the modal
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('open'); // 'modal' is the background .. 'modal-content' is the stuff
    }
});

// Click Cancel
cancelTask.addEventListener('click', () => {
    modal.classList.remove('open');
});


// Click Save
saveButton.addEventListener("click", () => {
    const name = inputName.value.trim();
    const dueDate = inputDueDate.value;
  
    if (!name || !dueDate) return;
  
    addTask(name, dueDate);
    modal.classList.remove("open");
    inputName.value = ""; //reset modal input values
    inputDueDate.value = "";
  });





