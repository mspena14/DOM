// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
//Import database
import { coders } from "../../public/data/database"
import { withForClassic, withForEach, withForOf, withForIn} from "./operations"
import Swal from 'sweetalert2'

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

let addCoder = form.addEventListener("submit", (event) => {
    const newCoder = {
        id: Date.now(),
        name: name.value,
        lastName: lastName.value,
        email: email.value
    }

    coders.push(newCoder)
    form.reset()
    createRow()
    alert("coder added successfully")
    event.preventDefault()
})

