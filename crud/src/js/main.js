// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
//Import database
import { coders } from "../../public/data/database"
import { withForClassic, withForEach, withForOf, withForIn, create, deleteCoder} from "./operations"
import { alertSmallSuccess, alertDetails } from './alerts'


const body = document.querySelector('body')
const main = document.querySelector("main")
const tBody = document.querySelector("#tableBody")
const br = document.createElement("br")

function createRow() {
    tBody.innerHTML = ``
    for (const coder of coders) {
        let row = document.createElement("tr")
        let th = document.createElement("th")
        let tdName = document.createElement("td")
        let tdLastName = document.createElement("td")
        let tdEmail = document.createElement("td")
        th.scope = "row"
        th.textContent = coder.id
        tdName.textContent = coder.name
        tdLastName.textContent = coder.lastName
        tdEmail.textContent = coder.email
        row.append(th, tdName, tdLastName, tdEmail)
        tBody.appendChild(row)
    }
}
withForIn(coders, tBody)

tBody.appendChild(br)


const name = document.querySelector("#name")
const lastName = document.querySelector("#last-name")
const email = document.querySelector("#email")
const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    create(name, lastName, email, coders)//Se llama la función para agregar el nuevo coder con los datos del form
    event.preventDefault()//metodo para evitar que se refresque la pagina al darle en submit
    alertSmallSuccess("Saved")//Se llama a la función de la alerta
    form.reset()//Resetea los campos del formulario
    withForIn(coders, tBody)//Se imprimen en el navegador la nueva lista de objetos
})

const table = document.querySelector("table")

table.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-danger")) {
        const idToDelete = event.target.getAttribute("data-id")
        deleteCoder(idToDelete, coders)
        withForIn(coders, tBody)
    } else if (event.target.classList.contains("btn-info")) {
        const idToShow = event.target.getAttribute("data-id")
        coders.forEach((coder, index) => {
            if (coder.id == idToShow) {
              
              alertDetails(coder)
            }
          }
          )
        console.log(idToShow)
    } else if (event.target.classList.contains("btn-warning")) {
        const idToEdit = event.target.getAttribute("data-id")
        console.log(idToEdit)
    }
})