document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar el contenedor del área de chat
    const chatArea = document.querySelector(".chat-area");

    if (chatArea) {
        // Crear el observer para detectar cambios en el DOM
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    // Verificar si el nodo agregado es un mensaje del bot o del usuario
                    if (node.nodeType === 1) { // Asegura que es un elemento
                        const messageTextElement = node.querySelector('.message-text pre');
                        
                        if (messageTextElement) {
                            const messageText = messageTextElement.innerText;

                            // Diferenciar mensajes del bot y del usuario
                            if (node.classList.contains('other-message')) {
                                console.log("Mensaje del bot:", messageText);
                                // Aquí puedes manipular el mensaje del bot
                            } else if (node.classList.contains('my-message')) {
                                console.log("Mensaje del usuario:", messageText);
                                // Aquí puedes manipular el mensaje del usuario
                            }
                        }
                    }
                });
            });
        });

        // Configurar el observer para observar los cambios en el área del chat
        observer.observe(chatArea, { childList: true, subtree: true });
    } else {
        console.warn("No se encontró el contenedor del área de chat.");
    }
});

