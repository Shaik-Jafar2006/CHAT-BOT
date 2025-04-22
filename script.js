// Get references to HTML elements
const chatWindow = document.getElementById("chat-window");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

// Add event listener for the Send button
sendButton.addEventListener("click", handleUserInput);

function handleUserInput() {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        // Add user message to the chat window
        addMessage(userMessage, "user-message");

        // Generate a response
        generateResponse(userMessage);

        // Clear the input field
        userInput.value = "";
    }
}

// Function to add a message to the chat window
function addMessage(message, className) {
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    messageElement.classList.add(className);
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
}

// Function to generate a response
function generateResponse(userMessage) {
    let botReply;

    // Simple keyword-based responses
    if (userMessage.toLowerCase().includes("hello")) {
        botReply = "Hello! How can I assist you today?";
    } else if (userMessage.toLowerCase().includes("how are you")) {
        botReply = "I'm just a chatbot, but I'm here to help you!";
    } else if (userMessage.toLowerCase().includes("what is your name")) {
        botReply = "I'm your friendly chatbot!";
    } else {
        botReply = "I'm sorry, I don't understand that. Can you try rephrasing?";
    }

    // Add bot reply to the chat window
    addMessage(botReply, "bot-message");
}
