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

    // Actualizar la lista de amigos en el HTML.
    mostrarAmigo();

    return;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
    return;
}

// Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML.
function mostrarAmigo() {
    // Obtener el elemento de la lista: Seleccionar la lista <ul> donde se mostrarán los amigos.
    let listaHTML = document.getElementById("listaAmigos");

    // Limpiar la lista existente con .innerHTML para asegurarse de que no haya duplicados al actualizar.
    listaHTML.innerHTML = "";

    // Iterar sobre el arreglo: Usa un bucle FOR para recorrer el arreglo amigos.
    for (let iterar = 0; iterar < listaAmigos.length; iterar++) {                      
        
        // Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista <li> usando la iteracion.
        let nuevoElementoLista = document.createElement("li");
        nuevoElementoLista.textContent = listaAmigos[iterar];
        listaHTML.appendChild(nuevoElementoLista);
    }
    
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
        let numAleatorio = Math.floor(Math.random()*listaAmigos.length); 
        console.log(numAleatorio);

        // Mostrar el resultado del sorteo en el elemento HTML.
        resultadoHTML.innerHTML = `Tu amigo secreto es: ${listaAmigos[numAleatorio]}`;
    }

    return;
}
