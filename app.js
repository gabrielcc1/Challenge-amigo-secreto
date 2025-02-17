let listaDeAmigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;

    if (nombre === '') {
        alert("Por favor, inserte un nombre.");
    } else {
        listaDeAmigos.push(nombre);
        mostrarLista(); // función para actualizar la lista en pantalla.

    }

    limpiandoCaja();
}
function mostrarLista() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';  // Limpia la lista antes de actualizarla.


    for (let i = 0; i < listaDeAmigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = listaDeAmigos[i];
        listaHTML.appendChild(li);
    }
}

function limpiandoCaja() {
    document.getElementById('amigo').value = '';
}
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceAleatorio];

    document.getElementById('listaAmigos').innerHTML = ''; // Vacía la lista en pantalla.
    listaDeAmigos = [];// Vacía el array de amigos.

    document.getElementById('resultado').innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
    // Muestra el resultado del sorteo.
}
