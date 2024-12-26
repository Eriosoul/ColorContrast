// Inicializar combinaciones vacías
let combinaciones = [];

// Cargar combinaciones desde el archivo JSON
fetch('./colors_combinations/combinaciones_validas.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("No se pudo cargar el archivo JSON");
        }
        return response.json();
    })
    .then(data => {
        combinaciones = data;
        console.log("Datos cargados:", combinaciones); // Verifica los datos cargados
    })
    .catch(error => console.error("Error cargando JSON:", error));

// Aplicar colores aleatorios al hacer clic en el botón
document.getElementById('randomButton').addEventListener('click', () => {
    if (combinaciones.length > 0) {
        const randomColor = combinaciones[Math.floor(Math.random() * combinaciones.length)];

        // Seleccionar todos los elementos de la sección específica
        const cards = document.querySelectorAll('.grid-section.content .card');

        // Aplicar colores a cada tarjeta
        cards.forEach(card => {
            card.style.backgroundColor = randomColor.Background_Color;
            card.style.color = randomColor.Text_Color;
        });

        // Mostrar el ratio de contraste
        const puntuacion = document.querySelectorAll('.puntuacion-contraste');
        puntuacion.forEach(element => {
            element.textContent = randomColor.Contrast_Ratio; // Mostrar el contraste
        });
    } else {
        alert("No hay combinaciones disponibles o no se han cargado.");
    }
});

// Resetear los colores al estado inicial
document.getElementById('resetButton').addEventListener('click', () => {
    const cards = document.querySelectorAll('.grid-section.content .card');
    cards.forEach(card => {
        card.style.backgroundColor = ''; // Volver al estilo por defecto
        card.style.color = ''; // Volver al estilo por defecto
    });

    // Resetear el ratio de contraste
    const puntuacion = document.querySelectorAll('.puntuacion-contraste');
    puntuacion.forEach(element => {
        element.textContent = ''; // Limpiar el texto del ratio
    });
});
