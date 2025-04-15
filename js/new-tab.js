const openNewTab = document.getElementById('open-tab-modal');
const closeNewTab = document.getElementById('close-tab-modal');
const tabModal = document.getElementById('new-tab-modal');
const cancelBTN = document.getElementById('cancel-tab');
const saveBTN = document.getElementById('save-tab');
const inputName = document.getElementById('tab-name');


// Open the modal
openNewTab.addEventListener('click', () => {
    tabModal.classList.add("open");
});

// Click the X button
closeNewTab.addEventListener('click', () => {
    tabModal.classList.remove("open");
});

// Click outside the modal
window.addEventListener('click', (e) => {
    if (e.target === tabModal) {
        tabModal.classList.remove('open'); // 'modal' is the background .. 'modal-content' is the stuff
    }
});

// Click Cancel
cancelBTN.addEventListener('click', () => {
    tabModal.classList.remove('open');
});
