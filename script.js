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