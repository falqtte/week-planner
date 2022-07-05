const $ = document.querySelector.bind(document); // Alias to querySelector to avoid verbosity.

// Getting the elements from HTML.
const dataAddRow = $("[data-addRow]");
const dataDashBody = $("[data-dashBody]");
const dataSave = $("[data-save]");

// Creating the ID List. First item ID is one, since it's already on HTML.
const idList = ["1"]

// Function that adds a new row on HTML. Is called by the "add row" button.
function addRow(value=["","","","","","","",""]) {
    
    const id = generateId(); // Calling generateId function and storing it's value.
    idList.push(id) // Pushing the new Id on ID List.

    let newRow = document.createElement("div");
    newRow.classList.add("dashboard--body")
    newRow.dataset.row = `${id}`;
    newRow.innerHTML = generateNewRow(id, value);
    dataDashBody.appendChild(newRow)

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

function updateEveryone(){
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

function isEven(number){
    return number % 2
}

function deleteRow(id) {

    const parent = $(`[data-row="${id}"]`);
    parent.remove();
    const isEqualId = (element) => element === String(id);
    const index = idList.findIndex(isEqualId);
    idList.splice(index, 1);
    updateEveryone()
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

    updateEveryone()
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

    updateEveryone()

}

// Return a HTML div with the ID on the dataset and functions.
function generateNewRow(id, value=["","","","","","","",""]) {
    return `<div class="dashboard--day dashboard--day__time">
                    <div>
                        <button onclick="upRow(${id})" class="dashboard--day__time__button dashboard--day__time__up" data-up>^</button>
                        <button onclick="deleteRow(${id})" class="dashboard--day__time__button dashboard--day__time__delete" data-delete>x</button>
                        <button onclick="downRow(${id})" class="dashboard--day__time__button dashboard--day__time__down" data-down>^</button>
                        </div>
                    <input class="dashboard--day__input" type="text" data-${id}="${0}" value="${value[0]}">
                </div>
                <div class="dashboard--day"><input class="dashboard--day__input" type="text" data-${id}="${1}" value="${value[1]}"></div>
                <div class="dashboard--day"><input class="dashboard--day__input" type="text" data-${id}="${2}" value="${value[2]}"></div>
                <div class="dashboard--day"><input class="dashboard--day__input" type="text" data-${id}="${3}" value="${value[3]}"></div>
                <div class="dashboard--day"><input class="dashboard--day__input" type="text" data-${id}="${4}" value="${value[4]}"></div>
                <div class="dashboard--day"><input class="dashboard--day__input" type="text" data-${id}="${5}" value="${value[5]}"></div>
                <div class="dashboard--day"><input class="dashboard--day__input" type="text" data-${id}="${6}" value="${value[6]}"></div>
                <div class="dashboard--day"><input class="dashboard--day__input" type="text" data-${id}="${7}" value="${value[7]}"></div>
            `
}

const saveList=()=>{
    itens = getHTMLValues();
    console.log(itens)
    localStorage.clear();
    localStorage.setItem("itens", JSON.stringify(itens));
}

function getHTMLValues(){
    document.querySelectorAll("[data-row]");
    let elements = [];
    for (let i = 0; i < idList.length; i++){
        let arr = []
        for (let j = 0; j < 8; j++){
            arr.push(document.querySelector(`[data-${idList[i]}='${j}']`).value);
        }
        elements.push(arr);
    }
    return elements;
}

let itens = JSON.parse(localStorage.getItem("itens")) || [];
if(itens[0]){
    
    $("[data-row='1']").remove()
    idList.pop();

    for (let i = 0; i < itens.length; i++){
        addRow(itens[i])
    }
}

dataSave.addEventListener("click", saveList);
dataAddRow.addEventListener("click", () => addRow());