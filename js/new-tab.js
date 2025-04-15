import { addTab } from './tab-list.js';

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

saveBTN.addEventListener("click", () => {
    const name = inputName.value.trim(); // remove white space from front and end
    console.log("Save button clicked, name:", name);
    
    if (!name) {
        console.log("Name is empty, returning");
        return; // exit func if there is no name!
    }
    console.log("Calling addTab with:", name);
    addTab(name); // not made yet
    tabModal.classList.remove("open"); // close the modal
    inputName.value = ""; // Empty the name value after close

});
