const body = document.querySelector("body")
const main = document.querySelector("main")
const append = document.querySelector("#appendButton")
const appendSection = document.querySelector("#append")
append.addEventListener("click", () => {
    const response = createButtonSuccess()
    appendSection.appendChild(response)
})

function createButtonSuccess() {
    const button = document.createElement("button")
    //button.setAttribute("type", "button")
    button.type="button"
    button.classList.add("btn", "btn-success")
    button.textContent="Hello"
    return button
}
createButtonSuccess()

//Remove 
const removeSection = document.querySelector("#remove")
const removeChildButton = document.querySelector("#removeButton")
function selectOneButtonRemove() {
    const btnFound = document.querySelector("#btnToRemove")
    return btnFound
}
const btnRemove = selectOneButtonRemove()

function removeChild(btnRemove) {
    removeSection.removeChild(btnRemove)
}
removeChildButton.addEventListener("click", () => {
    removeChild(btnRemove)
})
//

//Replace
const replaceSection = document.querySelector("#replace")
const replaceChildButton = document.querySelector("#replaceButton")
function selectOneButtonReplace() {
    const btnFoundRemove = document.querySelector("#btnToReplace")
    return btnFoundRemove
}

const btnReplace = selectOneButtonReplace()
const newButtonReplace = createButtonSuccess()
function replaceChildFuntion() {
    replaceSection.replaceChild(newButtonReplace, btnReplace)
}
replaceChildButton.addEventListener("click", () => {
    replaceChildFuntion()
})

//

//insert before

const insertBeforeSection = document.querySelector("#insert-before")
const insertButton = document.querySelector("#btnInsert")
const newButtoninsert = createButtonSuccess()
const selectedButton = document.querySelector("#dark")

function insertBeforeFuntion() {
    insertBeforeSection.insertBefore(newButtoninsert, selectedButton)
}

insertButton.addEventListener("click", () => {
    insertBeforeFuntion()
})
