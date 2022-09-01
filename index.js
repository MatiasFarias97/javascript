function adivinanzaAraña(){
    let respuesta = ""
    let salida = ""
    while(respuesta != "araña"){
        respuesta = prompt("En alto vive, en alto mora; teje que teje, la tejedora. La respuesta es...").toLowerCase()
        if(respuesta != "araña"){
            salida = prompt("FALLASTE. Toca ACEPTAR para volver a intentar o ESC para salir").toLowerCase()
        }else{
            alert("Felicitaciones has adivinado!")
            }
        if(salida == "esc"){
            break
        }
    }
}

function adivinanzaSilencio(){
    let respuesta = ""
    let salida = ""
    while(respuesta != "el silencio"){
        respuesta = prompt("Si lo nombro, lo rompo. La respuesta es...").toLowerCase()
        if(respuesta != "el silencio"){
            salida = prompt("FALLASTE. Toca ACEPTAR para volver a intentar o ESC para salir").toLowerCase()
        }else{
            alert("Felicitaciones has adivinado!")
        }
        if(salida == "esc"){
            break
        }
    }
}

function adivinanzaMusica(){
    let respuesta = ""
    let salida = ""
    while(respuesta != "la musica"){
        respuesta = prompt("No la palpas pero si la oyes ¿Qué es?").toLowerCase()
        if(respuesta != "la musica"){
            salida = prompt("FALLASTE. Toca ACEPTAR para volver a intentar o ESC para salir").toLowerCase()
        }else{
            alert("Felicitaciones has adivinado!")
            }
        if(salida == "esc"){
            break
        }
    }
}

function adivinanzaPeine(){
    let respuesta = ""
    let salida = ""
    while(respuesta != "el peine"){
        respuesta = prompt("Tiene dientes pero no muerde. ¿Qué es?").toLowerCase()
        if(respuesta != "el peine"){
            salida = prompt("FALLASTE. Toca ACEPTAR para volver a intentar o ESC para salir").toLowerCase()
        }else{
            alert("Felicitaciones has adivinado!")
            }
        if(salida == "esc"){
            break
        }
    }
}

alert("Presiona ENTER para comenzar")

let adivinanzas = parseInt(prompt("Hay cuatro adivinanzas, escriba el numero y aparecera. \n .1 \n .2 \n .3 \n .4"))

switch(adivinanzas){
    case 1:
        adivinanzaAraña();
    break
    case 2:
        adivinanzaMusica();
    break
    case 3:
        adivinanzaPeine();
    break
    case 4:
        adivinanzaSilencio();
    break
    default:
        alert("Opcion desconocida")
    break
}
