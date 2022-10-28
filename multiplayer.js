let nombreJ1
let nombreJ2
let j1JSON = localStorage.getItem("j1")
let j2JSON = localStorage.getItem("j2")
let containerPlayers = document.getElementsByClassName('containerPlayers')
let parrafoJ1 = document.getElementById('jugador1')
let parrafoJ2 = document.getElementById('jugador2')

function swalErrorPlayer() {
    Swal.fire({
        title: 'Faltan nombres',
        icon: 'warning'
    })
}

function getData() {

    nombreJ1 = document.getElementById('nombreJ1').value
    nombreJ2 = document.getElementById('nombreJ2').value
    const modal = document.getElementById('exampleModal')
    const form = document.getElementById('form')

    localStorage.setItem("j1", nombreJ1)
    localStorage.setItem("j2", nombreJ2)

    if (nombreJ1 && nombreJ2) {
        modal.className += "hidden"
        form.reset()
    } else {

        Swal.fire({
            title: 'Faltan nombres',
            icon: 'warning',
            backdrop: 'true'
        })
        return false;
    }
}




if (j1JSON && j2JSON) {
    nombreJ1 = j1JSON
    nombreJ2 = j2JSON
}

function showPlayers() {
    parrafoJ1.innerHTML = `<p>${nombreJ1}: ${erroresJ1}</p>`
    parrafoJ1.className = "players"

    parrafoJ2.innerHTML = `<p>${nombreJ2}: ${erroresJ2}</p>`
    parrafoJ2.className = "players"

    

}


function contadorClick(){
    document.getElementById("contador").innerHTML = ++round   
}

showPlayers()    





