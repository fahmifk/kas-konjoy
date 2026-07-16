// URL Google Apps Script
const APP_URL = "https://script.google.com/macros/s/AKfycbzbw0pMdeLaD4o1ZZrsHNrvT5c8AvIIMShkwJpiET3aXTQTqW05gz6sUnjAJo2sPqUmvw/exec";

document.addEventListener("DOMContentLoaded", () => {

    const loader = document.getElementById("loader");
    const status = document.getElementById("loadingText");
    const loginArea = document.getElementById("login-area");
    const loginBtn = document.getElementById("loginBtn");

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

    },700);

    // Setelah loading selesai
    setTimeout(() => {

        clearInterval(interval);

        loader.style.display = "none";
        status.style.display = "none";

        loginArea.style.display = "block";

    },3200);

    // Saat tombol login diklik
    loginBtn.addEventListener("click",(e)=>{

        e.preventDefault();

        loginBtn.innerHTML="⏳ Menghubungkan...";

        loginBtn.style.pointerEvents="none";

        setTimeout(()=>{

            window.location.href=APP_URL;

        },1000);

    });

});
