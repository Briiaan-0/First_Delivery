// Captura el formulario y el contenedor donde se mostrarán las respuestas
const form = document.getElementById('responseForm');
const responseList = document.getElementById('responseList');

// Escucha el evento "submit" del formulario
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Previene el envío predeterminado del formulario

    // Captura los valores de los campos
    const name = document.getElementById('name').value;
    const response = document.getElementById('response').value;

    // Crea un nuevo elemento de lista para mostrar el nombre y la respuesta
    const listItem = document.createElement('li');
    listItem.textContent = `${name}: ${response}`;

    // Agrega la nueva respuesta a la lista
    responseList.appendChild(listItem);

    // Limpia el formulario
    form.reset();
});
