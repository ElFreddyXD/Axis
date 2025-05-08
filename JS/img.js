const imagenes = ["IMG/ConstruccionZeroAI.jpg", "IMG/Semafaros.jpeg"];
let indice = 0;

const imagenCambiante = document.getElementById("imagen-cambiante");

setInterval(() => {
    // Oculta la imagen actual
    imagenCambiante.classList.add("hidden");

    // Espera a que la transición termine antes de cambiar la imagen
    setTimeout(() => {
        indice = (indice + 1) % imagenes.length;
        imagenCambiante.src = imagenes[indice];

        // Muestra la nueva imagen
        imagenCambiante.classList.remove("hidden");
    }, 200); // Tiempo igual al de la transición en CSS (1s)
}, 5000); // Cambia cada 5 segundos