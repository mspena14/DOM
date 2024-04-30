let header = document.createElement('header')
let main = document.createElement('main')
let h1 = document.createElement('h1')
h1.textContent = "Conociendo bootstrap"

let p = document.createElement('p')
let span1 = document.createElement('span')
span1.textContent = `"Las herramientas son los aliados que transforman nuestra visión en realidad, cada tornillo apretado, cada pieza ajustada, es un paso más hacia el éxito. ¡Con las herramientas adecuadas, ningún desafío es insuperable!"`
p.textContent = `Bootstrap es un popular framework de código abierto desarrollado por Twitter. Se utiliza para la creación de sitios web y aplicaciones web responsivas y móviles de manera rápida y eficiente. Bootstrap proporciona un conjunto de herramientas y componentes front-end, como cuadrículas, tipografías, formularios y botones preestilizados, que simplifican el proceso de diseño y desarrollo web. Además, está basado en HTML, CSS y JavaScript, lo que lo hace accesible para una amplia gama de desarrolladores web. Gracias a su versatilidad y facilidad de uso, Bootstrap se ha convertido en una herramienta fundamental en el arsenal de muchos diseñadores y desarrolladores web.
Ahora es tu turno de conocerlo, para ello busca respuesta a estas preguntas`

header.appendChild(h1)
header.appendChild(span1)
header.appendChild(p)
document.body.appendChild(header)

let section = document.createElement('section')
let ul = document.createElement('ul')

let li1 = document.createElement('li')
let pregunta1 = document.createElement('h3')
pregunta1.textContent = "¿Cómo aplicar estilo con bootstrap?"
let respuesta1 = document.createElement('p')
respuesta1.textContent = `Primero que todo se debe importar los estilos de bootstrap mediante el link en el html --> <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"> y para que se apliquen los estilos se debe utilir las clases predefinidas por Bootstrap`
li1.appendChild(pregunta1)
li1.appendChild(respuesta1)
ul.appendChild(li1)

let li2 = document.createElement('li')
let pregunta2 = document.createElement('h3')
pregunta2.textContent = "¿Qué componentes tiene bootstrap?"
let respuesta2 = document.createElement('p')
respuesta2.textContent = `
1. Navbar (Barra de navegación): Una barra de navegación responsiva y personalizable que permite la navegación entre diferentes secciones del sitio web.

2. Carousel (Carrusel): Un carrusel de imágenes y contenido deslizable que permite mostrar múltiples elementos en un espacio reducido.

3. Modal (Modal): Una ventana emergente que muestra contenido adicional o formularios sin necesidad de cambiar de página.
Accordion (Acordeón): Un panel desplegable que permite mostrar y ocultar contenido de forma interactiva.

4. Cards (Tarjetas): Tarjetas de contenido con imagen, título y descripción que se utilizan para presentar información de manera visualmente atractiva.

5. Forms (Formularios): Estilos y elementos mejorados para crear formularios más agradables y fáciles de usar.

6. Buttons (Botones): Botones con diferentes estilos y tamaños para llamar la atención del usuario y realizar acciones.

7. Alerts (Alertas): Mensajes de notificación que permiten mostrar información importante o mensajes de error.

8. Dropdowns (Menús desplegables): Menús que se despliegan al hacer clic y permiten seleccionar opciones.

9. Collapse (Colapso): Contenido que se puede colapsar o expandir para ahorrar espacio en la página.

10. Tabs (Pestañas): Pestañas que permiten organizar el contenido en diferentes secciones.

11. Pagination (Paginación): Permite dividir grandes conjuntos de datos en páginas más pequeñas para facilitar la navegación.

12. Badges (Insignias): Elementos visuales que muestran información destacada, como notificaciones o conteos.

13. Progress (Barra de progreso): Barra que muestra el avance de una tarea o proceso.

14. Spinners (Indicadores de carga): Iconos animados que indican que se está cargando o esperando contenido.

15. Tooltips y Popovers (Información emergente): Elementos emergentes que muestran información adicional al pasar el cursor sobre un elemento.

16. Toasts (Mensajes temporales): Mensajes temporales y no intrusivos que se muestran en la parte superior o inferior de la pantalla.

17. List group (Grupo de listas): Listas de elementos con estilos personalizados que pueden incluir encabezados y contenido adicional.

18. Breadcrumb (Migas de pan): Permite crear una ruta de navegación jerárquica que muestra la ubicación actual del usuario dentro del sitio web.

19. Navs (Navegaciones): Ofrece estilos y funcionalidades para crear listas de enlaces de navegación.

Con todos estos componentes disponibles en Bootstrap 5, tienes a tu disposición una amplia gama de herramientas para crear sitios web altamente interactivos, atractivos y totalmente responsivos. Para terminar el tutorial, veamos en la siguiente sección algunas plantillas y temas gratis que puedes descargar y utilizar en tus proyectos.`
li2.appendChild(pregunta2)
li2.appendChild(respuesta2)
ul.appendChild(li2)

let li3 = document.createElement('li')
let pregunta3 = document.createElement('h3')
pregunta3.textContent = "¿De dónde puedo descargar los componentes de bootstrap?"
let respuesta3 = document.createElement('p')
respuesta3.textContent = `Puedes descargar los componentes de Bootstrap desde el sitio web oficial de Bootstrap: https://getbootstrap.com/docs/5.0/getting-started/download/`
li3.appendChild(pregunta3)
li3.appendChild(respuesta3)
ul.appendChild(li3)


section.appendChild(ul)
main.appendChild(section)
document.body.appendChild(main)
