//Entrega proyecto final

const productosVersatile = [{
        id: 1,
        nombre: "Biker Lycra",
        precio: 1000
    },
    {
        id: 2,
        nombre: "Biker Lycra",
        precio: 1000
    },
    {
        id: 3,
        nombre: "Biker Lycra",
        precio: 1000
    },
    {
        id: 4,
        nombre: "Biker Saten",
        precio: 1100
    },
    {
        id: 5,
        nombre: "Biker Saten",
        precio: 1100
    },
    {
        id: 6,
        nombre: "Biker Saten",
        precio: 1100
    },
    {
        id: 7,
        nombre: "Biker Tornasolada",
        precio: 1300
    },
    {
        id: 8,
        nombre: "Biker Tornasolada",
        precio: 1300
    },

]

productosVersatile.forEach((producto) => {
    console.log(producto)
})

let carrito = []

function agregarAlCarrito(id) {

    let productoElegido = productosVersatile.filter((el) => el.id == id)
    carrito.push(productoElegido[0])
}

agregarAlCarrito(5)
agregarAlCarrito(3)
agregarAlCarrito(2)

console.log(carrito)

console.log(carrito.reduce((acc, el) => acc + el.precio, 0))

