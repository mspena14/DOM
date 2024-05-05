//Funcioón para dar estilo capitalizate remplazada por las clases de bootstrap
function estiloCapitalizate(texto) {
    return (texto).charAt(0).toUpperCase() + (texto).slice(1)
}
const body = document.querySelector("body")
const main = document.querySelector("main")
const showMascotas = document.querySelector("#showMascotas")
showMascotas.classList.add("d-flex", "justify-content-center", "flex-wrap", "gap-3")

//Función para mostrar el listado de mascotas
mascotas.forEach(mascota => {
    showMascotas.innerHTML += `
<section class="card" style="width: 25rem;">
    <figure class="figure w-100 h-100">
        <img src=${mascota.imagen} class=" w-100 h-100 border rounded" alt="...">
    </figure>
    <article class="d-flex flex-column card-body justify-content-center">
        <h4 class="card-title text-capitalize">${(mascota.nombre)}</h4>
        
        <ul class="list-group list-group-flush">
            <li class="list-group-item text-capitalize"> <span class="fw-semibold">Especie:</span>
                ${(mascota.especie)}</li>
            <li class="list-group-item text-capitalize"> <span class="fw-semibold text-capitalize">Raza:</span>
                ${(mascota.raza)}</li>
            <li class="list-group-item"> <span class="fw-semibold">Edad:</span> ${mascota.edad} años</li>
            <li class="list-group-item"> <span class="fw-semibold">Peso:</span> ${mascota.peso} kg</li>
            <li class="list-group-item text-capitalize"> <span class="fw-semibold ">Estado:</span>
                ${(mascota.estado)}</li>
            <br>
        </ul>
        <h6 class="fw-bold"> Información propietario</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item text-capitalize"> <span class="fw-semibold">Nombre:</span>
                ${(mascota.nombrePropietario)}</li>
            <li class="list-group-item"> <span class="fw-semibold">Documento:</span>
                ${mascota.documentoPropietario}</li>
            <li class="list-group-item"> <span class="fw-semibold">Telefono:</span>
                ${mascota.telefonoPropietario}</li>
            <li class="list-group-item "> <span class="fw-semibold">Email:</span> 
                ${mascota.correoPropietario}</li>
        </ul>
        <br>
        <a href="https://www.catdog.com.co/?gclid=Cj0KCQjwudexBhDKARIsAI-GWYXgdNLPT3F0zgJCVzJupNcXvWDN5Xs_TI5T1yVVRXku2QtJ2zbnP0EaAoSYEALw_wcB"
            class="btn btn-primary mx-5" target="_blank">Adoptar</a>
    </article>
</section>
`
})

//Función para enlistar los nombres de los dueños
const listadoPropietarios = document.querySelector("#listadoPropietarios")
function verListaDueños() {
    let dueños = mascotas.map(mascota => mascota.nombrePropietario)
    let dueñosSinRepetir = []
    for (let i = 0; i < dueños.length; i++) {
        if (!dueñosSinRepetir.includes(dueños[i])) {
            dueñosSinRepetir.push(dueños[i])
        }
    }
    dueñosSinRepetir.forEach(dueño => {
        listadoPropietarios.innerHTML += `<li class="list-group-item">${estiloCapitalizate(dueño)}</li>`
    })
}
verListaDueños()

//Boton para limpiar el listado de mascotas
const limpiar = document.querySelector("#limpiar")
limpiar.addEventListener("click", () => {
    showMascotas.classList.add("visually-hidden")
    limpiar.classList.add("visually-hidden")
    reset.classList.remove("visually-hidden")
})

//Boton para mostrar nuevamente el listado de mascotas
const reset = document.querySelector("#reset")
reset.addEventListener("click", () => {
    showMascotas.classList.remove("visually-hidden")
    limpiar.classList.remove("visually-hidden")
    reset.classList.add("visually-hidden")
})



//Declaramos variables para asignar el modo oscuro 
const allSections = document.querySelectorAll("section")
const allUls = document.querySelectorAll("ul")
const allLis = document.querySelectorAll("li")
const allAs = document.querySelectorAll("a")
const allDivs = document.querySelectorAll("div")
const allButtons = document.querySelectorAll("button")
const footer = document.querySelector("footer")
const allLinks = document.querySelectorAll(".nav-link a")
const allInputs = document.querySelectorAll("input")
const allLabels = document.querySelectorAll("label")
const allSelects = document.querySelectorAll("select")
const allFieldset = document.querySelectorAll("fieldset")

const copy = document.querySelector("#copy")
const toggleModeBtn = document.getElementById("toggle-mode-btn")
const header = document.querySelector("#header")
const nav = document.querySelector("#nav-bar")
toggleModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode")
    header.classList.toggle("dark-mode")//No logré hacer que el dark-mode se aplicara a todo el header
    nav.classList.toggle("dark-mode")
    footer.classList.toggle("dark-mode") //No logré hacer que el dark-mode se aplicara a todo el footer
    copy.classList.toggle("dark-mode")
    allSections.forEach(function (section) {
        section.classList.toggle("dark-mode")
    })
    allUls.forEach(function (ul) {
        ul.classList.toggle("dark-mode")
    })
    allLis.forEach(function (li) {
        li.classList.toggle("dark-mode")
    })
    allAs.forEach(function (a) {
        a.classList.toggle("dark-mode")
    })
    allDivs.forEach(function (div) {
        div.classList.toggle("dark-mode")
    })
    allButtons.forEach(function (button) {
        button.classList.toggle("dark-mode")
    })
    allLinks.forEach(function (link) {
        link.classList.toggle("dark-mode")
    })
    allInputs.forEach(function (input) {
        input.classList.toggle("dark-mode")
    })
    allLabels.forEach(function (label) {
        label.classList.toggle("dark-mode")
    })
    allSelects.forEach(function (select) {
        select.classList.toggle("dark-mode")
    })
    allFieldset.forEach(function (fieldset) {
        fieldset.classList.toggle("dark-mode")
    })
})


