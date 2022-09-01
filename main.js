/* --------OBJETOS-------- */
const productos = [
    {
      id: 0,
      nombre: "Jabon liquido",
      precio: 1000,
      img: "'./img/muestra.jpg'",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      mensaje: "https://api.whatsapp.com/send?phone=5493424763337&text=Estoy%20interesado%20en%20el%20jabon%20liquido"
    },
    {
      id: 1,
      nombre: "Jabon liquido",
      precio: 1000,
      img: "'./img/muestra.jpg'",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      mensaje: "https://api.whatsapp.com/send?phone=5493424763337&text=Estoy%20interesado%20en%20el%20jabon%20liquido"
    },
    {
      id: 2,
      nombre: "Jabon liquido",
      precio: 1000,
      img: "'./img/muestra.jpg'",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      mensaje: "https://api.whatsapp.com/send?phone=5493424763337&text=Estoy%20interesado%20en%20el%20jabon%20liquido"
    },
    {
      id: 3,
      nombre: "Jabon liquido",
      precio: 1000,
      img: "'./img/muestra.jpg'",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      mensaje: "https://api.whatsapp.com/send?phone=5493424763337&text=Estoy%20interesado%20en%20el%20jabon%20liquido"
    },
    {
      id: 4,
      nombre: "Jabon liquido",
      precio: 1000,
      img: "'./img/muestra.jpg'",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      mensaje: "https://api.whatsapp.com/send?phone=5493424763337&text=Estoy%20interesado%20en%20el%20jabon%20liquido"
    },
];


function renderizarProductos(){
let lista = document.getElementById('lista');
for (const producto of productos){ 
lista.innerHTML += ` 
<div class="card m-2">
  <img src=${producto.img} class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">${producto.descripcion}</p>
    <a href="${producto.mensaje}" class="btn btn-primary">Comprar</a>
  </div>
</div>
`;

}
 }

  renderizarProductos();
