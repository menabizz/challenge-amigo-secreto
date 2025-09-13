// Crear un array para almacenar los nombres
let listaAmigos = [];
console.log(listaAmigos);

// Implementa una función para agregar amigos, y añadirlo a la lista de amigos array.
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let amigoAgregado = document.getElementById("amigo").value;
    console.log(amigoAgregado);
    
    // Validar la entrada. Si el valor es válido, añadirlo al array.
    if (amigoAgregado == '') {
        alert('Por favor, ingrese un nombre.')
    } else {
        listaAmigos.push(amigoAgregado);
    }
    console.log(listaAmigos);

    // Limpiar el campo de entrada.
    limpiarCaja();

    return;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
    return;
}