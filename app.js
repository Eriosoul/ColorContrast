document.getElementById("colorForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener el valor del color seleccionado
    const selectedColor = document.getElementById("colorPicker").value;

    // Cambiar el fondo de todos los divs con la clase .box
    const divs = document.querySelectorAll(".box");
    divs.forEach(div => {
        div.style.backgroundColor = selectedColor;
    });
});

document.getElementById("textColorForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener el valor del color de texto
    const textColor = document.getElementById("textColorInput").value;

    // Cambiar el color de texto de las secciones correspondientes
    const textElements = document.querySelectorAll(".normal-text-info, .large-text-info, .box h3, .box p");
    textElements.forEach(element => {
        element.style.color = textColor;
    });
});