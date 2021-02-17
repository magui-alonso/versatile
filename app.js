let carritoDeCompras = []

const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')

const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')

const selecModelo = document.getElementById('selecModelo')

selecModelo.addEventListener('change', () => {
    console.log(selecModelo.value)

    if (selecModelo.value == "all") {
        mostrarProductos(stockProductos)
    } else {
        mostrarProductos(stockProductos.filter((el) => el.modelo == selecModelo.value))
    }

})


mostrarProductos(stockProductos)
revisarLocal()

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
                    <p class="texto">Producto agregado al carrito.</p>
        `
        contenedorProductos.appendChild(div)
        let boton = document.getElementById(`boton${productoNuevo.id}`)


        boton.addEventListener('click', () => {
            agregarAlCarrito(productoNuevo.id)
        })
    })
}

function agregarAlCarrito(id) {

    let productoAgregar = stockProductos.find((el) => el.id == id)

    let productoEnCarrito = document.getElementById(id)
    if (productoEnCarrito) {
        let inputCantidad = document.getElementById(`cantidadProducto${id}`)
        let cambiarValor = new Event('change')
        inputCantidad.value = `${Number.parseInt(inputCantidad.value) + 1}`
        inputCantidad.dispatchEvent(cambiarValor)

    } else {
        carritoDeCompras.push(productoAgregar)
        localStorage.setItem('carritoDeCompras', JSON.stringify(carritoDeCompras))
        actualizarCarrito()
        let div = document.createElement('div')
        div.id = id
        div.classList.add('productoEnCarrito')
        div.innerHTML = `
            <img class="imagenProdCarrito" src=${productoAgregar.img} alt="imagen-producto">
            <div class="textoProdCarrito">
                <p>${productoAgregar.modelo}</p>
                <p>Color ${productoAgregar.color}</p>
            </div>
            <div class="textoProdCarrito">
                <div class="cantidad">
                    <p class="number-text">Cantidad:</p>
                    <input id="cantidadProducto${id}" class="number" type="number" min="1" max="10" value="1">
                </div>
                <p>Precio: $${productoAgregar.precio}</p>
            </div>
            <button id="eliminar${productoAgregar.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
            
        `
        contenedorCarrito.appendChild(div)
        let botonEliminar = document.getElementById(`eliminar${productoAgregar.id}`)
        let inputCantidad = document.getElementById(`cantidadProducto${id}`)

        function eliminar() {
            botonEliminar.parentElement.remove()
            carritoDeCompras = carritoDeCompras.filter((el) => el.id != productoAgregar.id)
            localStorage.setItem('carritoDeCompras', JSON.stringify(carritoDeCompras))
            actualizarCarrito()
        }
        let cantidadValorAnterior = Number.parseInt(inputCantidad.value)
        inputCantidad.addEventListener('change', (e) => {
            let cantidadNuevoValor = Number.parseInt(e.target.value)
            if (cantidadNuevoValor >= cantidadValorAnterior) {
                carritoDeCompras.push(productoAgregar)
                localStorage.setItem('carritoDeCompras', JSON.stringify(carritoDeCompras))
                actualizarCarrito()
            } else {
                let posicionProducto = carritoDeCompras.find(producto => producto.id === id)
                carritoDeCompras.splice(posicionProducto, 1)
                localStorage.setItem('carritoDeCompras', JSON.stringify(carritoDeCompras))
                actualizarCarrito()
            }
            cantidadValorAnterior = cantidadNuevoValor
        })

        botonEliminar.addEventListener('click', eliminar)
    }
}

function actualizarCarrito() {
    contadorCarrito.innerText = carritoDeCompras.length
    precioTotal.innerText = carritoDeCompras.reduce((acc, el) => acc + el.precio, 0)
}

function revisarLocal() {
    let carritoLocal = JSON.parse(localStorage.getItem('carritoDeCompras'))
    if (carritoLocal) {
        carritoLocal.forEach((el) => {
            agregarAlCarrito(el.id)
        })
    }
}


$('#btn-seguirCompra').click(function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $(".titulo-productos").offset().top
    }, 500);
});

$(".boton-agregar.id").click(function () {
    $("p.texto").fadeIn(2000,);
});