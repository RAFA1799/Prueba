document.addEventListener("DOMContentLoaded", function () {
    // Configuramos un observer para vigilar cuando aparezca ".chat-area" dinámicamente en el DOM.
    const bodyObserver = new MutationObserver(() => {
        const chatArea = document.querySelector(".chat-area");
        if (chatArea) {
            bodyObserver.disconnect(); // Detenemos el observer al encontrar ".chat-area".
            iniciarObserver(chatArea); // Iniciamos el observer específico para ".chat-area".
        }
    });

    // Comenzamos a observar el <body> para detectar la aparición de ".chat-area" en el DOM.
    bodyObserver.observe(document.body, { childList: true, subtree: true });
});

function iniciarObserver(chatArea) {
    // Creamos un observer que detectará cualquier cambio dentro de ".chat-area"
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                // Verificamos que el nodo agregado es un elemento (tipo 1)
                if (node.nodeType === 1) {
                    const messageTextElement = node.querySelector('.message-text pre');
                    if (messageTextElement) {
                        const messageText = messageTextElement.innerText;

                        // Clasificamos los mensajes según el tipo de clase
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

    // Configuramos el observer para que detecte la adición de nodos dentro de ".chat-area"
    observer.observe(chatArea, { childList: true, subtree: true });
}
