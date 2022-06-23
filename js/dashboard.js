const $ = document.querySelector.bind(document); // Alias to querySelector to avoid verbosity.

// Getting the elements from HTML.
const dataAddRow = $("[data-addRow]");
const dataUp = $("[data-up]");
const dataDelete = $("[data-delete]");
const dataDown = $("[data-down]");
const dataDashBody = $("[data-dashBody]");

// Creating the ID List. First item ID is one, since it's already on HTML.
const idList = ["1"]

// Function that adds a new row on HTML. Is called by the "add row" button.
function addRow() {
    
    const id = generateId(); // Calling generateId function and storing it's value.
    idList.push(id) // Pushing the new Id on ID List.

    let newRow = generateNewRow(id) // Getting the HTML code with the ID value on the dataset and functions.
    dataDashBody.innerHTML += newRow; // Inserting the code on HTML.

    const row = $(`[data-row="${id}"]`);
    row.style.setProperty('order', `${(idList.length )}`);

    if(!isEven(idList.length)) {
        row.style.setProperty('background-color', `transparent`);
    }
}

function generateId() {
    const value = Number(Math.random() * 100 * Date.now()).toFixed(0).slice(0, 5)// Generate random ID.
    return value;
}

function deleteRow(id) {

    // Get the parent node through the dataset and then remove it from the DOM node.
    const parent = $(`[data-row="${id}"]`);
    parent.remove();

    // Removes the element from the ID list.
    const isEqualId = (element) => element === String(id);
    const index = idList.findIndex(isEqualId);
    idList.splice(index, 1);

    idList.forEach((id, index) => {
        const row = $(`[data-row="${idList[index]}"]`);
        row.style.setProperty("order", `${(index)}`)
        if(isEven(index)) {
            row.style.setProperty('background-color', `transparent`);
        } else {
            row.style.setProperty('background-color', `var(--bg-card3)`);
        }
    });

}

// Return a HTML div with the ID on the dataset and functions.
function generateNewRow(id, value = "") {
    return `<div class="dashboard--body" data-row="${id}">
                <div class="dashboard--day dashboard--day__time">
                    <div>
                        <button onclick="upRow(${id})" class="dashboard--day__time__button dashboard--day__time__up" data-up>^</button>
                        <button onclick="deleteRow(${id})" class="dashboard--day__time__button dashboard--day__time__delete" data-delete>x</button>
                        <button onclick="downRow(${id})" class="dashboard--day__time__button dashboard--day__time__down" data-down>^</button>
                        </div>
                    <input class="dashboard--day__input" type="text" value="${value}">
                </div>
                <div class="dashboard--day"><input class="dashboard--day__input" type="text" value="${value}" placeholder="${idList.length}"></div>
                <div class="dashboard--day"><input class="dashboard--day__input" type="text" value="${value}"></div>
                <div class="dashboard--day"><input class="dashboard--day__input" type="text" value="${value}"></div>
                <div class="dashboard--day"><input class="dashboard--day__input" type="text" value="${value}"></div>
                <div class="dashboard--day"><input class="dashboard--day__input" type="text" value="${value}"></div>
                <div class="dashboard--day"><input class="dashboard--day__input" type="text" value="${value}"></div>
                <div class="dashboard--day"><input class="dashboard--day__input" type="text" value="${value}"></div>
                </div>`
}

function upRow(id) { 

    // Find the ID on the ID List.
    const isEqualId = (element) => element === String(id);
    const index = idList.findIndex(isEqualId);

    if(index === 0) { return } // If the ID is the first on the array, returns the function.

    const row = $(`[data-row="${id}"]`);
    const previusRow = $(`[data-row="${idList[index - 1]}"]`);
    
    row.style.setProperty('order', `${index - 1}`)
    previusRow.style.setProperty('order', `${index}`)
    
    // Changes the ID to go UP on the array
    let element = idList[index];
    idList[index] = idList[index - 1];
    idList[index - 1] = element;

    if(!isEven(index)) {
        row.style.setProperty('background-color', `transparent`);
    } else {
        row.style.setProperty('background-color', `var(--bg-card3)`);
    }
    if(!isEven(index - 1)) {
        previusRow.style.setProperty('background-color', `transparent`);
    } else {
        previusRow.style.setProperty('background-color', `var(--bg-card3)`);
    }
}

function downRow(id) { 

    // Find the ID on the ID List.
    const isEqualId = (element) => element === String(id);
    const index = idList.findIndex(isEqualId);

    if(index === idList.length - 1) { return } // If the ID is the first on the array, returns the function.

    const row = $(`[data-row="${id}"]`);
    const nextRow = $(`[data-row="${idList[index + 1]}"]`);
    
    row.style.setProperty('order', `${index + 1}`)
    nextRow.style.setProperty('order', `${index}`)
    
    // Changes the ID to go UP on the array
    let element = idList[index];
    idList[index] = idList[index + 1];
    idList[index + 1] = element;

    if(!isEven(index)) {
        row.style.setProperty('background-color', `transparent`);
    } else {
        row.style.setProperty('background-color', `var(--bg-card3)`);
    }
    if(!isEven(index - 1)) {
        nextRow.style.setProperty('background-color', `transparent`);
    } else {
        nextRow.style.setProperty('background-color', `var(--bg-card3)`);
    }

}

function isEven(number){
    return number % 2
}

dataAddRow.addEventListener("click", addRow);