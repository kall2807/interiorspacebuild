// ===============================
// ACTIVE NAVBAR
// ===============================

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

// ===============================
// HAMBURGER MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("show");
        menuBtn.classList.toggle("active");
    });

    document.querySelectorAll("nav a").forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("show");
            menuBtn.classList.remove("active");
        });
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            nav.classList.remove("show");
            menuBtn.classList.remove("active");
        }
    });

}

// ===============================
// EMAILJS
// ===============================

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

        .then(function () {

            alert("Pesan berhasil dikirim!");
            form.reset();

        })

        .catch(function (error) {

            console.error(error);

            alert("Pesan gagal dikirim!");

        });

    });

}
