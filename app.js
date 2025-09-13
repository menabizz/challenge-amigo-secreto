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

// Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos.
function sortearAmigo() {
    // Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
    if (listaAmigos.length === 0) {
        alert('No hay amigos para sortear. Por favor, agrega al menos un amigo.');
    } else {
        // Seleccionar el elemento en el HTML donde se mostrará el resultado del sorteo.
        let resultadoHTML = document.getElementById("resultado");

        // Generar un índice / posición aleatoria del array con Math.random() y Math.floor(). No hace falta sumar 1 porque el array empieza en 0.
        // Nos aseguramos que el índice esté dentro del length del array.
        let indiceAleatorio = Math.floor(Math.random()*listaAmigos.length); 

        // Mostrar el resultado del sorteo en el elemento HTML.
        resultadoHTML.innerHTML = `Tu amigo secreto es: ${listaAmigos[indiceAleatorio]}`;

        return;
    }

}
