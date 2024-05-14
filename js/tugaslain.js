const text = "My Creations";
let letterIndex = 0;

function type() {
    const typedText = text.slice(0, letterIndex + 1);
    document.getElementById('typed-text').textContent = typedText;
    letterIndex++;
    if (letterIndex < text.length) {
        setTimeout(type, 100); // Waktu penundaan antara pengetikan huruf
    }
}

type(); // Memulai efek mengetik