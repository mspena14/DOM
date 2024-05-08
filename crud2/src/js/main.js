// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
//Import database
import { coders } from "../../public/data/database"
import { withForClassic, withForEach, withForOf, withForIn} from "./operations"

const body = document.querySelector('body')
const main = document.querySelector("main")
const table = document.querySelector('table')
const tBody = document.querySelector("#tableBody")
const br = document.createElement("br")

function createRow() {
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

withForClassic(coders, tBody)

tBody.appendChild(br)

withForEach(coders, tBody)

tBody.appendChild(br)

withForOf(coders, tBody)

tBody.appendChild(br)

withForIn(coders, tBody)