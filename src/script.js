let currentUser = "you"; // Default user is 'you'

function setUser(user) {
  currentUser = user;

  // Menghilangkan kelas "active" dari semua tombol
  const youButton = document.getElementById("youButton");
  const meButton = document.getElementById("meButton");
  youButton.classList.remove("active");
  meButton.classList.remove("active");

  // Menambahkan kelas "active" pada tombol yang dipilih
  if (user === "you") {
    youButton.classList.add("active");
  } else if (user === "me") {
    meButton.classList.add("active");
  }

  autoFocusInput();
}

function sendMessage() {
  const messageInput = document.getElementById("messageInput");
  const chatBox = document.getElementById("chatBox");
  const timestampContainer = document.getElementById("timestampContainer");
  const message = messageInput.value.trim();

  if (message !== "") {
    const messageElement = document.createElement("div");

    // Membuat elemen untuk menampilkan nama pengguna (You / Me)
    const userElement = document.createElement("div");
    userElement.textContent = `${currentUser.charAt(0).toUpperCase() + currentUser.slice(1)}`;
    userElement.classList.add("username"); // Tambahkan kelas untuk gaya CSS
    messageElement.appendChild(userElement);

    // Membuat elemen untuk menampilkan pesan
    const messageText = document.createElement("div");
    messageText.textContent = message;
    messageElement.appendChild(messageText);

    // Membuat elemen untuk menampilkan waktu atau jam
    const timestampElement = document.createElement("div");
    const timestamp = new Date();
    const hours = timestamp.getHours().toString().padStart(2, "0");
    const minutes = timestamp.getMinutes().toString().padStart(2, "0");
    timestampElement.textContent = `${hours}:${minutes}`;
    timestampElement.classList.add("timestamp"); // Tambahkan kelas untuk gaya CSS
    messageElement.appendChild(timestampElement);

    // Tambahkan kelas "timestamp-you" atau "timestamp-me" tergantung pada user yang aktif
    if (currentUser === "you") {
      timestampElement.classList.add("timestamp-you");
    } else {
      timestampElement.classList.add("timestamp-me");
    }

    messageElement.classList.add(currentUser + "-message");
    messageElement.style.borderRadius = "5px";
    messageElement.style.padding = "10px";
    messageElement.style.marginBottom = "20px";
    chatBox.appendChild(messageElement);

    // Clear the input field after sending the message
    messageInput.value = "";

    // Scroll to the bottom of the chat box to see the latest message
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}
function autoFocusInput() {
  const messageInput = document.getElementById("messageInput");
  messageInput.focus();
}

function handleKeyDown(event) {
  if (event.key === "Enter") {
    sendMessage();
  } else if (event.key === "/") {
    // Jika tombol "/" ditekan, auto focus ke input teks
    autoFocusInput();
  }
}
