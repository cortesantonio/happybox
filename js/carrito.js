const menuPizzeria = [
  {
    id: 1,
    tipo: "pizza",
    nombre: "Pizza Margarita",
    precio: 8990,
    imagen: "https://cdn.tictuk.com/38852cbb-9318-1769-8aeb-78d1d2dd1443/85885f88-3429-57e2-54d7-78bd9cbe7319.jpeg?a=fcc2b78b-a9a6-4fa1-a80b-5dd555bc55b9",
    enPromocion: false
  },
  {
    id: 2,
    tipo: "pizza",
    nombre: "Pizza Pepperoni",
    precio: 9990,
    imagen: "https://cdn.tictuk.com/38852cbb-9318-1769-8aeb-78d1d2dd1443/9808e35f-ce05-7906-b362-6fe0c817b5a4.jpeg?a=694feb99-5282-4f53-701e-1dcb6abee4b9",
    enPromocion: true
  },
  {
    id: 3,
    tipo: "pizza",
    nombre: "Pizza Hawaiana",
    precio: 10990,
    imagen: "https://cdn.tictuk.com/38852cbb-9318-1769-8aeb-78d1d2dd1443/85885f88-3429-57e2-54d7-78bd9cbe7319.jpeg?a=fcc2b78b-a9a6-4fa1-a80b-5dd555bc55b9",
    enPromocion: false
  },
  {
    id: 4,
    tipo: "acompañamiento",
    nombre: "Pan de Ajo",
    precio: 3990,
    imagen: "https://cdn.tictuk.com/38852cbb-9318-1769-8aeb-78d1d2dd1443/bf6c3fff-1ac9-351b-3504-1fa9691f17c0.jpeg?a=496c95ed-eaaf-5d67-b854-edc689713139",
    enPromocion: false
  },
  {
    id: 5,
    tipo: "acompañamiento",
    nombre: "Palitos de Queso",
    precio: 4990,
    imagen: "https://cdn.tictuk.com/38852cbb-9318-1769-8aeb-78d1d2dd1443/bf6c3fff-1ac9-351b-3504-1fa9691f17c0.jpeg?a=496c95ed-eaaf-5d67-b854-edc689713139",
    enPromocion: true
  },
  {
    id: 6,
    tipo: "pizza",
    nombre: "Pizza Barbacoa",
    precio: 13990,
    imagen: "https://cdn.tictuk.com/38852cbb-9318-1769-8aeb-78d1d2dd1443/7a58d7ff-8580-5554-b58f-3c794f8d5043.jpeg?a=36930f95-dd0a-912b-150b-e935284cfcb8",
    enPromocion: false
  },
  {
    id: 7,
    tipo: "bebida",
    nombre: "Pepsi",
    precio: 1990,
    imagen: "https://cdn.tictuk.com/38852cbb-9318-1769-8aeb-78d1d2dd1443/6a1b3dd1-eb35-85aa-d5ed-e3f87c0deebd.jpeg?a=226551ee-410c-6814-6e04-a53fcd239ce0",
    enPromocion: false
  },
  {
    id: 8,
    tipo: "bebida",
    nombre: "Limon Soda",
    precio: 990,
    imagen: "https://cdn.tictuk.com/38852cbb-9318-1769-8aeb-78d1d2dd1443/6c9b664e-b500-b40e-d95c-91d225d5944c.jpeg?a=17240f55-b2b6-1d9b-d5ce-8e1c9841cca6",
    enPromocion: false
  },
  {
    id: 9,
    tipo: "acompañamiento",
    nombre: "Nuggets",
    precio: 5990,
    imagen: "https://cdn.tictuk.com/38852cbb-9318-1769-8aeb-78d1d2dd1443/ab780a7a-6491-d080-0d38-76f14f2a08f7.jpeg?a=0bd09612-f2f3-bb25-baf2-486e4945248c",
    enPromocion: false
  },
  {
    id: 10,
    tipo: "pizza",
    nombre: "Pizza Calzone",
    precio: 14990,
    imagen: "https://cdn.tictuk.com/38852cbb-9318-1769-8aeb-78d1d2dd1443/e6834272-03db-7831-6716-8cd0f3e1fbb2.jpeg?a=154bf0d8-e981-5892-2730-3e012a1968f3",
    enPromocion: true
  }
];


