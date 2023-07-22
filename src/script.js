let currentUser = "you"; // Default user is 'you'

function setUser(user) {
  currentUser = user;
}

function sendMessage() {
  const messageInput = document.getElementById("messageInput");
  const chatBox = document.getElementById("chatBox");
  const message = messageInput.value.trim();

  if (message !== "") {
    const messageElement = document.createElement("div");
    messageElement.textContent = currentUser.charAt(0).toUpperCase() + currentUser.slice(1) + ": " + message;
    messageElement.classList.add(currentUser + "-message");
    messageElement.style.borderRadius = "5px";
    messageElement.style.padding = "10px";
    messageElement.style.marginBottom = "5px";
    chatBox.appendChild(messageElement);

    // Clear the input field after sending the message
    messageInput.value = "";

    // Scroll to the bottom of the chat box to see the latest message
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}

function handleKeyDown(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}

function active() {}
