document.addEventListener("DOMContentLoaded", function () {
    // Configuramos un observer para esperar la aparición de ".chat-area".
    const bodyObserver = new MutationObserver(() => {
        const chatArea = document.querySelector(".chat-area");
        if (chatArea) {
            bodyObserver.disconnect(); // Detenemos el observer una vez que encontramos ".chat-area".
            iniciarObserver(chatArea); // Iniciamos el observer en ".chat-area".
        }
    });

    // Observamos cambios en el <body> para detectar cuando aparece ".chat-area" dinámicamente.
    bodyObserver.observe(document.body, { childList: true, subtree: true });
});

function iniciarObserver(chatArea) {
    // Creamos un observer para vigilar los nuevos nodos (mensajes) añadidos dentro de ".chat-area"
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                // Aseguramos que el nodo es un elemento HTML
                if (node.nodeType === 1) {
                    const messageTextElement = node.querySelector('.message-text pre');
                    if (messageTextElement) {
                        const messageText = messageTextElement.innerText;

                        // Detectamos y registramos mensajes del bot y del usuario
                        if (node.classList.contains('other-message')) {
                            console.log("Mensaje del bot:", messageText);
                            // Aquí puedes procesar el mensaje del bot
                        } else if (node.classList.contains('my-message')) {
                            console.log("Mensaje del usuario:", messageText);
                            // Aquí puedes procesar el mensaje del usuario
                        }
                    }
                }
            });
        });
    });

    // Configuramos el observer para observar los cambios en el área del chat
    observer.observe(chatArea, { childList: true, subtree: true });
}
