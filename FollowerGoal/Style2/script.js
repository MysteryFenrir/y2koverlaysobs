// Función para actualizar el contenido del overlay
function updateOverlay(title, grade, percentage) {
    document.getElementById('title').innerText = title;
    document.getElementById('grade').innerText = grade;
    document.getElementById('percentage').innerText = percentage;
}

// Ejemplo de actualización de los textos
updateOverlay('nivel total', 'S', '85.0%');

// Simular una actualización periódica
setTimeout(() => {
    updateOverlay('nuevo nivel', 'A+', '90.0%');
}, 5000);
