import { alertSmallSuccess } from "./alerts";

export function withForClassic(coders, tBody) {
  tBody.innerHTML = ``
  for (let i = 0; i < coders.length; i++) {

    tBody.innerHTML += `
    <tr>
    <th scope="row">${coders[i].id}</th>
    <td>${coders[i].name}</td>
    <td>${coders[i].lastName}</td>
    <td>${coders[i].email}</td>
  </tr>
    `
  }
}

export function withForEach(coders, tBody) {
  tBody.innerHTML = ``
  coders.forEach(coder => {
    tBody.innerHTML += `
    <tr>
    <th scope="row">${coder.id}</th>
    <td>${coder.name}</td>
    <td>${coder.lastName}</td>
    <td>${coder.email}</td>
  </tr>
    `
  })
}

export function withForOf(coders, tBody) {
  tBody.innerHTML = ``
  for (const coder of coders) {
    tBody.innerHTML += `
    <tr>
    <th scope="row">${coder.id}</th>
    <td>${coder.name}</td>
    <td>${coder.lastName}</td>
    <td>${coder.email}</td>
  </tr>
    `
  }
}

export function withForIn(coders, tBody) {
  tBody.innerHTML = ""
  for (const key in coders) {
    const coder = coders[key]
    tBody.innerHTML += `
    <tr>
    <th scope="row">${coder.id}</th>
    <td>${coder.name}</td>
    <td>${coder.lastName}</td>
    <td>${coder.email}</td>
    <td class="">
    <button type="button" data-id=${coder.id} class="btn btn-info me-2">Details</button>
    <button type="button" data-id=${coder.id} class="btn btn-warning me-2">Edit</button>
    <button type="button" data-id=${coder.id} class="btn btn-danger ms-2">Delete</button>
    </td>
  </tr>
    `
  }
}


export function create(name, lastName, email, coders) {
  const newCoder = {
    id: Date.now(),
    name: name.value,
    lastName: lastName.value,
    email: email.value
  }

  coders.push(newCoder)
}

export function deleteCoder(idToDelete, coders) {
  coders.forEach((coder, index) => {
    if (coder.id == idToDelete) {
      coders.splice(index, 1)
      alertSmallSuccess("Coder deleted successfully")
    }
  }
  )
}

