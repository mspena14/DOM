let mascotas = [
    {
        nombre: "luna",
        especie: "perro",
        raza: "criollo",
        edad: calcularAñosMascota(new Date("2014/06/15")),
        peso: "20",
        estado: "estable",
        nombrePropietario: "marlon",
        documentoPropietario: "1007405332",
        telefonoPropietario: "3194746457",
        correoPropietario: "marlono1naranjo@gmail.com",
        imagen: "./public/img/pCriolla.webp"
    },
    {
        nombre: "titi",
        especie: "gato",
        raza: "criollo",
        edad: calcularAñosMascota(new Date("2020/05/10")),
        peso: "6",
        estado: "estable",
        nombrePropietario: "marlon",
        documentoPropietario: "1007405332",
        telefonoPropietario: "3194746457",
        correoPropietario: "marlono1naranjo@gmail.com",
        imagen: "./public/img/titi.webp"
    },
    {
        nombre: "whiskers",
        especie: "gato",
        raza: "siamés",
        edad: calcularAñosMascota(new Date("2019/07/03")),
        peso: "6",
        estado: "critico",
        nombrePropietario: "carolina",
        documentoPropietario: "1023654789",
        telefonoPropietario: "3178965478",
        correoPropietario: "carolina.mendoza@example.com",
        imagen: "./public/img/gSiames.webp"
    },
    {
        nombre: "max",
        especie: "perro",
        raza: "labrador",
        edad: calcularAñosMascota(new Date("2016/08/15")),
        peso: "25",
        estado: "estable",
        nombrePropietario: "roberto",
        documentoPropietario: "1098741236",
        telefonoPropietario: "3125874963",
        correoPropietario: "roberto.gomez@example.com",
        imagen: "./public/img/gSiames.webp"
    },
    {
        nombre: "fluffy",
        especie: "conejo",
        raza: "holandés",
        edad: calcularAñosMascota(new Date("2020/02/20")),
        peso: "2",
        estado: "estable",
        nombrePropietario: "andres",
        documentoPropietario: "1036985472",
        telefonoPropietario: "3189652147",
        correoPropietario: "andres.rodriguez@example.com",
        imagen: "./public/img/cHolandes.webp"
    },
    {
        nombre: "mittens",
        especie: "gato",
        raza: "angora",
        edad: calcularAñosMascota(new Date("2017/11/12")),
        peso: "7",
        estado: "critico",
        nombrePropietario: "laura",
        documentoPropietario: "1052147896",
        telefonoPropietario: "3178964521",
        correoPropietario: "laura.martinez@example.com",
        imagen: "./public/img/gAngora.webp"
    },
    {
        nombre: "buddy",
        especie: "perro",
        raza: "san bernardo",
        edad: calcularAñosMascota(new Date("2015/03/25")),
        peso: "22",
        estado: "estable",
        nombrePropietario: "diego",
        documentoPropietario: "1078963214",
        telefonoPropietario: "3136985472",
        correoPropietario: "diego.perez@example.com",
        imagen: "./public/img/sanBernadoPerro.webp"
    },
    {
        nombre: "nibbles",
        especie: "conejo",
        raza: "mini lop",
        edad: calcularAñosMascota(new Date("2018/06/08")),
        peso: "1.5",
        estado: "estable",
        nombrePropietario: "andres",
        documentoPropietario: "1036985472",
        telefonoPropietario: "3189652147",
        correoPropietario: "andres.rodriguez@example.com"
    },
    {
        nombre: "toby",
        especie: "perro",
        raza: "poodle",
        edad: calcularAñosMascota(new Date("2019/04/30")),
        peso: "15",
        estado: "critico",
        nombrePropietario: "Maria",
        documentoPropietario: "1025478963",
        telefonoPropietario: "3169852478",
        correoPropietario: "maria.fernandez@example.com"
    },
    {
        nombre: "snowball",
        especie: "conejo",
        raza: "rex",
        edad: calcularAñosMascota(new Date("2016/10/20")),
        peso: "2.5",
        estado: "estable",
        nombrePropietario: "andres",
        documentoPropietario: "1036985472",
        telefonoPropietario: "3189652147",
        correoPropietario: "andres.rodriguez@example.com"
    }
]

function estiloCapitalizate(texto) {
    return (texto).charAt(0).toUpperCase() + (texto).slice(1)
}

function calcularAñosMascota(fechaNacimientoMascota) {
    let fechaActual = new Date()
    let restaFechas = fechaActual - fechaNacimientoMascota
    let años = restaFechas / (1000 * 60 * 60 * 24 * 365.25) //Se multiplica por 365.25 para que se tenga en cuenta los años biciestos
    let añosRedondeados = Math.floor(años)

    return añosRedondeados
}
const main = document.createElement("main")

main.classList.add("d-flex", "justify-content-center", "flex-wrap", "gap-3")

const body = document.querySelector("body")
body.appendChild(main)

mascotas.forEach(mascota => {
    main.innerHTML += `
    <section class="card" style="width: 25rem;">
    <img src="${mascota.imagen}" class="card-img-top w-100 h-100" alt="...">
    <div class="card-body">
      <h5 class="card-title">${estiloCapitalizate(mascota.nombre)}</h5>
      <ul class="list-group list-group-flush">
          <li class="list-group-item">Especie: ${estiloCapitalizate(mascota.raza)}</li>
          <li class="list-group-item">Especie: ${estiloCapitalizate(mascota.raza)}</li>
          <li class="list-group-item">Especie: ${estiloCapitalizate(mascota.raza)}</li>
          <li class="list-group-item">Especie: ${estiloCapitalizate(mascota.raza)}</li>
          <li class="list-group-item">Especie: ${estiloCapitalizate(mascota.raza)}</li>
          <br>
        </ul>
          <p> Información propietario</p>
          <ul class="list-group list-group-flush">
          <li class="list-group-item">Especie: ${estiloCapitalizate(mascota.raza)}</li>
          <li class="list-group-item">Especie: ${estiloCapitalizate(mascota.raza)}</li>
          <li class="list-group-item">Especie: ${estiloCapitalizate(mascota.raza)}</li>
          <li class="list-group-item">Especie: ${estiloCapitalizate(mascota.raza)}</li>
      </ul>
      <a href="#" class="btn btn-primary">Adoptar</a>
    </div>
  </section>
`
})
/* 
<section class="card" style="width: 18rem;">
  <img src="${mascota.imagen}" class="card-img-top w-100 h-100" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
    </ul>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</section> */