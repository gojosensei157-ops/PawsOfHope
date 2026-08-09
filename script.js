/* =========================================
   PAWS OF HOPE JAVASCRIPT
========================================= */


/* =========================================
   1. MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {

        mainNav.classList.toggle("open");

    });

}


/* =========================================
   2. DARK / LIGHT MODE
========================================= */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            themeToggle.textContent = "☀️";

            localStorage.setItem("theme", "dark");

        } else {

            themeToggle.textContent = "🌙";

            localStorage.setItem("theme", "light");

        }

    });

}


/* Load saved theme */

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

    if (themeToggle) {
        themeToggle.textContent = "☀️";
    }

}


/* =========================================
   3. BACK TO TOP
========================================= */

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", function () {

    if (!backTop) return;

    if (window.scrollY > 300) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


if (backTop) {

    backTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================
   4. SERVICE BUTTON FEEDBACK
========================================= */

const learnButtons =
    document.querySelectorAll(".learn-more");

const serviceMessage =
    document.getElementById("serviceMessage");

learnButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        if (!serviceMessage) return;

        serviceMessage.textContent =
            button.getAttribute("data-message");

        serviceMessage.classList.add("show");

        setTimeout(function() {

            serviceMessage.classList.remove("show");

        }, 3500);

    });

});


/* =========================================
   5. GALLERY FILTER
========================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const galleryItems =
    document.querySelectorAll(".gallery-item");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        filterButtons.forEach(function(btn) {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const filter =
            button.getAttribute("data-filter");

        galleryItems.forEach(function(item) {

            if (
                filter === "all" ||
                item.classList.contains(filter)
            ) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});


/* =========================================
   6. GALLERY IMAGE MODAL
========================================= */

const modal =
    document.getElementById("imageModal");

const modalImage =
    document.getElementById("modalImage");

const closeModal =
    document.getElementById("closeModal");

const galleryButtons =
    document.querySelectorAll(".gallery-item");


galleryButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        if (!modal || !modalImage) return;

        const image =
            button.getAttribute("data-image");

        modalImage.src = image;

        modal.classList.add("show");

    });

});


if (closeModal) {

    closeModal.addEventListener("click", function() {

        modal.classList.remove("show");

    });

}


if (modal) {

    modal.addEventListener("click", function(event) {

        if (event.target === modal) {

            modal.classList.remove("show");

        }

    });

}


/* =========================================
   7. CONTACT FORM VALIDATION
========================================= */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let valid = true;


        const name =
            document.getElementById("name");

        const email =
            document.getElementById("email");

        const subject =
            document.getElementById("subject");

        const message =
            document.getElementById("message");


        const nameError =
            document.getElementById("nameError");

        const emailError =
            document.getElementById("emailError");

        const subjectError =
            document.getElementById("subjectError");

        const messageError =
            document.getElementById("messageError");

        const formSuccess =
            document.getElementById("formSuccess");


        nameError.textContent = "";
        emailError.textContent = "";
        subjectError.textContent = "";
        messageError.textContent = "";
        formSuccess.textContent = "";


        /* Name */

        if (name.value.trim() === "") {

            nameError.textContent =
                "Please enter your name.";

            valid = false;

        }


        /* Email */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.value.trim() === "") {

            emailError.textContent =
                "Please enter your email.";

            valid = false;

        } else if (!emailPattern.test(email.value)) {

            emailError.textContent =
                "Please enter a valid email address.";

            valid = false;

        }


        /* Subject */

        if (subject.value.trim() === "") {

            subjectError.textContent =
                "Please enter a subject.";

            valid = false;

        }


        /* Message */

        if (message.value.trim() === "") {

            messageError.textContent =
                "Please enter your message.";

            valid = false;

        }


        /* Success */

        if (valid) {

            formSuccess.textContent =
                "Thank you! Your message has been received.";

            contactForm.reset();

        }

    });

}