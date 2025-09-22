// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
    let listaAmigos = [];
    let lista = document.getElementById("listaAmigos");
    let resultado = document.getElementById("resultado"); 

    function agregarAmigo (){
    let nombre = document.getElementById('amigo').value;
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
            listaNombreAmigos();
            limpiarNombre();
        }
    }
}

function limpiarNombre(){
    document.getElementById('amigo').value ='';
}
function listaNombreAmigos(){
   
    lista.innerHTML ="";
    for (let i=0; i<listaAmigos.length;i++){
       let li = document.createElement("li");
        li.textContent = listaAmigos[i];
        lista.appendChild(li);
}

}
function sortearAmigo(){

      
    if (listaAmigos.length===0 ){
        resultado.innerHTML = "<li> No hay amigos en la lista para sortear.</li>";
        return;

    }
    lista.innerHTML = "";

    let sorteoGanador = Math.floor(Math.random()*listaAmigos.length)
    let amigoGanador   = listaAmigos[sorteoGanador];
     resultado.innerHTML = `El amigo sorteado es: <b>${amigoGanador}</b>`;
}