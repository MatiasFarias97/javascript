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

let inputFilter = prompt("Ingrese persona a buscar")
let filterPersona = arrayPersonas.filter(filterPersona => filterPersona.nombre === inputFilter);

alert("Se muestra por consola el resultado")
console.log(filterPersona)




let eliminarPersona = prompt(`Desea eliminar a ${inputFilter} escriba SI`).toLowerCase()
    if(eliminarPersona === "si"){
      arrayPersonas.pop(inputFilter)
    }

console.log(arrayPersonas,"array nuevo")

