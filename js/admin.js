function mostrarDiaHora() {
  var fecha = new Date();
  var fecha = new Date();
  var opciones = { day: 'numeric', month: 'short' };
  var diaMes = fecha.toLocaleDateString('es-ES', opciones);
  var hora = fecha.toLocaleTimeString();

  document.getElementById("day").textContent = diaMes;
  document.getElementById("time").textContent = hora;
}

// Actualizar cada segundo
setInterval(mostrarDiaHora, 1000);


function changeView(view) {
  var elements = document.getElementsByTagName("section");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
  document.getElementById(view).style.display = "block";
}


var estadoJornada = false;

function switchJornada() {
  var estado = document.getElementById("semaforo-jornada");
  if (confirm('Esta seguro que quiere cambiar el estado de la jornada?')) {
    if (estadoJornada == true) {
      estado.innerHTML = '<i class="fa-solid fa-circle" style="color: #c01c28;"></i>';
      estadoJornada = false;
    } else {
      estado.innerHTML = '<i class="fa-solid fa-circle" style="color: #13ff4e;"></i>';
      estadoJornada = true;
    }
  }

}
const menuPizzeria = [
  {
    id: 1,
    tipo: "pizza",
    nombre: "Pizza Margarita",
    precio: 8990,
    catalogo: true,
    imagen: "https://cdn.tictuk.com/38852cbb-9318-1769-8aeb-78d1d2dd1443/85885f88-3429-57e2-54d7-78bd9cbe7319.jpeg?a=fcc2b78b-a9a6-4fa1-a80b-5dd555bc55b9",
    enPromocion: false
  },
  {
    id: 2,
    tipo: "pizza",
    nombre: "Pizza Pepperoni",
    precio: 9990,
    catalogo: true,
    imagen: "https://cdn.tictuk.com/38852cbb-9318-1769-8aeb-78d1d2dd1443/9808e35f-ce05-7906-b362-6fe0c817b5a4.jpeg?a=694feb99-5282-4f53-701e-1dcb6abee4b9",
    enPromocion: true
  },
  {
    id: 3,
    tipo: "pizza",
    nombre: "Pizza Hawaiana",
    precio: 10990,
    catalogo: true,
    imagen: "https://cdn.tictuk.com/38852cbb-9318-1769-8aeb-78d1d2dd1443/85885f88-3429-57e2-54d7-78bd9cbe7319.jpeg?a=fcc2b78b-a9a6-4fa1-a80b-5dd555bc55b9",
    enPromocion: false
  },
  {
    id: 4,
    tipo: "pizza",
    nombre: "Pepperoni",
    precio: 75000,
    catalogo: false,
    imagen: "https://www.los-almendros.com.ar/shop/wp-content/uploads/peperoni_2-1.jpg",
    enPromocion: false
  }
  

];

// Función para crear una tarjeta de producto
function crearTarjetaProducto(item) {
  const card = document.createElement("div");
  card.classList.add('card-inventario');
  const imagen = document.createElement('img');
  imagen.src = item.imagen;
  imagen.alt = item.nombre;
  imagen.style.width = '50px';
  card.appendChild(imagen);

  const nombre = document.createElement("h4");
  nombre.textContent = item.nombre;
  nombre.classList.add('titulo')
  card.appendChild(nombre);

  const precio = document.createElement("p");
  precio.classList.add('precio');
  precio.textContent = `$${item.precio.toFixed(0)}`;
  card.appendChild(precio);

  const btn = document.createElement("button");
  btn.textContent = "Editar";
  card.appendChild(btn);
  return card;
}

var containerInventario = document.getElementById("container-inventario");
var containerCatalogo = document.getElementById("container-catalogo");
menuPizzeria.forEach(element => {
  if (element.catalogo == true) {
    containerCatalogo.appendChild(crearTarjetaProducto(element));
  }
  else {
    containerInventario.appendChild(crearTarjetaProducto(element));

  }
}

)

