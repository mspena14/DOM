
function estiloCapitalizate(texto) {
    return (texto).charAt(0).toUpperCase() + (texto).slice(1)
}

const main = document.querySelector("main")

main.classList.add("d-flex", "justify-content-center", "flex-wrap", "gap-3")

const body = document.querySelector("body")

function reset1() {
    mascotas.forEach(mascota => {
        main.innerHTML += `
    <section class="card" style="width: 25rem;">
        <figure class="figure w-100 h-100">
            <img src=${mascota.imagen} class=" w-100 h-100 border rounded" alt="...">
        </figure>
        <article class="d-flex flex-column card-body justify-content-center">
            <h4 class="card-title">${estiloCapitalizate(mascota.nombre)}</h4>
            
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> <span class="fw-semibold">Especie:</span>
                    ${estiloCapitalizate(mascota.especie)}</li>
                <li class="list-group-item"> <span class="fw-semibold">Raza:</span>
                    ${estiloCapitalizate(mascota.raza)}</li>
                <li class="list-group-item"> <span class="fw-semibold">Edad:</span> ${mascota.edad} años</li>
                <li class="list-group-item"> <span class="fw-semibold">Peso:</span> ${mascota.peso} kg</li>
                <li class="list-group-item"> <span class="fw-semibold">Estado:</span>
                    ${estiloCapitalizate(mascota.estado)}</li>
                <br>
            </ul>
            <h6 class="fw-bold"> Información propietario</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> <span class="fw-semibold">Nombre:</span>
                    ${estiloCapitalizate(mascota.nombrePropietario)}</li>
                <li class="list-group-item"> <span class="fw-semibold">Documento:</span>
                    ${mascota.documentoPropietario}</li>
                <li class="list-group-item"> <span class="fw-semibold">Telefono:</span>
                    ${mascota.telefonoPropietario}</li>
                <li class="list-group-item "> <span class="fw-semibold">Email:</span> 
                    ${mascota.correoPropietario}</li>
            </ul>
            <br>
            <a href="https://www.adoptanocompres.org/?gad_source=1&gclid=CjwKCAjw88yxBhBWEiwA7cm6pd0yftAIjqZU48jzMGWzuto6aEMO1GI38UdJtA5sKh7d1q7CtCr72xoCt3wQAvD_BwE"
                class="btn btn-primary mx-5" target="_blank">Adoptar</a>
        </article>
    </section>
    `
    })
}

mascotas.forEach(mascota => {
    main.innerHTML += `
<section class="card" style="width: 25rem;">
    <figure class="figure w-100 h-100">
        <img src=${mascota.imagen} class=" w-100 h-100 border rounded" alt="...">
    </figure>
    <article class="d-flex flex-column card-body justify-content-center">
        <h4 class="card-title">${estiloCapitalizate(mascota.nombre)}</h4>
        
        <ul class="list-group list-group-flush">
            <li class="list-group-item"> <span class="fw-semibold">Especie:</span>
                ${estiloCapitalizate(mascota.especie)}</li>
            <li class="list-group-item"> <span class="fw-semibold">Raza:</span>
                ${estiloCapitalizate(mascota.raza)}</li>
            <li class="list-group-item"> <span class="fw-semibold">Edad:</span> ${mascota.edad} años</li>
            <li class="list-group-item"> <span class="fw-semibold">Peso:</span> ${mascota.peso} kg</li>
            <li class="list-group-item"> <span class="fw-semibold">Estado:</span>
                ${estiloCapitalizate(mascota.estado)}</li>
            <br>
        </ul>
        <h6 class="fw-bold"> Información propietario</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"> <span class="fw-semibold">Nombre:</span>
                ${estiloCapitalizate(mascota.nombrePropietario)}</li>
            <li class="list-group-item"> <span class="fw-semibold">Documento:</span>
                ${mascota.documentoPropietario}</li>
            <li class="list-group-item"> <span class="fw-semibold">Telefono:</span>
                ${mascota.telefonoPropietario}</li>
            <li class="list-group-item "> <span class="fw-semibold">Email:</span> 
                ${mascota.correoPropietario}</li>
        </ul>
        <br>
        <a href="https://www.adoptanocompres.org/?gad_source=1&gclid=CjwKCAjw88yxBhBWEiwA7cm6pd0yftAIjqZU48jzMGWzuto6aEMO1GI38UdJtA5sKh7d1q7CtCr72xoCt3wQAvD_BwE"
            class="btn btn-primary mx-5" target="_blank">Adoptar</a>
    </article>
</section>
`
})

const limpiar = document.querySelector("#limpiar")

limpiar.addEventListener("click", () => {
    main.classList.add("visually-hidden")
})

const reset = document.querySelector("#limpiar2")

reset.addEventListener("click",() => {
    main.classList.remove("visually-hidden")
})