// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
//Import database
import { coders } from "../../public/data/database"
import { withForClassic, withForEach, withForOf, withForIn, create} from "./operations"
import { alertSmallSuccess } from './alerts'


const body = document.querySelector('body')
const main = document.querySelector("main")
const table = document.querySelector('table')
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
createRow()

tBody.appendChild(br)


const name = document.querySelector("#name")
const lastName = document.querySelector("#last-name")
const email = document.querySelector("#email")
const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    create(name,lastName,email, coders)//Se llama la función para agregar el nuevo coder con los datos del form
    event.preventDefault()//metodo para evitar que se refresque la pagina al darle en submit
    alertSmallSuccess("Saved")//Se llama a la función de la alerta
    form.reset()//Resetea los campos del formulario
    withForIn(coders, tBody)//Se imprimen en el navegador la nueva lista de objetos
    
})

