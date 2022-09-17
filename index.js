const contenedorPersonas = document.getElementById("contenedorPersonas")

const listaPersonas = [
    {
        id: 1,
        nombre: "Matias",
        apellido: "Farias",
        
    },
    {
        id: 2,
        nombre: "Ruben",
        apellido: "Ernesto",
        
    },
    {
        id: 3,
        nombre: "Gabriela",
        apellido: "Villarroel",
    },
    {
        id: 4,
        nombre: "Sofia",
        apellido: "Belen",
    }
    
]

listaPersonas.forEach((persona)  =>{
    let column = document.createElement("div")
    column.className = "col-md-4 mt-3"
    // column.id = "columna" + producto.id;
    column.id = `columna-${persona.id}`
    column.innerHTML = `
    <div class="card text-white bg-dark mb-3 mx-2"> 
        <div> 
            <p class="card-title p-1"> ${persona.nombre} ${persona.apellido}</p>
        </div>
    
    </div>
    `
    contenedorPersonas.append(column)
})

// ==== EVENTO GENERALES EN MOUSE ====


// ==== EVENTOS GENERALES EN TECLADO ====
