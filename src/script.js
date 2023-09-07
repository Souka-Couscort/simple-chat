let currentUser = "me"; // Default user is 'you'

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
  const message = messageInput.value.trim();

  if (message !== "") {
    const messageElement = document.createElement("div");

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
    timestampElement.style.textAlign = "end";
    messageElement.appendChild(timestampElement);

    // Tambahkan kelas "timestamp-you" atau "timestamp-me" tergantung pada user yang aktif
    if (currentUser === "you") {
      timestampElement.classList.add("timestamp-you");
    } else {
      timestampElement.classList.add("timestamp-me");
    }

    // Jam

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

// GREETINGS

function updateGreetingMessage() {
  const greetingMessage = document.getElementById("greetingMessage");
  const jamElement = document.getElementById("jam");

  // Ambil waktu saat ini
  const currentTime = new Date();
  const jam = currentTime.getHours();
  const menit = currentTime.getMinutes();

  // Update teks waktu (misal: 10:20)
  jamElement.textContent = `${jam.toString().padStart(2, "0")}:${menit.toString().padStart(2, "0")}`;

  // Tentukan pesan selamat siang, selamat pagi, atau selamat malam berdasarkan waktu saat ini
  if (jam >= 4 && jam < 12) {
    greetingText = "Selamat Pagi";
  } else if (jam >= 12 && jam < 15) {
    greetingText = "Selamat Siang";
  } else if (jam >= 15 && jam < 18) {
    greetingText = "Selamat Sore";
  } else if (jam >= 18 || jam < 4) {
    greetingText = "Selamat Malam";
  }

  // Update teks pesan selamat siang/pagi/malam
  greetingMessage.textContent = greetingText;
}

// Panggil fungsi untuk pertama kali
updateGreetingMessage();

// Update teks pesan selamat siang/pagi/malam setiap detik
setInterval(updateGreetingMessage, 1000);
