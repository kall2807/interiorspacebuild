// ======================
// ACTIVE NAVBAR
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

const form = document.getElementById("contact-form");

if (form) {

    emailjs.init({
        publicKey: "XzhCZZfTfRni1Oa5P"
    });

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const templateParams = {
            nama: document.getElementById("nama").value,
            email: document.getElementById("email").value,
            subjek: document.getElementById("subjek").value,
            pesan: document.getElementById("pesan").value
        };

        emailjs.send(
            "service_6c45ypm",
            "template_lg2udu8",
            templateParams
        )
        .then(() => {
            alert("Pesan berhasil dikirim!");
            form.reset();
        })
        .catch((error) => {
            console.error(error);
            alert("Pesan gagal dikirim!");
        });

    });

}

// ================================
// ACTIVE MENU
// ================================

const links = document.querySelectorAll("nav a");

links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});

// ================================
// HEADER SCROLL
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.style.background = "rgba(10,30,60,.95)";
        header.style.backdropFilter = "blur(15px)";
    } else {
        header.style.background = "rgba(255,255,255,.08)";
        header.style.backdropFilter = "blur(12px)";
    }
});
