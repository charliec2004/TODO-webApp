const openNewTask = document.getElementById('open-modal');
const closeNewTask = document.getElementById('close-modal');
const modal = document.getElementById('new-task-modal');

openNewTask.addEventListener("click", () => {
    modal.classList.add("open")
})

closeNewTask.addEventListener("click", () => {
    modal.classList.remove("open")
})

