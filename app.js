let amigos=[];

function asignarTextoElemento(elemento, texto){ //2 parametros que recibe la funcion
    let elementoHTML= document.querySelector(elemento); //dom la forma que tengo de conectar los elementos de la pagina con mi javascript- me permite trabajar con varios elemenos 
    elementoHTML.innerHTML = texto;
}

function limpiarCaja(){
    document.querySelector('#amigo').value='';
}
function agregarAmigo(){ //agrega un elemnto a la lista amigo y lo muestra en pantalla
    let elemento=document.getElementById('amigo').value;
    
    if(elemento==''){
       alert('Por favor, inserte un nombre.');    
    }else if(amigos.includes(elemento)){
        alert('Ese nombre ya esta en la lista, intente nuevamente')
    }
    else{
    amigos.push(elemento);
    console.log(amigos);
    limpiarCaja();
    actualizarLista();
    }   
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // limpiar la lista antes de volver a pintarla

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
function sortearAmigo() {

    if (amigos.length == 0) {
        alert("¡No hay amigos en la lista! Por favor, agregá al menos uno antes de sortear.");
        return; 
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let elementoResultado = document.getElementById('resultado');
  
    elementoResultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
    document.getElementById('listaAmigos').innerHTML = '';
}