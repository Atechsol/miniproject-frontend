function sendMessage() {
    const userInput = document.getElementById("userInput");
    const chatWindow = document.getElementById("chatWindow");

    const message = userInput.value.trim();
    if (message === "") {
        return;
    }

    // Display the user's message
    const userMessage = document.createElement("div");
    userMessage.className = "chat-message user";
    userMessage.textContent = message;
    chatWindow.appendChild(userMessage);

    // Simulate a chatbot response
    const botMessage = document.createElement("div");
    botMessage.className = "chat-message bot";
    botMessage.textContent = "Thank you for reaching out! How can I assist you?";
    chatWindow.appendChild(botMessage);

    // Clear the input and scroll to the bottom
    userInput.value = "";
    chatWindow.scrollTop = chatWindow.scrollHeight;
}