const carrito = [];

// Función para agregar un elemento al carrito
function agregarAlCarrito(item) {
  carrito.push(item);
  actualizarCarrito();
}

// Función para eliminar un elemento del carrito
function eliminarDelCarrito(item) {
  const index = carrito.indexOf(item);
  if (index > -1) {
    carrito.splice(index, 1);
    actualizarCarrito();
  }
}

// Función para mostrar los productos en promoción
function mostrarProductosEnPromocion() {
  const promocionContainer = document.getElementById("promos");
  promocionContainer.innerHTML = "";

  const promocionItems = menuPizzeria.filter(item => item.enPromocion);
  promocionItems.forEach(item => {
    const card = crearTarjetaProducto(item);
    promocionContainer.appendChild(card);
  });
}

// Función para mostrar los productos sin promoción
function mostrarProductosSinPromocion() {
  const sinPromocionContainer = document.getElementById("itemContainer");
  sinPromocionContainer.innerHTML = "";

  const sinPromocionItems = menuPizzeria.filter(item => !item.enPromocion);
  sinPromocionItems.forEach(item => {
    const card = crearTarjetaProducto(item);
    sinPromocionContainer.appendChild(card);
  });
}

// Función para crear una tarjeta de producto
function crearTarjetaProducto(item) {
  const card = document.createElement("div");
  card.classList.add(item.enPromocion ? "promociones" : "itemContainer");
  if (item.enPromocion == false) {
    card.classList.add("card");
    card.classList.add(item.tipo);

  } else {
    card.classList.add("cardPromos");

  }

  const imagen = document.createElement('img');
  imagen.src = item.imagen;
  imagen.alt= item.nombre;
  imagen.style.width= '100%';
  card.appendChild(imagen);

  const nombre = document.createElement("h3");
  nombre.textContent = item.nombre;
  nombre.classList.add('titulo')
  card.appendChild(nombre);

  const precio = document.createElement("p");
  precio.classList.add('precio');
  precio.textContent = `$${item.precio.toFixed(0)}`;
  card.appendChild(precio);


  const botonAgregar = document.createElement("button");
  botonAgregar.innerHTML = '<i class="fa-solid fa-cart-plus" style="color: #ffffff;"></i>';
  botonAgregar.addEventListener("click", () => {
    agregarAlCarrito(item);
  });
  card.appendChild(botonAgregar);

  return card;
}

// Función para actualizar el contenido del carrito
function actualizarCarrito() {
  const carritoContainer = document.getElementById("container-cart");
  carritoContainer.innerHTML = "";

  carrito.forEach(item => {
    const card = document.createElement("tr");

    const cardItem = document.createElement("td");
    const imagen = document.createElement("img");
    imagen.alt = item.nombre;
    imagen.src= item.imagen;
    imagen.style.width= '75px'
    cardItem.appendChild(imagen);

    const nombre = document.createElement("h4");
    nombre.textContent = item.nombre;
    cardItem.appendChild(nombre);

    const precio = document.createElement("p");
    precio.textContent = `$${item.precio.toFixed(0)}`;
    cardItem.appendChild(precio);

    const botonEliminar = document.createElement("button");
    botonEliminar.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    botonEliminar.addEventListener("click", () => {
      eliminarDelCarrito(item);
    });
    cardItem.appendChild(botonEliminar);
    card.append(cardItem)
    carritoContainer.appendChild(card);
  });

  mostrarTotalPedido();
}

// Función para mostrar el total del pedido
function mostrarTotalPedido() {
  const totalContainer = document.getElementById("resumen");
  const total = carrito.reduce((acumulador, item) => acumulador + item.precio, 0);
  totalContainer.textContent = `TOTAL DEL PEDIDO: $${total.toFixed(0)}`;

  const valueItemCart = document.getElementById('valueItemCart');
  valueItemCart.innerHTML = 0;
  valueItemCart.innerHTML = carrito.length;
}

// Mostrar los productos en promoción y sin promoción
mostrarProductosEnPromocion();
mostrarProductosSinPromocion();