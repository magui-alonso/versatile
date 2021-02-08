let carritoDeCompras = []

const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')

const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')

const selecModelo = document.getElementById('selecModelo')
selecModelo.addEventListener('change', ()=>{
    console.log(selecModelo.value)
    

    if (selecModelo.value == "all") {
        mostrarProductos(stockProductos)
    } else {
        mostrarProductos(stockProductos.filter((el)=> el.modelo == selecModelo.value))
    }

})


mostrarProductos(stockProductos)

function mostrarProductos(array) {
    contenedorProductos.innerHTML = ''
    array.forEach((productoNuevo) => {
        let div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML += `
                    <div class="contenedor-img">
                        <img class="card-img-top" src=${productoNuevo.img} alt="imagen-producto">
                    </div> 
                    <h5 class="card-title">${productoNuevo.modelo}</h5>
                    <p class="card-text">Color ${productoNuevo.color}</p>
                    <p class="card-text">Talle: ${productoNuevo.talle}</p>
                    <p class="precioProducto">Precio: $${productoNuevo.precio}</p>
                    <button id="boton${productoNuevo.id}" class="boton-agregar"><i class="fas fa-cart-plus"></i></button>
        `
        contenedorProductos.appendChild(div)
        let boton = document.getElementById(`boton${productoNuevo.id}`)


        boton.addEventListener('click', () => {
            agregarAlCarrito(productoNuevo.id)
        })
    })
}

function agregarAlCarrito(id) {

    let productoAgregar = stockProductos.filter((el) => el.id == id)[0]
    carritoDeCompras.push(productoAgregar)
    console.log(carritoDeCompras)
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
        actualizarCarrito()
    })
}

function actualizarCarrito() {
    contadorCarrito.innerText = carritoDeCompras.length
    precioTotal.innerText = carritoDeCompras.reduce((acc, el) => acc + el.precio, 0)
}