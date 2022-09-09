let arrayPersonas = []

class Personas {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido
    }
}

function cargaDeDatos(){

let inputNombre = prompt("Ingrese nombre")
let inputApellido = prompt("Ingrese apellido")
let inputPersona = new Personas(inputNombre, inputApellido) 
arrayPersonas.push(inputPersona)

}

let salida = ""

while(salida !== "salir"){
    cargaDeDatos();
    salida = prompt("Escriba salir si desea dejar de agregar").toLowerCase()   
}

console.log(arrayPersonas)