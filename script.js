// ======================
// NAVBAR ACTIVE
// ======================

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

// ======================
// EMAILJS
// ======================

emailjs.init({
    publicKey: "XzhCZZfTfRni1Oa5P"
});

// Ambil form
const form = document.getElementById("contact-form");

// Event submit
form.addEventListener("submit", function (e) {

    e.preventDefault();

    // Ambil data dari form
    const templateParams = {

        nama: document.getElementById("nama").value,

        email: document.getElementById("email").value,

        subjek: document.getElementById("subjek").value,

        pesan: document.getElementById("pesan").value

    };

    console.log(templateParams);

    emailjs.send(
        "service_6c45ypm",
        "template_lg2udu8",
        templateParams
    )
    .then(function (response) {

        console.log("SUCCESS!", response.status, response.text);

        alert("Pesan berhasil dikirim!");

        form.reset();

    })
    .catch(function (error) {

        console.log("FAILED...", error);

        alert("Pesan gagal dikirim!");

    });

});

// ============================
// ACTIVE NAVBAR
// ============================

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

// ============================
// HAMBURGER MENU
// ============================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("show");
        menuBtn.classList.toggle("active");

    });

}

// ============================
// TUTUP MENU SAAT LINK DIKLIK
// ============================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("show");

        if(menuBtn){
            menuBtn.classList.remove("active");
        }

    });

});

// ============================
// RESET SAAT LAYAR BESAR
// ============================

window.addEventListener("resize", () => {

    if(window.innerWidth > 768){

        nav.classList.remove("show");

        if(menuBtn){
            menuBtn.classList.remove("active");
        }

    }

});
