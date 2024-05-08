
export function withForClassic(coders, tBody) {
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


    for (const key in coders) {
        const coder = coders[key]
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