// URL Google Apps Script
const APP_URL = "https://script.google.com/macros/s/AKfycbzbw0pMdeLaD4o1ZZrsHNrvT5c8AvIIMShkwJpiET3aXTQTqW05gz6sUnjAJo2sPqUmvw/exec";

document.addEventListener("DOMContentLoaded", () => {

    const card = document.querySelector(".card");
    const status = document.querySelector(".small");

    const messages = [
        "Menghubungkan ke server...",
        "Memuat data komunitas...",
        "Menyiapkan aplikasi...",
        "Hampir selesai..."
    ];

    let i = 0;

    const interval = setInterval(() => {
        if (i < messages.length) {
            status.innerText = messages[i];
            i++;
        }
    }, 700);

    setTimeout(() => {

        clearInterval(interval);

        card.style.transition = "all .6s ease";
        card.style.opacity = "0";
        card.style.transform = "translateY(-25px) scale(.96)";

        setTimeout(() => {
            window.location.href = APP_URL;
        }, 600);

    }, 3200);

});
