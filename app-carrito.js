const contenedorCarrito = document.getElementById('carrito-contenedor')
const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')

function revisarLocal() {
    let carritoLocal = JSON.parse(localStorage.getItem('carritoDeCompras'))
    if (carritoLocal) {
        carritoLocal.forEach((el)=>{
            agregarAlCarrito(el.id)
        })
    }
}
function agregarAlCarrito(id) {

    let productoAgregar = stockProductos.filter((el) => el.id == id)[0]
    carritoDeCompras.push(productoAgregar)
    
    actualizarCarrito()

    let div = document.createElement('div')
    div.classList.add('productoEnCarrito')
    div.innerHTML = `
        <img class="imagenProdCarrito" src=${productoAgregar.img} alt="imagen-producto">
        <div class="textoProdCarrito">
            <p>${productoAgregar.modelo}</p>
            <p>Color ${productoAgregar.color}</p>
        </div>
        <p>Precio: $${productoAgregar.precio}</p>
        <button id="eliminar${productoAgregar.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
    `
    contenedorCarrito.appendChild(div)
    let botonEliminar = document.getElementById(`eliminar${productoAgregar.id}`)

    botonEliminar.addEventListener('click', () => {
        botonEliminar.parentElement.remove()
        carritoDeCompras = carritoDeCompras.filter((el) => el.id != productoAgregar.id)
        localStorage.setItem('carritoDeCompras', JSON.stringify(carritoDeCompras))    
        actualizarCarrito()
    })
}

function actualizarCarrito() {
    contadorCarrito.innerText = carritoDeCompras.length
    precioTotal.innerText = carritoDeCompras.reduce((acc, el) => acc + el.precio, 0)
}
