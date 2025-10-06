/* 🌸 Gameboy for You - Script Interaktif */

// ==================== 🔊 Efek Suara ====================
const clickSound = new Audio('assets/click.mp3');
clickSound.volume = 0.3;

// ==================== 📱 Navigasi Antar Halaman ====================
const screens = document.querySelectorAll('.screen');
const menuButtons = document.querySelectorAll('.menu-btn');
const backButtons = document.querySelectorAll('.back-btn');
const loadingScreen = document.getElementById('loading-screen');
const progressFill = document.getElementById('progress-fill');
const progressText = document.querySelector('.progress-text');

// Fungsi ganti layar
function showScreen(id) {
    screens.forEach(screen => screen.classList.remove('active'));
    document.getElementById(`${id}-screen`).classList.add('active');
    clickSound.play();
}

// Tombol menu
menuButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-page');
        showScreen(target);
    });
});

// Tombol kembali
backButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-page');
        showScreen(target);
    });
});

// ==================== ⏳ Loading Screen Animasi ====================
let progress = 0;
let interval = setInterval(() => {
    progress += 5;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${progress}%`;

    if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
            loadingScreen.classList.remove('active');
            document.getElementById('main-screen').classList.add('active');
        }, 500);
    }
}, 200);

// ==================== 🖼️ Galeri Otomatis ====================
const galleryImages = [
    'https://ibb.co.com/WpgyFdkD',
    'https://ibb.co.com/4RjDcCZN',
    'https://ibb.co.com/RktVRgX5',
    'https://ibb.co.com/HpVTtcLH',
    'https://ibb.co.com/hF85064r',
    'https://ibb.co.com/DH49hjvt',
    'https://ibb.co.com/jvYny0x7',
    'https://ibb.co.com/m5GkN8dM'
];

const galleryContainer = document.getElementById('gallery');
if (galleryContainer) {
    galleryImages.forEach(link => {
        const img = document.createElement('img');
        // Perbaiki link agar menampilkan gambar langsung
        img.src = link.replace('ibb.co.com', 'i.ibb.co') + '.jpg';
        galleryContainer.appendChild(img);
    });
}

// ==================== 🕹️ Mini Tetris Dummy ====================
// Placeholder untuk game, nanti bisa diganti versi interaktif
const tetrisCanvas = document.getElementById('tetris-canvas');
const ctx = tetrisCanvas.getContext('2d');
ctx.fillStyle = "#d4b2f0";
ctx.font = "16px monospace";
ctx.fillText("TETRIS MODE", 80, 200);

// Simulasi "Game Over"
setTimeout(() => {
    showFinalMessage();
}, 20000); // 20 detik setelah layar Tetris aktif

// ==================== 💬 Pesan Akhir ====================
const finalModal = document.getElementById('final-message-modal');
const okButton = document.getElementById('ok-btn');

function showFinalMessage() {
    finalModal.style.display = 'flex';
    clickSound.play();
}

if (okButton) {
    okButton.addEventListener('click', () => {
        finalModal.style.display = 'none';
        showScreen('main');
    });
}

// ==================== 💖 Efek Ketik Pesan ====================
function typeMessage(element, message, speed = 60) {
    let i = 0;
    function typing() {
        if (i < message.length) {
            element.innerHTML += message.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// Ketik pesan saat layar "message" dibuka
const messageScreen = document.getElementById('message-screen');
const messageText = document.querySelector('.message-text');
messageScreen.addEventListener('click', () => {
    messageText.innerHTML = "";
    typeMessage(messageText, "Jangan merasa kesepian, masih ada orang yang sayang sama kamu🤗\nSemangattt Cantikkkk😊🤍", 50);
});

// ==================== 🎮 Efek Klik Tombol ====================
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('mousedown', () => clickSound.play());
});
