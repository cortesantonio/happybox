var pedidos = [

    {
        id: 2,
        direccion: 'Av. Alessandri',
        estado: 'pendiente',
        cantidades: 3,
        articulos: ['Pizza Margarita', 'Pepsi', 'Nuggets'],
        horaCreacion: '13:52'
    },
    {
        id: 3,
        direccion: 'Av. freire',
        estado: 'en curso',
        cantidades: 2,
        articulos: ['Pizza Pepperoni', 'Pan de Ajo'],
        horaCreacion: '13:47'
    },
    {
        id: 1,
        direccion: 'Av. Siempreviva',
        estado: 'completado',
        cantidades: 2,
        articulos: ['Pizza Barbacoa', 'Pepsi'],
        horaCreacion: '13:42'
    }
]



const container = document.getElementById('containerPedidos');
function renderizarPedidos() {
    const containerPedidos = document.getElementById('containerPedidos');
    containerPedidos.innerHTML = '';
    pedidos.forEach(element => {

        const card = document.createElement('div');
        card.classList.add('card-pedido');

        const divId = document.createElement('div');
        const h3Id = document.createElement('h3');
        h3Id.innerHTML = 'ID PEDIDO';
        const pId = document.createElement('p');
        pId.innerHTML = '#' + element.id;
        divId.appendChild(h3Id);
        divId.appendChild(pId);

        const divDireccion = document.createElement('div');
        const h3Direccion = document.createElement('h3');
        h3Direccion.innerHTML = 'DIRECCION';
        const pDireccion = document.createElement('p');
        pDireccion.innerHTML = element.direccion;
        divDireccion.appendChild(h3Direccion);
        divDireccion.appendChild(pDireccion);

        const divCantidad = document.createElement('div');
        const h3Cantidad = document.createElement('h3');
        h3Cantidad.innerHTML = 'CANTIDADES';
        const pCantidad = document.createElement('p');
        pCantidad.innerHTML = element.cantidades;
        divCantidad.appendChild(h3Cantidad);
        divCantidad.appendChild(pCantidad);

        const divEstado = document.createElement('div');
        const h3Estado = document.createElement('h3');
        h3Estado.innerHTML = 'ESTADO';
        const pEstado = document.createElement('p');

        pEstado.innerHTML = element.estado;

        if (element.estado === 'completado')
            pEstado.style.color = 'rgb(0, 196, 0)';
        else if (element.estado === 'pendiente')
            pEstado.style.color = 'rgb(196, 0, 0)';
        else if (element.estado === 'en curso')
            pEstado.style.color = 'rgb(196, 127, 0)';

        pEstado.style.fontWeight = 'bold';
        pEstado.style.textTransform = 'uppercase';
        divEstado.appendChild(h3Estado);
        divEstado.appendChild(pEstado);

        const divHora = document.createElement('div');
        const h3Hora = document.createElement('h3');
        h3Hora.innerHTML = 'HORA DE CREACION';
        const pHora = document.createElement('p');
        pHora.innerHTML = element.horaCreacion;
        divHora.appendChild(h3Hora);
        divHora.appendChild(pHora);

        const btn = document.createElement('button');
        btn.style.display = 'none';
        if (element.estado == 'pendiente') {
            btn.innerHTML = 'TOMAR PEDIDO';
            btn.style.display = 'block';
            btn.addEventListener('click', () => tomarPedido(element.id));
        }

        card.appendChild(divId);
        card.appendChild(divDireccion);
        card.appendChild(divCantidad);
        card.appendChild(divEstado);
        card.appendChild(divHora);
        card.appendChild(btn);

        container.appendChild(card)
    });

}

function tomarPedido(idPedido) {
    const indicePedido = pedidos.findIndex(pedido => pedido.id === idPedido);

    if (indicePedido !== -1) {
        const pedidoEliminado = pedidos.splice(indicePedido, 1)[0];

        // Crear la tarjeta con la información del pedido eliminado
        const tarjeta = document.createElement('div');
        
        tarjeta.classList.add('tarjeta');

        const h3Id = document.createElement('h3');
        h3Id.innerHTML = 'ID PEDIDO';
        const pId = document.createElement('p');
        pId.innerHTML = pedidoEliminado.id;
        tarjeta.appendChild(h3Id);
        tarjeta.appendChild(pId);

        const h3Direccion = document.createElement('h3');
        h3Direccion.innerHTML = 'DIRECCION';
        const pDireccion = document.createElement('p');
        pDireccion.innerHTML = pedidoEliminado.direccion;
        tarjeta.appendChild(h3Direccion);
        tarjeta.appendChild(pDireccion);

        const h3Cantidad = document.createElement('h3');
        h3Cantidad.innerHTML = 'CANTIDADES';
        const pCantidad = document.createElement('p');
        pCantidad.innerHTML = pedidoEliminado.cantidades;
        tarjeta.appendChild(h3Cantidad);
        tarjeta.appendChild(pCantidad);

        const h3Articulos = document.createElement('h3');
        h3Articulos.innerHTML = 'ARTICULOS';
        const pArticulos = document.createElement('p');
        pArticulos.classList.add('articulos');
        
        pArticulos.innerHTML = pedidoEliminado.articulos.join('<br/> ');
        tarjeta.appendChild(h3Articulos);
        tarjeta.appendChild(pArticulos);



        const h3Hora = document.createElement('h3');
        h3Hora.innerHTML = 'HORA DE CREACION';
        const pHora = document.createElement('p');
        pHora.innerHTML = pedidoEliminado.horaCreacion;
        tarjeta.appendChild(h3Hora);
        tarjeta.appendChild(pHora);

        const btn = document.createElement('button');
        btn.innerHTML = 'PEDIDO LISTO';
        btn.style.borderTopRightRadius='20px';
        btn.style.borderBottomRightRadius='20px';
        tarjeta.appendChild(btn);

        // Agregar la tarjeta al contenedor
        const contenedorTarjetas = document.getElementById('pedidoTomado');
        contenedorTarjetas.appendChild(tarjeta);

        console.log('Pedido eliminado:', pedidoEliminado);
    } else {
        console.log('No se encontró ningún pedido con el ID especificado.');
    }
    renderizarPedidos();
}



renderizarPedidos()