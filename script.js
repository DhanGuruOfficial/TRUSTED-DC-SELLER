/* ==========================================
   TRUSTED DC SELLER V6
   SCRIPT PART 1
========================================== */

// ================================
// Back To Top Button
// ================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "flex";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ================================
// Sticky Navbar
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(7,11,23,.85)";
        header.style.backdropFilter = "blur(20px)";
        header.style.transition = ".3s";

    } else {

        header.style.background = "transparent";

    }

});


// ================================
// Scroll Reveal Animation
// ================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
".service-card,.price-card,.team-card,.about-card,.stat-box,.faq-item"
).forEach((el) => {

    el.classList.add("hidden");

    observer.observe(el);

});


// ================================
// Counter Animation
// ================================

const counters = document.querySelectorAll(".stat-box h2");

counters.forEach(counter => {

    const update = () => {

        const target = Number(counter.innerText.replace(/\D/g, ""));

        let current = Number(counter.getAttribute("data-count")) || 0;

        const speed = Math.ceil(target / 60);

        if (current < target) {

            current += speed;

            counter.setAttribute("data-count", current);

            counter.innerText = current + "+";

            requestAnimationFrame(update);

        } else {

            if (target === 24) {

                counter.innerText = "24/7";

            } else if (target === 99) {

                counter.innerText = "99%";

            } else {

                counter.innerText = target + "+";

            }

        }

    };

    update();

});


// ================================
// Active Navigation
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ================================
// Smooth Anchor Scroll
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});
