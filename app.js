


let carritoDeCompras = []

const contenedorProductos = document.getElementById('contenedor-productos')

stockProductos.forEach((productoNuevo) => {
    let div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML += `
                    <img src=${productoNuevo.img} alt="">
                    <h5>${productoNuevo.nombre}</h5>
                    <p>${productoNuevo.color}</p>
                    <p>Talle: ${productoNuevo.talle}</p>
                    <p class="precioProducto">Precio: $${productoNuevo.precio}</p>
                    <button id="boton${productoNuevo.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
        `
    contenedorProductos.appendChild(div)
    

})