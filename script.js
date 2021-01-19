//Clase 1

/*var nombre = prompt('Ingrese su nombre aquí:');
console.log("Nombre: " + nombre);

var edad = parseInt(prompt('Ingrese su edad'));

var año = 2021;
var edadInt = parseInt(edad);
var fechaNacimiento = año-edadInt; 

console.log("Fecha de nacimiento: " + fechaNacimiento);

var curso = prompt('Ingrese nombre de su curso');
var camada = prompt('Ingrese numero de camada');

alert (curso +""+ camada);*/



/*Clase 2
//Ejercicio 1
var numeroMil = prompt ("Ingrese un numero mayor o menor a mil");

if (numeroMil >= 1000) {
    console.log ("Usted ha ingresado un numero mayor a mil");
}
else {
    console.log ("Usted ha ingresado un numero menor a mil")
 }

//Ejercicio 2
var saludo = prompt('Ingrese un saludo');

if (saludo === "hola") {
    console.log ("¡Buenos dias!");
}
else {
    console.log ("Usted se ha olvidado de saludar")
}

//Ejercicio 3
var numero = prompt ("Ingrese un numero")

if (numero >= 10 && numero <=50) {
    console.log ("Acertado")
}
else {
   console.log ("Intente nuevamente")
}*/


//Clase 3
//Ejercicio 1

/*function notaFinal() {
    var nota = parseInt(prompt("Ingrese una nota "));

    while (nota < 1 || nota > 10) {
        alert("Su nota es invalida");
        nota = parseInt(prompt("Ingrese de nuevo la nota "));
    }

    if (nota >= 6 && nota <= 10) {
        alert("Felicitaciones! Aprobaste");

    } else {
        alert("Desaprobado");
    }
    return nota;
}

console.log(notaFinal());*/

//Ejercicio 2-3

/*function promedioFinalAlumnos() {
    var nota1 = parseInt(prompt("Ingrese nota primer trimestre"));
    var nota2 = parseInt(prompt("Ingrese nota segundo trimestre"));
    var nota3 = parseInt(prompt("Ingrese nota tercer trimestre"));

    while (nota1 < 1 || nota2 < 1 || nota3 < 1 || nota1 > 10 || nota2 > 10 || nota3 > 10) {
        alert("Su nota es invalida");
        nota1 = parseInt(prompt("Ingrese de nuevo la nota de primer trimestre"));
        nota2 = parseInt(prompt("Ingrese de nuevo la nota de segundo trimestre"));
        nota3 = parseInt(prompt("Ingrese de nuevo la nota de tercer trimestre"));
    }

    var promedioFinal = (nota1 + nota2 + nota3) / 3;

    return promedioFinal;
}


for (var i = 0; i < 3; i++) {
    console.log("Alumno nro " + i)

    var promedioAnual = promedioFinalAlumnos();
    
if (promedioAnual>= 6 && promedioAnual <= 10) {
        console.log("Felicitaciones!! Aprobaste el año");
    } else {
        console.log("Desaprobado, deberas volver a rendir");
    }
}*/


//Clase 4
//Ejercicio 1


