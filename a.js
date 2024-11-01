// Escuchar cambios en el contenedor del chat y manipular el texto de las respuestas
document.addEventListener("DOMContentLoaded", function () {
    const chatContainer = document.querySelector(".ktt10-iframe"); // Verifica el selector correcto en el DOM

    if (chatContainer) {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    const newMessage = mutation.addedNodes[0];

                    // Filtrar solo los mensajes del bot
                    if (newMessage && newMessage.classList.contains('other-message')) {
                        const messageText = newMessage.innerText || newMessage.textContent;

                        // Manipular el texto de la respuesta
                        console.log("Respuesta del bot:", messageText);
                        // Puedes agregar aquí cualquier lógica para manipular el texto
                    }
                }
            });
        });

        observer.observe(chatContainer, { childList: true, subtree: true });
    } else {
        console.warn("Contenedor del chat no encontrado.");
    }
});
