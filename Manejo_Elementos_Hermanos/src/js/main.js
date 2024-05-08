const main = document.querySelector('main')
const btnExample = createButtonInfo()
const header = document.querySelector("header")
const footer = document.querySelector("footer")

/* //insert the element before the container
main.before(btnExample)

//insert the element after the container
main.after(btnExample)

//insert the element before the first child or at first position
main.prepend(btnExample)

//insert the elements after the last child or at last position like appendChild but with multiple elements
main.append(btnExample, createButtonInfo())

//replace every children in the container with the element
main.replaceChildren(btnExample)

//replace the container with the element, in this case delete the main and add the element btnExample
main.replaceWith(btnExample)

//Delete the container without replacing with the element, just delete everything
main.remove()
 */

function createButtonInfo() {
    const btn = document.createElement("button")
    btn.classList.add("btn", "btn-info")
    btn.textContent = "Point"
    return btn
}



console.log(main)
console.log(main.children)//Return an array of children that are added to the container

const btnDark = document.querySelector(".btn-dark")
console.log(btnDark.parentElement)//Return the parent of the element 
console.log(btnDark.parentElement.parentElement)//Return the grandparent of the element 
console.log(btnDark.parentElement.parentElement.parentElement)//Return the parent of the grandparent of the element 
console.log(btnDark.parentElement.parentElement.parentElement.parentElement)//Return the grandparent of the grandparent of the element 
console.log(btnDark.parentElement.parentElement.parentElement.parentElement.parentElement)//Return the parent of the grandparent of the grandparent of the element 
console.log(btnDark.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement)//return null because there isn't parent for the html element

console.log(main.firstElementChild)
console.log(main.firstChild)

console.log(main.lastElementChild)
console.log(main.lastChild)

console.log(main.previousElementSibling)//Return the previous element sibling
console.log(main.nextElementSibling)//Return the previous element sibling


