document.getElementById('sendButton').addEventListener('click', async () => {
    const userInput = document.getElementById('userInput').value;
    if (!userInput) return;

    // Mostrar el mensaje del usuario
    addMessage(userInput, 'user');
    
    // Llamar a la API de Chatbot Builder AI
    const response = await fetch('https://app.chatgptbuilder.io/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': '1170050.YpHixBpoqnT14OfkGOZowORgq2qpRHT62B5vZW' // Reemplaza con tu token
        },
        body: JSON.stringify({ message: userInput })
    });

    const data = await response.json();

    // Mostrar la respuesta del bot
    addMessage(data.response, 'bot');
    document.getElementById('userInput').value = ''; // Limpiar el campo de entrada
});

function addMessage(message, type) {
    const messagesDiv = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message ' + type;
    messageDiv.textContent = message;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Desplazar hacia abajo
}
