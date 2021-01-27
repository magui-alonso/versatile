//Clase 6

function ProductosEnStock(modelo, talle, color) {
    this.modelo = modelo;
    this.talle = talle;
    this.color = color;
    
}

let carrito = [
    new ProductosEnStock("Biker Lycra", "S/M/L", "Negra"),
    new ProductosEnStock("Biker Lycra", "S/M/L", "Rosa"),
    new ProductosEnStock("Biker Lycra", "S/M/L", "Verde"),
    new ProductosEnStock("Biker Saten", "S/M/L", "Negro"),
    new ProductosEnStock("Biker Saten", "S/M/L", "Suela"),
    new ProductosEnStock("Biker Saten", "S/M/L", "Blanca"),
    new ProductosEnStock("Biker Tornasolada", "S/M/L", "Azul"),
    new ProductosEnStock("Biker Tornasolada", "S/M/L", "Champagne"),
    

]

console.log (carrito);
for(let i=0; i<carrito.length; i++){
    console.log (carrito[i]); 
}


const Productos = [{
        id: "1"
        nombre: "Biker Lycra",
        precio: 1000
    },
    {
        id: "2"
        nombre: "Biker Lycra",
        precio: 1000
    },
    {
        id: "3"
        nombre: "Biker Lycra",
        precio: 1000
    },
    {
        id: "4"
        nombre: "Biker Saten",
        precio: 1100
    },
    {
        id: "5"
        nombre: "Biker Saten",
        precio: 1100
    },
    {
        id: "6"
        nombre: "Biker Saten",
        precio: 1100
    },
    {
        id: "7"
        nombre: "Biker Tornasolada",
        precio: 1300
    },
    {
        id: "8"
        nombre: "Biker Tornasolada",
        precio: 1300
    },

]
Productos.forEach((el) => {
    console.log(el.nombre)
})


console.log(Productos.map((el) => el.precio))

function sumar(array) {
    sumaTotal = 0
    for (let el of array) {
        sumaTotal += el.precio;
    }
    return sumaTotal
}

console.log(Productos.reduce((acc, el) => acc + el.precio, 0))