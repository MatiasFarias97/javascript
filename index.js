
// const contenedorPersonas = document.getElementById("contenedorPersonas")


// listaPersonas.forEach((persona) =>{
    //     let column = document.createElement("div")
    //     column.className = "col-md-4 mt-3"
    // column.id = "columna" + producto.id;
    // column.id = `columna-${persona.id}`
    // column.innerHTML = `
    // <div class="card text-white bg-dark mb-3 mx-2"> 
    //     <div> 
    //         <p class="card-title p-1"> ${persona.nombre} ${persona.apellido}</p>
    //     </div>
    
    // </div>
    // `
    // contenedorPersonas.append(column)
    // })
    
    // ==== EVENTO GENERALES EN MOUSE ====
    
    
    // ==== EVENTOS GENERALES EN TECLADO ====
    

    // ==== EVENTO SUBMIT ====
    // let miFormulario = document.getElementById("formulario")
    
    // miFormulario.onsubmit = (event) => validarFormulario(event);
    
    // function validarFormulario(event){
    //     event.preventDefault(),
    //     console.log(event),
    //     console.log("formulario enviado")
    // }
    
let formulario 
let inputNombre
let inputApellido
let inputTelefono
let inputEmail
    
let contenedorUsuarios

let listaUsuarios = []
    
class Usuario {
    constructor(nombre, apellido, telefono, email) {
        this.nombre = nombre
        this.apellido = apellido
        this.telefono = telefono
        this.email = email
    }
}

function inicializarElementos(){
    formulario = document.getElementById("formulario")
    inputNombre = document.getElementById("inputNombre")
    inputApellido = document.getElementById("inputApellido")
    inputTelefono = document.getElementById("inputTelefono")
    inputEmail = document.getElementById("inputEmail")
    contenedorUsuarios = document.getElementById("contenedorUsuarios")
}

function inicializarEventos(){
    formulario.onsubmit = (event) => validarFormulario (event)
}

function validarFormulario(event){
     event.preventDefault()
     inputNombre = inputNombre.value
     inputApellido = inputApellido.value
     inputTelefono = parseInt(inputTelefono.value)
     inputEmail = inputEmail.value

    let usuario = new Usuario(
        inputNombre, 
        inputApellido, 
        inputTelefono, 
        inputEmail
    )

    listaUsuarios.push(usuario)
    formulario.reset()
    console.log(listaUsuarios)
    mostrarUsuarios()
}

function mostrarUsuarios(){
    contenedorUsuarios.innerHTML = ""
    listaUsuarios.forEach((persona) =>{
        let divUser = document.createElement("div")
        divUser.className = "col-md-4 mt-3"
        divUser.id = `user-${persona.apellido}-${persona.nombre}`
        divUser.innerHTML = `
    <div class="card">
        <div class="card-body">
             <p class="card-text">
                ${persona.nombre} ${persona.apellido}
             </p>
        </div>
        <div class="card-body">
             <p class="card-text">
                 Telefono: ${persona.telefono}
            </p>
        </div>
        <div class="card-body">
            <p class="card-text">
                Email: ${persona.email}
            </p>
        </div>
    </div>
    <div class="card-footer">
            <button class="btn btn-danger">Eliminar</button>
        </div>
    
`
contenedorUsuarios.append(divUser)

    })
}


function main(){
    inicializarElementos()
    inicializarEventos()
    validarFormulario()
}

main()





// let usuario = new crearUsuario(
//     nombre = document.getElementById(nombre),
//     apellido = document.getElementById(apellido),
//     telefono = document.getElementById(telefono),
//     email = document.getElementById(email)

// )

// listaUsuarios.push(usuario)

// console.log(usuario)

// console.log(listaUsuarios,"array")
