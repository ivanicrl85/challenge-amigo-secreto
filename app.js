// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function agregarAmigo (){
    console.log(listaAmigos);
    let nombre = document.getElementById('amigo').value;
    console.log(nombre); 
    nombre = nombre.trim().toLowerCase();

    if (nombre ===""){
        alert ("el campo esta vacio")
    } else {
        if (listaAmigos.includes(nombre)){
            alert("el nombre ya esta en la lista, prueba con otro nombre")
            return limpiarNombre();
        }
        else{
            listaAmigos.push(nombre);
            return limpiarNombre();
        }
    }
}

function limpiarNombre(){
    document.getElementById('amigo').value ='';
}