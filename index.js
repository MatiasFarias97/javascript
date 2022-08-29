const INICIO = prompt("Escribe la palabra INICIO para comenzar")
let respuesta
 if(INICIO.toUpperCase == "INICIO"){
    respuesta = prompt("En alto vive, en alto mora; teje que teje, la tejedora. La respuesta es...")
        if(respuesta.toLocaleLowerCase == "la araña" || respuesta.toLocaleLowerCase == "araña"){
            alert("Respuesta correcta")
    }else{
        alert("Respuesta incorrecta")
    }
 }else{
    alert("Vuelve cuando quieras jugar")
 }