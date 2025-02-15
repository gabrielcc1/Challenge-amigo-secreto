let listaDeAmigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;

    if (nombre === '') {
        alert("Por favor, inserte un nombre.");
    } else {
        listaDeAmigos.push(nombre);
        mostrarLista(); // Llama a la función para actualizar la lista en pantalla
    }

    limpiandoCaja();
}
function mostrarLista() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = ''; // Limpia la lista antes de actualizarla

    for (let i = 0; i < listaDeAmigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = listaDeAmigos[i];
        listaHTML.appendChild(li);
    }
}

function limpiandoCaja() {
    document.getElementById('amigo').value = '';
}
