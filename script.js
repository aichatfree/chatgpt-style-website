function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    
    if (userInput.trim() === '') return; // Ignore empty messages
    
    // Add user message to chat
    const userMessageDiv = document.createElement('div');
    userMessageDiv.classList.add('message', 'user-message');
    userMessageDiv.textContent = userInput;
    document.getElementById('chatBox').appendChild(userMessageDiv);

    // Clear input field
    document.getElementById('userInput').value = '';

    // Scroll to the bottom of the chat box
    document.getElementById('chatBox').scrollTop = document.getElementById('chatBox').scrollHeight;

    // Simulate bot response
    setTimeout(() => {
        const botMessageDiv = document.createElement('div');
        botMessageDiv.classList.add('message', 'bot-message');
        botMessageDiv.textContent = "I'm here to help! (This is a simulated response)";
        document.getElementById('chatBox').appendChild(botMessageDiv);

        // Scroll to the bottom again
        document.getElementById('chatBox').scrollTop = document.getElementById('chatBox').scrollHeight;
    }, 1000);
}
