const header = document.querySelector('header')
console.log(header)

const titulo = document.createElement('h1')
console.log(titulo)

titulo.textContent = 'Galeria de perritos'

titulo.setAttribute('id', 'titulo-principal') //Este es más antiguo, mejor practica
titulo.id = 'titulo-principal'//Versión moderna 

//titulo.style.color = 'blue' una forma de hacerlo, pero con mala práctica crea etiqueta <style></style> en el HTML
//titulo.style = "color: blue" mismo resultado, mala práctica igualmente

titulo.classList.add("text-center") // Mejor práctica se tre directamente de bootstrap agregando la clase
titulo.classList.add('text-primary', 'bg-dark') //Se pueden agregar varias clases a la vez

header.classList.add("bg-warning") //
header.classList.add("p-5")
header.appendChild(titulo)




const main = document.querySelector("main")


for (let i = 0; i < 70; i++) {
    main.innerHTML += `
<section class="card" style="width: 18rem;">
<img src="./public/image/sanbernadoperro.webp"
    class="card-img-top" alt="...">
<div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
        card's content.</p>
</div>
<ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
</ul>
<div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
</div>
</section>
`  
}