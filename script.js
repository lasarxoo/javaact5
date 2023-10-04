const catImage = document.getElementById('catImage');
const getCatButton = document.getElementById('gatoboton');

getCatButton.addEventListener('click', () => {
    // Hacer una solicitud a la API de The Cat API
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            // Obtener la URL de la imagen del gato
            const imageUrl = data[0].url;
            
            // Establecer la URL de la imagen en la etiqueta de imagen
            catImage.src = imageUrl;
        })
        .catch(error => {
            console.error('Error al obtener la imagen del gato:', error);
        });
});
