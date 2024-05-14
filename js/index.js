const texts = ["Biografi.", "Website Ini Dibuat Dengan Javascript, CSS, dan HTML.", "Dibuat Oleh: Hafiz."];
let index = 0;
let currentText = '';
let letterIndex = 0;

function type() {
    if (index < texts.length) {
        currentText = texts[index];
        document.getElementById('typed-text').textContent = currentText.slice(0, letterIndex + 1);
        letterIndex++;
        if (letterIndex === currentText.length) {
            setTimeout(erase, 1200); // Waktu penundaan sebelum menghapus teks
        } else {
            setTimeout(type, 100); // Waktu penundaan antara pengetikan huruf
        }
    } else {
        index = 0; // Kembali ke teks pertama setelah mencapai teks terakhir
        setTimeout(type, 200); // Waktu penundaan sebelum memulai kembali
    }
}

function erase() {
    if (letterIndex >= 0) {
        currentText = texts[index];
        document.getElementById('typed-text').textContent = currentText.slice(0, letterIndex);
        letterIndex--;
        setTimeout(erase, 50); // Waktu penundaan antara penghapusan huruf
    } else {
        index++;
        setTimeout(type, 500); // Waktu penundaan sebelum mengetik kembali
    }
}

type();
