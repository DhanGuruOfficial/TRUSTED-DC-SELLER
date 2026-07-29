/* ==========================================
   TRUSTED DC SELLER
   SCRIPT.JS V3 - PART 1
========================================== */

window.addEventListener("load", () => {
    document.body.classList.add("loaded");

    const loader = document.querySelector(".loader");

    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.pointerEvents = "none";

            setTimeout(() => {
                loader.remove();
            }, 600);

        }, 800);
    }
});

/* =============================
      Sticky Navbar
============================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.classList.add("sticky");

    } else {

        navbar.classList.remove("sticky");

    }

});


/* =============================
      Smooth Scroll
============================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/* =============================
     Scroll Reveal Animation
============================= */

const revealElements=document.querySelectorAll(

".card,.price-card,.glass-card,.review-box,section h2"

);

const revealObserver=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.20

}

);

revealElements.forEach(el=>{

el.classList.add("hidden");

revealObserver.observe(el);

});


/* =============================
     Active Navigation
============================= */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

const height=section.clientHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/* =============================
     Back To Top Button
============================= */

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show-top");

}else{

topBtn.classList.remove("show-top");

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


/* =============================
     Button Ripple Effect
============================= */

document.querySelectorAll(

".btn1,.btn2,.discord-btn,.contact-btn,.price-card a"

)

.forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

ripple.style.left=e.clientX-rect.left+"px";

ripple.style.top=e.clientY-rect.top+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},700);

});

});


/* =============================
      Random Glow Effect
============================= */

setInterval(()=>{

document.querySelectorAll(".card").forEach(card=>{

card.style.boxShadow="0 0 "+

(Math.random()*25+15)+

"px rgba(124,58,237,.35)";

});

},2500);
/* ==========================================
   TRUSTED DC SELLER
   SCRIPT.JS V3 - PART 2
========================================== */

/* =============================
      Cursor Glow
============================= */

const cursor = document.createElement("div");
cursor.className = "cursor-glow";
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});


/* =============================
      Floating Particles
============================= */

const particleContainer = document.createElement("div");
particleContainer.className = "particles";
document.body.appendChild(particleContainer);

for (let i = 0; i < 30; i++) {

    const particle = document.createElement("span");

    particle.className = "particle";

    particle.style.left = Math.random() * 100 + "%";

    particle.style.animationDuration =
        (Math.random() * 8 + 6) + "s";

    particle.style.animationDelay =
        Math.random() * 5 + "s";

    particle.style.opacity =
        Math.random();

    particle.style.transform =
        "scale(" + (Math.random() + .4) + ")";

    particleContainer.appendChild(particle);

}


/* =============================
      Animated Counters
============================= */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 120;

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.floor(count);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target;

                }

            }

            update();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* =============================
      Mouse Parallax
============================= */

const hero = document.querySelector(".hero");

document.addEventListener("mousemove", (e) => {

    if (!hero) return;

    const x = (window.innerWidth / 2 - e.clientX) / 35;

    const y = (window.innerHeight / 2 - e.clientY) / 35;

    hero.style.transform =
        `translate(${x}px, ${y}px)`;

});


/* =============================
      3D Card Tilt
============================= */

document.querySelectorAll(".card,.price-card")
.forEach(card => {

card.addEventListener("mousemove", e => {

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

const rotateX = -(y - rect.height / 2) / 12;

const rotateY = (x - rect.width / 2) / 12;

card.style.transform =
`perspective(1000px)
 rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)
 scale(1.04)`;

});

card.addEventListener("mouseleave", () => {

card.style.transform =
"perspective(1000px) rotateX(0) rotateY(0) scale(1)";

});

});


/* =============================
      Hero Floating Animation
============================= */

let heroFloat = 0;

setInterval(() => {

heroFloat += 0.05;

const right = document.querySelector(".hero-right");

if (right) {

right.style.transform =
`translateY(${Math.sin(heroFloat) * 10}px)`;

}

}, 25);


/* =============================
      Typing Effect
============================= */

const typingElement = document.querySelector(".typing-text");

if (typingElement) {

const words = [

"Discord Servers",

"AI Bots",

"Premium Websites",

"Digital Services"

];

let word = 0;

let letter = 0;

let deleting = false;

setInterval(() => {

const current = words[word];

if (!deleting) {

typingElement.textContent =
current.substring(0, letter++);

if (letter > current.length) {

deleting = true;

setTimeout(() => {}, 800);

}

} else {

typingElement.textContent =
current.substring(0, letter--);

if (letter === 0) {

deleting = false;

word++;

if (word >= words.length)
word = 0;

}

}

}, 100);

}


/* =============================
      FPS Friendly Optimization
============================= */

window.addEventListener("blur", () => {

document.body.classList.add("paused");

});

window.addEventListener("focus", () => {

document.body.classList.remove("paused");

});


console.log(
"Trusted DC Seller V3 Part 2 Loaded Successfully."
);
