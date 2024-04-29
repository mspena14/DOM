let one = document.getElementById('btn-one')
let two = document.getElementsByClassName('btn-two')
let three = document.getElementsByName('btn')
let four = document.getElementsByTagName("button")

console.log(one)
console.log(two[0])
console.log(three[0])
console.log(four[3])

let five = document.querySelector('#btn-five')
let six = document.querySelector('.btn-six')
let seven = document.querySelectorAll("[name='btn-seven']")
let eight = document.querySelectorAll("button")

console.log(five)
console.log(six)
console.log(seven[0])
console.log(eight[7])

let example = document.getElementById('btn-example')
let example2 = document.querySelector('#btn-example')

console.log(example)
console.log(example2)

example.textContent = "HOLA MUNDO"

example.addEventListener("click", function () {
    alert("Hola Mundo")
})