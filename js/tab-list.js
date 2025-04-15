// Managing Tabs

let tabList = [];
let tabIdCounter = 0;


export function addTab(name) {
    const tab = {
        id: ++tabIdCounter,
        name,
    };

    tabList.push(tab);
    renderTab(tab);
}

function renderTab(tab) {
    const tabBar = document.querySelector('nav');
    const ghostTab = document.getElementById('open-tab-modal'); // the ghost button to add more tabs
    const newTab = document.createElement("div");
    
    newTab.classList.add("tab");

    newTab.innerHTML = `${tab.name}`;

    tabBar.insertBefore(newTab, ghostTab);
}